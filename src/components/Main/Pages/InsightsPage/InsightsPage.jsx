import { Helmet } from 'react-helmet-async';
import News from './News/News';
import Insights from './Insights/Insights';
import Reports from './Reports/Reports';

import classes from './InsightsPage.module.css';

const InsightsPage = () => {
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
