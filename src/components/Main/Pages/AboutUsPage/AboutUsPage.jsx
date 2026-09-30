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
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://unitstake.com/about-us',
                url: 'https://unitstake.com/about-us',
                name: 'UnitStake',
                inLanguage: 'en',
                publisher: {
                    '@type': 'Organization',
                    '@id': 'https://unitstake.com/about-us',
                    name: 'UnitStake',
                    url: 'https://unitstake.com/about-us',
                    logo: 'https://unitstake.com/icon-512.png',
                },
            },
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
                    content="https://unitstake.com/social_image.PNG"
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
