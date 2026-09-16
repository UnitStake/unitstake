import { Helmet } from 'react-helmet-async';
import HeroSection from './HeroSection/HeroSection';
import MainPageAssets from './MainPageAssets/MainPageAssets';
import MainPageAggregator from './MainPageAggregator/MainPageAggregator';
import MainPageFragment from './MainPageFragment/MainPageFragment';
import MainPageMarket from './MainPageMarket/MainPageMarket';
import MainPageProjects from './MainPageProjects/MainPageProjects';
import MainPagePlatforms from './MainPagePlatforms/MainPagePlatforms';
import MainPageForm from './MainPageForm/MainPageForm';
import MainPageNews from './MainPageNews/MainPageNews';
import classes from './MainPage.module.css';

const MainPage = () => {
    return (
        <>
            <Helmet>
                <title>RWA Tokenization Aggregator: Platforms & Projects</title>
                <meta
                    name="description"
                    content="Compare tokenized real-world asset platforms and projects in one structured view. Independent RWA market data, verification and research, not advice."
                />
            </Helmet>
            <main className={classes.mainPage}>
                <HeroSection />
                <MainPageAssets />
                <MainPageAggregator />
                <MainPageFragment />
                <MainPageMarket />
                <MainPageProjects />
                <MainPagePlatforms />
                <MainPageForm />
                <MainPageNews />
            </main>
        </>
    );
};

export default MainPage;
