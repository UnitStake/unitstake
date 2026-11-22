import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    tablesDB,
    DATABASE_ID,
    TABLE_ID_TOTAL_AMOUNT,
} from '../../../../../lib/appwrite';
import classes from './MainPageTotalAmount.module.css';

const MainPageTotalAmount = () => {
    const navigate = useNavigate();
    const [totalAmount, setTotalAmount] = useState('');

    useEffect(() => {
        const fetchTotalAmount = async () => {
            try {
                const response = await tablesDB.listRows({
                    databaseId: DATABASE_ID,
                    tableId: TABLE_ID_TOTAL_AMOUNT,
                });
                if (response.rows?.length > 0) {
                    setTotalAmount(response.rows[0].total_amount ?? '');
                }
            } catch (error) {
                console.error('Error fetching total amount:', error);
            }
        };

        fetchTotalAmount();
    }, []);

    if (
        totalAmount === '' ||
        totalAmount === null ||
        totalAmount === undefined ||
        totalAmount === 0
    ) {
        return null;
    }

    const numberFormatter = new Intl.NumberFormat('en-US');

    return (
        <section className={classes.mainPageTotalAmount}>
            <div className="wrapper">
                <div className={classes.fakeBtnBox}>
                    <div className={classes.fakeBtn}>
                        <div className={classes.fakeBtnContainer}>
                            <div className={classes.fakeBtnCircle}></div>
                            <p>Tokenized Assets on UnitStake</p>
                        </div>
                    </div>
                </div>
                <div className={classes.mainPageTotalAmountValue}>
                    <span className={classes.totalAmountSymbol}>$</span>
                    <span className={classes.totalAmount}>
                        {numberFormatter.format(totalAmount)}
                    </span>
                    <span className={classes.totalAmountSymbol}>+</span>
                </div>
                <div className={classes.totalAmountTxt}>
                    <h2>Total Value of Listed Projects</h2>
                    <p>
                        Explore tokenized real-world asset projects through
                        structured data and transparent project information.
                    </p>
                    <div className={classes.linkToProjects}>
                        <button onClick={() => navigate('/projects')}>
                            View All Projects
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.14307 17.4583L17.143 1.14307"
                                    stroke="white"
                                    strokeWidth="2.28571"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M17.1433 13.8014V1.25735C17.1433 1.19423 17.0921 1.14307 17.029 1.14307H4.65771"
                                    stroke="white"
                                    strokeWidth="2.28571"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPageTotalAmount;
