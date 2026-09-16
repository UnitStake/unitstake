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
    return (
        <>
            <Helmet>
                <title>About UnitStake: Independent RWA Aggregator</title>
                <meta
                    name="description"
                    content="UnitStake is an independent information aggregator for tokenized real-world assets. We structure and explain project data, we do not sell tokens or advise."
                />
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
