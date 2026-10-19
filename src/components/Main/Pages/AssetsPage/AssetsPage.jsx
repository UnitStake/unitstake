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
    return (
        <>
            <Helmet>
                <title>Tokenize Your Asset: Listing & Own Platform</title>
                <meta
                    name="description"
                    content="Tokenize real estate, businesses, and real-world assets. Get verified on UnitStake, list your project, and launch your own tokenization platform."
                />
                <meta
                    property="og:title"
                    content="Tokenize Your Asset: Listing & Own Platform"
                />
                <meta
                    property="og:description"
                    content="Tokenize real estate, businesses, and real-world assets. Get verified on UnitStake, list your project, and launch your own tokenization platform."
                />
                <meta
                    property="og:image"
                    content="https://unitstake.com/social_image.png"
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
