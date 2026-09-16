import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import classes from './NotFound.module.css';

import notFoundImage from '../../../../assets/images/notFoundImage.png';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <Helmet>
                <title>Page Not Found | UnitStake</title>
                <meta
                    name="description"
                    content="This page does not exist or has moved. Explore tokenized asset projects, platforms, market insights and the UnitStake Academy instead."
                />
            </Helmet>
            <main className={classes.notFoundPage}>
                <section className={classes.notFoundTxt}>
                    <div className="wrapper">
                        <div className={classes.notFoundPageContainer}>
                            <h2>
                                We couldn't find the page <br />
                                you're looking for
                            </h2>
                            <div
                                className={classes.homePageLink}
                                onClick={() => navigate('/')}
                            >
                                Back to Homepage
                            </div>
                        </div>
                    </div>
                </section>
                <div className={classes.NotFoundImage}>
                    <img src={notFoundImage} alt="404" />
                </div>
            </main>
        </>
    );
};

export default NotFound;
