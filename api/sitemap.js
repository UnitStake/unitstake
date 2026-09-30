import { Client, TablesDB, Query } from 'node-appwrite';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).send('Method Not Allowed');
    }

    const DOMAIN = 'https://unitstake.com';

    const client = new Client()
        .setEndpoint('https://fra.cloud.appwrite.io/v1')
        .setProject(process.env.VITE_APPWRITE_PROJECT_ID);

    if (process.env.APPWRITE_API_KEY) {
        client.setKey(process.env.APPWRITE_API_KEY);
    }

    const tablesDB = new TablesDB(client);

    try {
        const [platformsResponse, projectsResponse, insightsResponse] =
            await Promise.all([
                tablesDB.listRows({
                    databaseId: process.env.VITE_APPWRITE_DATABASE_ID,
                    tableId: process.env.VITE_APPWRITE_TABLE_ID_PLATFORMS,
                    queries: [Query.limit(1000)],
                }),
                tablesDB.listRows({
                    databaseId: process.env.VITE_APPWRITE_DATABASE_ID,
                    tableId: process.env.VITE_APPWRITE_TABLE_ID_PROJECTS,
                    queries: [
                        Query.equal('is_published', true),
                        Query.limit(1000),
                    ],
                }),
                tablesDB.listRows({
                    databaseId: process.env.VITE_APPWRITE_DATABASE_ID,
                    tableId: process.env.VITE_APPWRITE_TABLE_ID_NEWS,
                    queries: [
                        Query.equal('is_published', true),
                        Query.limit(1000),
                    ],
                }),
            ]);

        const staticPages = [
            '',
            '/projects',
            '/platforms',
            '/for-assets-owners',
            '/insights',
            '/academy',
            '/about-us',
            '/verified',
            '/contact-us',
        ];

        const staticXml = staticPages
            .map(
                (path) => `
  <url>
    <loc>${DOMAIN}${path}</loc>
    <changefreq>daily</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`,
            )
            .join('');

        const platformsXml = platformsResponse.rows
            .map(
                (platform) => `
  <url>
    <loc>${DOMAIN}/platforms/${platform.$id}</loc>
    <lastmod>${new Date(platform.$updatedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`,
            )
            .join('');

        const projectsXml = projectsResponse.rows
            .map(
                (project) => `
  <url>
    <loc>${DOMAIN}/projects/${project.$id}</loc>
    <lastmod>${new Date(project.$updatedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`,
            )
            .join('');

        const insightsXml = insightsResponse.rows
            .map(
                (insight) => `
  <url>
    <loc>${DOMAIN}/insights/${insight.$id}</loc>
    <lastmod>${new Date(insight.$updatedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`,
            )
            .join('');

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${platformsXml}
${projectsXml}
${insightsXml}
</urlset>`;

        res.setHeader('Content-Type', 'application/xml');
        res.setHeader(
            'Cache-Control',
            's-maxage=86400, stale-while-revalidate',
        );
        res.status(200).send(xml);
    } catch (error) {
        console.error('Error generating sitemap:', error);
        res.status(500).send('Error generating sitemap');
    }
}
