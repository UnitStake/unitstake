import classes from './AdminDashboard.module.css';
import AdminMails from './AdminMails/AdminMails';
import AdminTotal from './AdminTotal/AdminTotal';

const AdminDashboard = () => {
    return (
        <div className={classes.adminPage}>
            <div className={classes.AdminHeader}>
                <h2>Dashboard</h2>
            </div>
            <AdminTotal />
            <AdminMails />
        </div>
    );
};

export default AdminDashboard;
