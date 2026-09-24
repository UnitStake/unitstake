import classes from './AssetsPageTypes.module.css';

import typesIcon1 from '../../../../../assets/images/assetsPageImages/typesIcon1.svg';
import typesIcon2 from '../../../../../assets/images/assetsPageImages/typesIcon2.svg';
import typesIcon3 from '../../../../../assets/images/assetsPageImages/typesIcon3.svg';
import typesIcon4 from '../../../../../assets/images/assetsPageImages/typesIcon4.svg';
import typesIcon5 from '../../../../../assets/images/assetsPageImages/typesIcon5.svg';
import typesIcon6 from '../../../../../assets/images/assetsPageImages/typesIcon6.svg';
import typesIcon7 from '../../../../../assets/images/assetsPageImages/typesIcon7.svg';
import typesIcon8 from '../../../../../assets/images/assetsPageImages/typesIcon8.svg';
import typesIcon9 from '../../../../../assets/images/assetsPageImages/typesIcon9.svg';
import typesIcon10 from '../../../../../assets/images/assetsPageImages/typesIcon10.svg';
import typesIcon11 from '../../../../../assets/images/assetsPageImages/typesIcon11.svg';
import typesIcon12 from '../../../../../assets/images/assetsPageImages/typesIcon12.svg';
import typesIcon13 from '../../../../../assets/images/assetsPageImages/typesIcon13.svg';
import typesIcon14 from '../../../../../assets/images/assetsPageImages/typesIcon14.svg';

const typesBoxes = [
    {
        id: '1',
        icon: typesIcon1,
        txt: 'Technology',
    },
    {
        id: '2',
        icon: typesIcon2,
        txt: 'Real Estate',
    },
    {
        id: '3',
        icon: typesIcon3,
        txt: 'Hospitality',
    },
    {
        id: '4',
        icon: typesIcon4,
        txt: 'Energy & Infrastructure',
    },
    {
        id: '5',
        icon: typesIcon5,
        txt: 'Dual-Use Technology',
    },
    {
        id: '6',
        icon: typesIcon6,
        txt: ' iGaming',
    },
    {
        id: '7',
        icon: typesIcon7,
        txt: 'Food & Beverage',
    },
    {
        id: '8',
        icon: typesIcon8,
        txt: 'Art & Luxury',
    },
    {
        id: '9',
        icon: typesIcon9,
        txt: 'Entertainment',
    },
    {
        id: '10',
        icon: typesIcon10,
        txt: 'Industrials',
    },
    {
        id: '11',
        icon: typesIcon11,
        txt: 'Land & Development',
    },
    {
        id: '12',
        icon: typesIcon12,
        txt: 'Investment Funds',
    },
    {
        id: '13',
        icon: typesIcon13,
        txt: 'Agriculture',
    },
    {
        id: '14',
        icon: typesIcon14,
        txt: 'Mobility Tech',
    },
];

const AssetsPageTypes = () => {
    return (
        <section className={classes.types}>
            <div className="wrapper">
                <div className={classes.typesHeader}>
                    <div className={classes.fakeBtn}>
                        <div className={classes.fakeBtnContainer}>
                            <div className={classes.fakeBtnCircle}></div>
                            <p>Suitable Asset Types</p>
                        </div>
                    </div>
                    <p className={classes.typesHeaderText}>
                        Explore the sectors currently within our community’s
                        investment focus.
                    </p>
                </div>
                <div className={classes.typesContainer}>
                    {typesBoxes.map((item) => (
                        <div key={item.id} className={classes.typesBox}>
                            <div className={classes.typesBoxIcon}>
                                <img src={item.icon} alt="icon" />
                            </div>
                            <h4>{item.txt}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AssetsPageTypes;
