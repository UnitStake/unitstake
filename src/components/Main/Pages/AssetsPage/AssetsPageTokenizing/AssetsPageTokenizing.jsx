import classes from './AssetsPageTokenizing.module.css';

import tokenizingIcon1 from '../../../../../assets/images/assetsPageImages/tokenizingIcon1.svg';
import tokenizingIcon2 from '../../../../../assets/images/assetsPageImages/tokenizingIcon2.svg';
import tokenizingIcon3 from '../../../../../assets/images/assetsPageImages/tokenizingIcon3.svg';
import tokenizingIcon4 from '../../../../../assets/images/assetsPageImages/tokenizingIcon4.svg';
import tokenizingIcon5 from '../../../../../assets/images/assetsPageImages/tokenizingIcon5.svg';

const tokenizingCards = [
    {
        id: '01',
        icon: tokenizingIcon1,
        header: 'GLOBAL AUDIENCE',
        text: 'Present your project within an international audience that includes professionals and organisations following tokenized asset developments',
    },
    {
        id: '02',
        icon: tokenizingIcon2,
        header: 'UNITSTAKE AGGREGATOR',
        text: 'List and present your project in a structured format for public discovery and review.',
    },
    {
        id: '03',
        icon: tokenizingIcon3,
        header: 'VERIFIED BY UNITSTAKE',
        text: 'Increase transparency through project document and key team identity verification.',
    },
    {
        id: '04',
        icon: tokenizingIcon4,
        header: 'OWN DIGITAL PLATFORM',
        text: 'Build your own branded digital infrastructure for onboarding, documentation and participant management.',
    },
    {
        id: '05',
        icon: tokenizingIcon5,
        header: 'AUDIENCE FOCUS',
        text: 'Position your project within sectors currently most viewed and searched by Aggregator users.',
    },
];

const AssetsPageTokenizing = () => {
    return (
        <section className={classes.tokenizing}>
            <div className="wrapper">
                <h2>
                    Grow Your Project Opportunities with UnitStake Ecosystem
                </h2>
                <div className={classes.tokenizingContainer}>
                    {tokenizingCards.map((item) => (
                        <div key={item.id} className={classes.tokenizingCard}>
                            <div className={classes.tokenizingCardPosition}>
                                <div
                                    className={
                                        classes.tokenizingCardPositionImg
                                    }
                                >
                                    <img src={item.icon} alt="icon" />
                                </div>
                                <div
                                    className={
                                        classes.tokenizingCardPositionNumber
                                    }
                                >
                                    {`${item.id} / 0${tokenizingCards.length}`}
                                </div>
                            </div>
                            <h3>{item.header}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AssetsPageTokenizing;
