import { Helmet } from 'react-helmet-async';
import News from './News/News';
import Insights from './Insights/Insights';
import Reports from './Reports/Reports';

import classes from './InsightsPage.module.css';

const InsightsPage = () => {
    const schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CollectionPage',
                '@id': 'https://unitstake.com/insights',
                url: 'https://unitstake.com/insights',
                name: 'UnitStake',
                inLanguage: 'en',
                publisher: {
                    '@type': 'Organization',
                    '@id': 'https://unitstake.com/insights',
                    name: 'UnitStake',
                    url: 'https://unitstake.com/insights',
                    logo: 'https://unitstake.com/icon-512.png',
                },
            },
        ],
    };

    return (
        <>
            <Helmet>
                <title>
                    RWA Tokenization News, Research & Insights | UnitStake
                </title>
                <meta
                    name="description"
                    content="Market updates, regulation and research on tokenized real-world assets: MiCA, SEC and FCA rules, institutional deals and real estate tokenization analysis."
                />
                <meta
                    property="og:title"
                    content="UnitStake — RWA Tokenization Aggregator"
                />
                <meta
                    property="og:description"
                    content="Navigate the market of tokenized assets and RWA tokenization with confidence. Discover verified platforms, fractional ownership opportunities, and real-time data in one place."
                />
                <meta
                    property="og:image"
                    content="https://unitstake.com/social_image.png"
                />
                <meta
                    property="og:url"
                    content="https://unitstake.com/insights"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="UnitStake" />
                <link rel="canonical" href="https://unitstake.com/insights" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <main className={classes.insightsPage}>
                <section className={classes.news}>
                    <div className="wrapper">
                        <h2>News & Market Updates</h2>
                        <p>
                            Explore market analysis, tokenization trends,
                            platform research, industry updates, and educational
                            content across real-world assets and digital
                            ownership.
                        </p>
                    </div>
                </section>
                <News />
                <section className={classes.insights}>
                    <div className="wrapper">
                        <h2>Latest Insights</h2>
                    </div>
                </section>
                <Insights />
                <section className={classes.reports}>
                    <div className="wrapper">
                        <h2>Reports & Research</h2>
                    </div>
                </section>
                <Reports />
            </main>
        </>
    );
};

export default InsightsPage;
