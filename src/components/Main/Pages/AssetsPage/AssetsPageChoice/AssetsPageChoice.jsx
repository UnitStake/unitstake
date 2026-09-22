import classes from './AssetsPageChoice.module.css';

import choiceImg from '../../../../../assets/images/assetsPageImages/ecosystemMap.png';
import choiceIcon1 from '../../../../../assets/images/assetsPageImages/choice1.svg';
import choiceIcon2 from '../../../../../assets/images/assetsPageImages/choice2.svg';
import choiceIcon3 from '../../../../../assets/images/assetsPageImages/choice3.svg';
import choiceIcon4 from '../../../../../assets/images/assetsPageImages/choice4.svg';

const choiceBoxes = [
    {
        id: '1',
        icon: choiceIcon1,
        title: `Increase your project's visibility within an international audience interested in tokenized asset projects.`,
        subtitle: 'INCREASE PROJECT VISIBILITY',
        text: 'Launched the tokenized fund BUIDL, signaling institutional confidence in blockchain-based fund infrastructure.',
    },
    {
        id: '2',
        icon: choiceIcon2,
        title: 'Structure your project, its structure, key data and team in a clear and professional format.',
        subtitle: 'PRESENT INFORMATION CLEARLY',
        text: 'We help package your asset with the right materials and narrative',
    },
    {
        id: '3',
        icon: choiceIcon3,
        title: 'Increase transparency through structured project information and the opportunity to obtain Verified by UnitStake status.',
        subtitle: 'STRENGTHEN TRANSPARENCY',
        text: 'Turn complex structures into clear, understandable opportunities',
    },
    {
        id: '4',
        icon: choiceIcon4,
        title: 'Give interested investors structured access to the key information they need to independently understand and evaluate your project.',
        subtitle: 'MAKE AUDIENCE EVALUATION EASIER',
        text: 'Understand where your asset fits within the evolving tokenized market',
    },
];

const AssetsPageChoice = () => {
    return (
        <section className={`sectionMarginTop ${classes.choice}`}>
            <div className="wrapper">
                <div className={classes.choiceHeader}>
                    <div className={classes.fakeBtn}>
                        <div className={classes.fakeBtnContainer}>
                            <div className={classes.fakeBtnCircle}></div>
                            <p>Ecosystem Positioning</p>
                        </div>
                    </div>
                    <h2>Why Projects Choose UnitStake Aggregator?</h2>
                    <h3>
                        UnitStake Aggregator gives projects a structured way to
                        present themselves within an ecosystem built around an
                        international audience. It helps make your project more
                        visible, credible and easier for relevant audiences to
                        discover and evaluate.
                    </h3>
                </div>
                <div className={classes.choiceContainer}>
                    <div className={classes.choiceInfo}>
                        <div className={classes.choiceInfoHeader}>
                            YOUR PROJECT CAN:
                        </div>
                        <ul className={classes.choiceInfoContainer}>
                            {choiceBoxes.map((item) => (
                                <li
                                    key={item.id}
                                    className={classes.choiceInfoBox}
                                >
                                    <div className={classes.choiceInfoBoxIcon}>
                                        <img src={item.icon} alt="icon" />
                                    </div>
                                    <div className={classes.choiceInfoBoxTxt}>
                                        <h5>{item.subtitle}</h5>
                                        <h4>{item.title}</h4>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={classes.choiceInfoContainerText}>
                            Not an issuer. Not a broker-dealer, investment
                            adviser, or arranger of transactions in investments.
                            A structured visibility layer that helps the market
                            navigate itself.
                        </div>
                    </div>
                    <div className={classes.choiceImg}>
                        <img src={choiceImg} alt="Ecosystem Map" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssetsPageChoice;
