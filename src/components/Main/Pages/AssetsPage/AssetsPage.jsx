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
                <title>
                    How to Tokenize an Asset: Owner's Guide | UnitStake
                </title>
                <meta
                    name="description"
                    content="How to tokenize real estate, businesses and other real-world assets: asset selection, SPV structuring, token issuance and platform listing, step by step."
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
