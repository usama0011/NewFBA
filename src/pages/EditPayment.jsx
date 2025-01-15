import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPayment = () => {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const response = await axios.get(`https://facebookadsmangerserver.vercel.app/api/transactions/${id}`);
                setCampaign(response.data);
            } catch (err) {
                setError('Error fetching campaign');
            } finally {
                setLoading(false);
            }
        };

        fetchCampaign();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCampaign({
            ...campaign,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            await axios.put(`https://facebookadsmangerserver.vercel.app/api/transactions/${id}`, campaign);
            alert('Campaign has been updated successfully');
            navigate('/viewmyampaings');
        } catch (err) {
            setError('Error updating campaign');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }
    return (
        <div className="edit-campaign-container">
            <h1 className="edit-campaign-title">Edit Payment</h1>
            {campaign && (
                <form className="edit-campaign-form" onSubmit={handleSubmit}>
                    <label>
                        Transaction ID:
                        <input
                            type="text"
                            name="TransactionID"
                            value={campaign.TransactionID}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Date:
                        <input
                            type="date"
                            name="Date"
                            value={campaign.Date}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Amount:
                        <input
                            type="text"
                            name="Amount"
                            value={campaign.Amount}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Payment Method::
                        <input
                            type="text"
                            name="Paymentmethod"
                            value={campaign.Paymentmethod}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Payment Status:
                        <input
                            type="text"
                            name="Status"
                            value={campaign.Paymentstatus}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        VATinvoiceID:
                        <input
                            type="text"
                            name="Status"
                            value={campaign.VATinvoiceID}
                            onChange={handleChange}
                        />
                    </label>

                    <button type="submit" disabled={saving}>
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                </form>
            )}
        </div>
    )
}

export default EditPayment