import { useNavigate } from 'react-router-dom';
import classes from './AssetsPageBuilt.module.css';

import builtIcon1 from '../../../../../assets/images/assetsPageImages/AssetsPageBuiltIcon1.svg';
import builtIcon2 from '../../../../../assets/images/assetsPageImages/AssetsPageBuiltIcon2.svg';
import builtIcon3 from '../../../../../assets/images/assetsPageImages/AssetsPageBuiltIcon3.svg';
import builtIcon4 from '../../../../../assets/images/assetsPageImages/AssetsPageBuiltIcon4.svg';
import builtIcon5 from '../../../../../assets/images/assetsPageImages/AssetsPageBuiltIcon5.svg';
import builtIcon6 from '../../../../../assets/images/assetsPageImages/AssetsPageBuiltIcon6.svg';

const builtBoxes = [
    {
        id: '01',
        title: 'INVESTMENT PORTAL',
        text: 'Present your project, investment proposition, key information and supporting materials through your own branded page',
        icon: builtIcon1,
    },
    {
        id: '02',
        title: 'PARTICIPANT ONBOARDING & MANAGEMENT',
        text: 'Onboard investors, manage KYC processes, investor profiles and essential data through one centralized digital environment.',
        icon: builtIcon2,
    },
    {
        id: '03',
        title: 'INFORMATION DASHBOARD',
        text: 'Provide investors with secure access to their investments, portfolio information, documents and relevant project information.',
        icon: builtIcon3,
    },
    {
        id: '04',
        title: 'REPORTING & UPDATES',
        text: 'Manage documents, reporting and project updates while keeping important information organized and accessible in one place.',
        icon: builtIcon4,
    },
    {
        id: '05',
        title: 'DISTRIBUTIONS',
        text: 'Use digital infrastructure to record, manage and track distributions and related information for your investors.',
        icon: builtIcon5,
    },
    {
        id: '06',
        title: 'DIGITAL INVESTMENT PROCESS',
        text: 'Maintain digital records of the investment process — from participant data and transaction records to token issuance, representing the relevant rights.',
        icon: builtIcon6,
    },
];

const AssetsPageBuilt = () => {
    const navigate = useNavigate();

    return (
        <section className={`sectionMarginTop ${classes.built}`}>
            <div className="wrapper">
                <h2>Everything You Need - Already Built</h2>
                <div className={classes.builtContainer}>
                    <div className={classes.builtBoxes}>
                        {builtBoxes.map((item) => (
                            <div key={item.id} className={classes.builtBox}>
                                <div className={classes.builtBoxPosition}>
                                    <div className={classes.builtBoxIcon}>
                                        <img src={item.icon} alt="icon" />
                                    </div>
                                    <div className={classes.builtBoxNumber}>
                                        {item.id}
                                    </div>
                                </div>
                                <div className={classes.builtBoxTxt}>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={classes.builtMore}>
                        <div className={classes.builtMoreText}>
                            <h3>Bring Your Project into the Digital Era</h3>
                            <p>
                                Use digital ownership to create a modern,
                                transparent and efficient way to manage project
                                rights and communicate with your investors.
                            </p>
                            <button onClick={() => navigate('/contact-us')}>
                                Start with Digital Ownership
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 3H21V9"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.001 14L21.001 3"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssetsPageBuilt;
