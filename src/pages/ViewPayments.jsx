import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ViewTransactionsPage.css';
import { useNavigate } from 'react-router-dom';

const ViewPayments = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigation = useNavigate()
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('https://facebookadsmangerserver.vercel.app/api/transactions');
                setTransactions(response.data);
            } catch (err) {
                setError('Error fetching transactions');
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://facebookadsmangerserver.vercel.app/api/transactions/${id}`);
            setTransactions(transactions.filter(transaction => transaction._id !== id));
        } catch (err) {
            setError('Error deleting transaction');
        }
    };

    const handleEdit = (id) => {
        // Redirect to edit page or show edit form (not implemented here)
        navigation(`/editpayment/${id}`)
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="transactions-container">
            <h1 className="transactions-title">Transactions</h1>
            <div className="transactions-list">
                {transactions.map((transaction) => (
                    <div key={transaction._id} className="transaction-item">
                        <div className="transaction-details">
                            <p><strong>Transaction ID:</strong> {transaction.TransactionID}</p>
                            <p><strong>Date:</strong> {transaction.Date}</p>
                            <p><strong>Amount:</strong> {transaction.Amount}</p>
                            <p><strong>Payment Method:</strong> {transaction.Paymentmethod}</p>
                            <p><strong>Payment Status:</strong> {transaction.Paymentstatus}</p>
                            <p><strong>VAT Invoice ID:</strong> {transaction.VATinvoiceID}</p>
                        </div>
                        <div className="transaction-actions">
                            <button onClick={() => handleEdit(transaction._id)} className="edit-button">Edit</button>
                            <button onClick={() => handleDelete(transaction._id)} className="delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewPayments;
