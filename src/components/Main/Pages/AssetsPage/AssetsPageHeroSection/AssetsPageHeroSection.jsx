import { useNavigate } from 'react-router-dom';
import classes from './AssetsPageHeroSection.module.css';

import graphics from '../../../../../assets/images/mainPageImages/heroSectionImg.png';
import ChecklistUnitStake from '../../../../../assets/documents/Checklist_UnitStake.pdf';

const AssetsPageHeroSection = () => {
    const navigate = useNavigate();
    return (
        <section className={classes.heroSection}>
            <div className="wrapper">
                <div className={classes.heroSectionContainer}>
                    <div className={classes.heroSectionTxt}>
                        <h2>Unlock New Opportunities for Your Project</h2>
                        <p className={classes.heroSectionSecondaryTxt}>
                            UnitStake Aggregator is part of a digital ecosystem
                            that creates a unified space for projects and
                            audience interested in tokenized asset projects. Use
                            the Aggregator to present your project, showcase its
                            potential and key information, and increase its
                            visibility globally.
                        </p>
                        <div className={classes.heroSectionBtns}>
                            <button
                                className={classes.heroSectionBtnProjects}
                                onClick={() => navigate('/contact-us')}
                            >
                                Submit Your Project
                            </button>
                            <a
                                href={ChecklistUnitStake}
                                download={ChecklistUnitStake}
                                className={classes.heroSectionBtnPlatforms}
                            >
                                Get Free Owner Checklist
                            </a>
                        </div>
                    </div>
                    <div className={classes.heroSectionImg}>
                        <img src={graphics} alt="graphics" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssetsPageHeroSection;
