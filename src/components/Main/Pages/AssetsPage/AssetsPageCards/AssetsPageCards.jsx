import { useNavigate } from 'react-router-dom';
import classes from './AssetsPageCards.module.css';

import imgCard1 from '../../../../../assets/images/assetsPageImages/AssetsPageCard1.png';
import imgCard2 from '../../../../../assets/images/assetsPageImages/AssetsPageCard2.png';

const AssetsPageCards = () => {
    const navigate = useNavigate();
    return (
        <section className={`sectionMarginTop ${classes.cards}`}>
            <div className="wrapper">
                <div className={classes.cardsContainer}>
                    <div className={classes.card}>
                        <div className={classes.cardInfo}>
                            <h2>
                                Get Your Project Listed on UnitStake Aggregator
                            </h2>
                            <p>
                                Showcase your project to a global audience
                                through a structured and trusted data
                                environment.
                            </p>
                            <h6>
                                Increase visibility, build credibility, and
                                position your project within a growing
                                ecosystem.
                            </h6>
                            <button onClick={() => navigate('/contact-us')}>
                                Apply for Listing
                            </button>
                        </div>
                        <div className={classes.cardImg}>
                            <img src={imgCard1} alt="card image" />
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.cardInfo}>
                            <h2>YOUR OWN BRANDED DIGITAL PLATFORM</h2>
                            <p>
                                Build your own branded digital infrastructure
                                for presenting project. Manage onboarding,
                                project information, documentation and
                                interactions with participants in one place.
                            </p>
                            <h6>
                                Powered by tokenization, blockchain and smart
                                contract technology.
                            </h6>
                            <button onClick={() => navigate('/contact-us')}>
                                Request Your Platform
                            </button>
                        </div>
                        <div className={classes.cardImg}>
                            <img src={imgCard2} alt="card image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssetsPageCards;
