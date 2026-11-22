import { useState, useEffect } from 'react';
import {
    tablesDB,
    DATABASE_ID,
    TABLE_ID_TOTAL_AMOUNT,
} from '../../../../../lib/appwrite';
import classes from './AdminTotal.module.css';

const AdminTotal = () => {
    const [totalAmount, setTotalAmount] = useState('');
    const [rowId, setRowId] = useState('');

    useEffect(() => {
        const fetchTotalAmount = async () => {
            try {
                const response = await tablesDB.listRows({
                    databaseId: DATABASE_ID,
                    tableId: TABLE_ID_TOTAL_AMOUNT,
                });
                if (response.rows?.length > 0) {
                    setRowId(response.rows[0].$id);
                    setTotalAmount(response.rows[0].total_amount ?? '');
                }
            } catch (error) {
                console.error('Error fetching total amount:', error);
            }
        };

        fetchTotalAmount();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (totalAmount === '') return;

        try {
            const response = await tablesDB.updateRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID_TOTAL_AMOUNT,
                rowId: rowId,
                data: {
                    total_amount: Number(totalAmount),
                },
            });
            setTotalAmount(response.total_amount ?? totalAmount);
            alert('The total amount has been successfully updated!');
        } catch (error) {
            console.error('Error updating total amount:', error);
        }
    };

    return (
        <div className={classes.adminTotal}>
            <h4>Total Amount</h4>
            <div className={classes.AdminTotalForm}>
                <div className={classes.addPlatformFormIdentityField}>
                    <input
                        type="number"
                        id="totalAmount"
                        placeholder="e.g. $10000000"
                        value={totalAmount}
                        onChange={(e) => setTotalAmount(e.target.value)}
                    />
                </div>
                <button
                    className={classes.submitBtn}
                    type="submit"
                    onClick={handleSubmit}
                >
                    Update Total Amount
                </button>
            </div>
        </div>
    );
};

export default AdminTotal;
