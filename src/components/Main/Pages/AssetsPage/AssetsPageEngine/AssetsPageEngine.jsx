import classes from './AssetsPageEngine.module.css';

import engineImg from '../../../../../assets/images/assetsPageImages/engineImg.png';

const AssetsPageEngine = () => {
    return (
        <section className={`sectionMarginTop ${classes.engine}`}>
            <div className={classes.engineWrapper}>
                <div className={classes.engineHeader}>
                    <h2>DIGITAL OWNERSHIP</h2>
                    <h6>Represent Project Rights in a Digital Format</h6>
                    <p>
                        Digital Ownership allows rights defined by your
                        project’s legal documents to be represented digitally
                        through tokens, blockchain infrastructure and smart
                        contracts.
                    </p>
                </div>
                <div className={classes.engineContainer}>
                    <div className={classes.engineContainerTxt}>
                        <h3>HOW DIGITAL OWNERSHIP WORKS</h3>
                        <p>
                            Each token may digitally represent rights defined by
                            your project’s legal structure. Blockchain records
                            who owns it, while smart contracts help automate
                            certain administrative functions related to these
                            rights.
                        </p>
                    </div>
                    <div className={classes.engineContainerImg}>
                        <img src={engineImg} alt="engine image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssetsPageEngine;
