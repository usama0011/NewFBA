import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/Editmycampaing.css"
const EditMyAdsSet = () => {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const response = await axios.get(`https://facebookadsmangerserver.vercel.app/api/adsset/${id}`);
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
            await axios.put(`https://facebookadsmangerserver.vercel.app/api/adsset/${id}`, campaign);
            alert('Campaign has been updated successfully');

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
            <h1 className="edit-campaign-title">Edit Ads Set</h1>
            {campaign && (
                <form className="edit-campaign-form" onSubmit={handleSubmit}>
                    <label>
                        Current Switch:
                        <input
                            type="checkbox"
                            name="currentSwitch"
                            checked={campaign.currentSwitch}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Ad Set Name:
                        <input
                            type="text"
                            name="AdsSetname"
                            value={campaign.AdsSetname}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Delivery:
                        <input
                            type="text"
                            name="Delivery"
                            value={campaign.Delivery}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Bid Strategy:
                        <input
                            type="text"
                            name="Bidstrategy"
                            value={campaign.Bidstrategy}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Budget:
                        <input
                            type="text"
                            name="Budget"
                            value={campaign.Budget}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Attribution Setting:
                        <input
                            type="text"
                            name="Attributionsetting"
                            value={campaign.Attributionsetting}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Results:
                        <input
                            type="text"
                            name="results"
                            value={campaign.results}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Reach:
                        <input
                            type="text"
                            name="Reach"
                            value={campaign.Reach}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Impressions:
                        <input
                            type="text"
                            name="Impressions"
                            value={campaign.Impressions}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Cost Per Result:
                        <input
                            type="text"
                            name="Costperresult"
                            value={campaign.Costperresult}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Amount Spent:
                        <input
                            type="text"
                            name="Amountspent"
                            value={campaign.Amountspent}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Ends:
                        <input
                            type="text"
                            name="Ends"
                            value={campaign.Ends}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Ad Set Image:
                        <input
                            type="text"
                            name="adImage"
                            value={campaign.adssetImage}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Ad Set EntryDate:
                        <input
                            type="date"
                            name="entryDate"
                            value={campaign.entryDate}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit" disabled={saving}>
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default EditMyAdsSet;
