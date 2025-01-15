import '../styles/CreatePayment.css'
import React, { useState } from 'react';
import axios from 'axios';

const CreatePayment = () => {
    const [formData, setFormData] = useState({
        TransactionID: '',
        Date: '',
        Amount: '',
        Paymentmethod: '',
        Paymentstatus: '',
        VATinvoiceID: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('https://facebookadsmangerserver.vercel.app/api/transactions', formData);
            console.log(response.data);
            setFormData({
                TransactionID: '',
                Date: '',
                Amount: '',
                Paymentmethod: '',
                Paymentstatus: '',
                VATinvoiceID: ''
            })
        } catch (err) {
            setError('Error submitting form');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Transaction Form</h1>
            <form className="transaction-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="TransactionID">Transaction ID</label>
                    <input
                        type="text"
                        name="TransactionID"
                        value={formData.TransactionID}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Date">Date</label>
                    <input
                        type="date"
                        name="Date"
                        value={formData.Date}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Amount">Amount</label>
                    <input
                        type="text"
                        name="Amount"
                        value={formData.Amount}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Paymentmethod">Payment Method</label>
                    <input
                        type="text"
                        name="Paymentmethod"
                        value={formData.Paymentmethod}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Paymentstatus">Payment Status</label>
                    <input
                        type="text"
                        name="Paymentstatus"
                        value={formData.Paymentstatus}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="VATinvoiceID">VAT Invoice ID</label>
                    <input
                        type="text"
                        name="VATinvoiceID"
                        value={formData.VATinvoiceID}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default CreatePayment;
