import classes from './AssetsPagePath.module.css';

const pathBoxes = [
    {
        id: '1',
        title: 'PROJECT SCREENING',
        txt: `Check your project's fit with the UnitStake's listing categories and prepare it for the next step.`,
    },
    {
        id: '2',
        title: 'LISTING PREPARATION',
        txt: 'Structure your project information and materials into a clear, professional format designed for audience review.',
    },
    {
        id: '3',
        title: 'AGGREGATOR LISTING & VERIFICATION',
        txt: 'Present your project on UnitStake Aggregator and strengthen its transperency with Verified by UnitStake status.',
    },
    {
        id: '4',
        title: 'AUDIENCE DISCOVERY',
        txt: `Make your project discoverable to relevant members of UnitStake's platform audience, who can independently review and evaluate the information presented.`,
    },
];

const AssetsPagePath = () => {
    return (
        <section className={classes.path}>
            <div className="wrapper">
                <h2>A Clear Path to Presenting Your Project to Audience</h2>
            </div>
            <div className={classes.pathRow}>
                <div className={`wrapper ${classes.pathContainer}`}>
                    {pathBoxes.map((item) => (
                        <div key={item.id} className={classes.pathBox}>
                            <div className={classes.pathBoxInfo}>
                                <h3>{item.title}</h3>
                                <p>{item.txt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AssetsPagePath;
