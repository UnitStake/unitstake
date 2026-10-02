import { Helmet } from 'react-helmet-async';
import VerifiedPageHeroSection from './VerifiedPageHeroSection/VerifiedPageHeroSection';
import VerifiedPageWeDo from './VerifiedPageWeDo/VerifiedPageWeDo';
import VerifiedPageMatters from './VerifiedPageMatters/VerifiedPageMatters';
import VerifiedPageDisclaimer from './VerifiedPageDisclaimer/VerifiedPageDisclaimer';
import VerifiedPageStatus from './VerifiedPageStatus/VerifiedPageStatus';
import VerifiedPageCategories from './VerifiedPageCategories/VerifiedPageCategories';
import VerifiedPagePlatform from './VerifiedPagePlatform/VerifiedPagePlatform';
import classes from './VerifiedPage.module.css';

const firstDisclaimerTxt = (
    <p>
        Data verification does not constitute independent professional advice or
        expert due diligence. Before making any decisions, it is recommended to
        seek independent consultation from a qualified professional.
    </p>
);

const secondDisclaimerTxt = (
    <>
        <p>
            Verified by UnitStake is a data verification service provided by
            UnitStake as an informational service. UnitStake is an informational
            aggregator. UnitStake is not a broker, investment adviser, financial
            intermediary, or regulated entity.
        </p>
        <p>
            Nothing on this platform, including the Verified by UnitStake
            designation, constitutes investment advice, a financial promotion,
            an offer or invitation to buy or sell any asset, or a recommendation
            of any kind.
        </p>
        <p>
            The Verified by UnitStake designation reflects the results of the
            verification of data disclosed by the project and publicly available
            information as of the date the verification was conducted.
        </p>
        <p>
            The materials presented are for informational purposes only and do
            not constitute a recommendation to take any action.
        </p>
    </>
);

const VerifiedPage = () => {
    const schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://unitstake.com/verified',
                url: 'https://unitstake.com/verified',
                name: 'UnitStake',
                inLanguage: 'en',
                publisher: {
                    '@type': 'Organization',
                    '@id': 'https://unitstake.com/verified',
                    name: 'UnitStake',
                    url: 'https://unitstake.com/verified',
                    logo: 'https://unitstake.com/icon-512.png',
                },
            },
        ],
    };

    return (
        <>
            <Helmet>
                <title>Verified by UnitStake: RWA Project Verification</title>
                <meta
                    name="description"
                    content="A structured verification framework for tokenized assets: legal, financials, team KYC, reputation and tech checks. Not a rating, score or endorsement."
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
                    content="https://unitstake.com/verified"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="UnitStake" />
                <link rel="canonical" href="https://unitstake.com/verified" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <main className={classes.verifiedPage}>
                <VerifiedPageHeroSection />
                <VerifiedPageWeDo />
                <VerifiedPageMatters />
                <VerifiedPageDisclaimer text={firstDisclaimerTxt} />
                <VerifiedPageStatus />
                <VerifiedPageDisclaimer text={secondDisclaimerTxt} />
                <VerifiedPageCategories />
                <VerifiedPagePlatform />
            </main>
        </>
    );
};

export default VerifiedPage;
