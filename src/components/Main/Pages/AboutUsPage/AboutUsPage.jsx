import { Helmet } from 'react-helmet-async';
import AboutUsPageHeroSection from './AboutUsPageHeroSection/AboutUsPageHeroSection';
import AboutUsPageFirstText from './AboutUsPageFirstText/AboutUsPageFirstText';
import AboutUsPageGoal from './AboutUsPageGoal/AboutUsPageGoal';
import AboutUsPageVerification from './AboutUsPageVerification/AboutUsPageVerification';
import AboutUsPagePrinciples from './AboutUsPagePrinciples/AboutUsPagePrinciples';
import AboutUsPagePlatform from './AboutUsPagePlatform/AboutUsPagePlatform';
import AboutUsPageContacts from './AboutUsPageContacts/AboutUsPageContacts';
import AssetsPageFaq from '../AssetsPage/AssetsPageFaq/AssetsPageFaq';
import classes from './AboutUsPage.module.css';

const AboutUsPage = () => {
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://unitstake.com/#organization',
        name: 'UnitStake',
        legalName: 'UNIT STAKE LIMITED',
        url: 'https://unitstake.com/',
        logo: 'https://unitstake.com/icon-512.png',
        description:
            'UnitStake Aggregator is an independent informational aggregator focused on tokenized assets, platforms, and projects in the RWA (Real World Assets) space.',
        email: 'support@unitstake.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '124 City Road',
            addressLocality: 'London',
            postalCode: 'EC1V 2NX',
            addressCountry: 'GB',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'support@unitstake.com',
            },
            {
                '@type': 'ContactPoint',
                contactType: 'partnerships',
                email: 'partners@unitstake.com',
            },
            {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'bd@unitstake.com',
            },
        ],
        sameAs: [
            'https://www.linkedin.com/company/unit-stake/',
            'https://www.instagram.com/unitstake',
            'https://www.threads.com/@unitstake',
        ],
    };

    return (
        <>
            <Helmet>
                <title>About UnitStake: Independent RWA Aggregator</title>
                <meta
                    name="description"
                    content="UnitStake is an independent information aggregator for tokenized real-world assets. We structure and explain project data, we do not sell tokens or advise."
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
                    content="https://unitstake.com/about-us"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="UnitStake" />
                <link rel="canonical" href="https://unitstake.com/about-us" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <main className={classes.aboutUsPage}>
                <AboutUsPageHeroSection />
                <AboutUsPageFirstText />
                <AboutUsPageGoal />
                <AboutUsPageVerification />
                <AboutUsPagePrinciples />
                <AboutUsPagePlatform />
                <AboutUsPageContacts />
                <AssetsPageFaq pageName="about_us" />
            </main>
        </>
    );
};

export default AboutUsPage;
