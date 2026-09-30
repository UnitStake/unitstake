import { Helmet } from 'react-helmet-async';
import AssetsPageHeroSection from './AssetsPageHeroSection/AssetsPageHeroSection';
import AssetsPageTokenizing from './AssetsPageTokenizing/AssetsPageTokenizing';
import AssetsPageTypes from './AssetsPageTypes/AssetsPageTypes';
import AssetsPageMarket from './AssetsPageMarket/AssetsPageMarket';
import AssetsPagePath from './AssetsPagePath/AssetsPagePath';
import AssetsPageChoice from './AssetsPageChoice/AssetsPageChoice';
import AssetsPageCards from './AssetsPageCards/AssetsPageCards';
import AssetsPageEngine from './AssetsPageEngine/AssetsPageEngine';
import AssetsPageBuilt from './AssetsPageBuilt/AssetsPageBuilt';
import AssetsPageMarketingPartners from './AssetsPageMarketingPartners/AssetsPageMarketingPartners';
import AssetsPageLegalPartners from './AssetsPageLegalPartners/AssetsPageLegalPartners';
import AssetsPageInstitutional from './AssetsPageInstitutional/AssetsPageInstitutional';
import AssetsPageDownload from './AssetsPageDownload/AssetsPageDownload';
import AssetsPageFaq from './AssetsPageFaq/AssetsPageFaq';
import MainPageNews from '../MainPage/MainPageNews/MainPageNews';

import classes from './AssetsPage.module.css';

const AssetsPage = () => {
    const schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://unitstake.com/for-assets-owners',
                url: 'https://unitstake.com/for-assets-owners',
                name: 'UnitStake',
                inLanguage: 'en',
                publisher: {
                    '@type': 'Organization',
                    '@id': 'https://unitstake.com/for-assets-owners',
                    name: 'UnitStake',
                    url: 'https://unitstake.com/for-assets-owners',
                    logo: 'https://unitstake.com/icon-512.png',
                },
            },
        ],
    };

    return (
        <>
            <Helmet>
                <title>
                    How to Tokenize an Asset: Owner's Guide | UnitStake
                </title>
                <meta
                    name="description"
                    content="How to tokenize real estate, businesses and other real-world assets: asset selection, SPV structuring, token issuance and platform listing, step by step."
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
                    content="https://unitstake.com/for-assets-owners"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="UnitStake" />
                <link
                    rel="canonical"
                    href="https://unitstake.com/for-assets-owners"
                />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <main className={classes.assetsPage}>
                <AssetsPageHeroSection />
                <AssetsPageTokenizing />
                <AssetsPageTypes />
                <AssetsPageMarket />
                <AssetsPagePath />
                <AssetsPageChoice />
                <AssetsPageCards />
                <AssetsPageEngine />
                <AssetsPageBuilt />
                {/* <AssetsPageMarketingPartners /> */}
                {/* <AssetsPageLegalPartners /> */}
                <AssetsPageInstitutional />
                <AssetsPageDownload />
                <AssetsPageFaq pageName="assets_owners" />
                <MainPageNews />
            </main>
        </>
    );
};

export default AssetsPage;
