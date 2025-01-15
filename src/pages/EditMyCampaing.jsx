import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/Editmycampaing.css"
const EditMyCampaing = () => {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const response = await axios.get(`https://facebookadsmangerserver.vercel.app/api/newcampaing/${id}`);
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
            await axios.put(`https://facebookadsmangerserver.vercel.app/api/newcampaing/${id}`, campaign);
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
            <h1 className="edit-campaign-title">Edit Campaign</h1>
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
                        Campaign Name:
                        <input
                            type="text"
                            name="campaingname"
                            value={campaign.campaingname}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Campaign Link:
                        <input
                            type="text"
                            name="campainglink"
                            value={campaign.campainglink}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        EntryDate:
                        <input
                            type="date"
                            name="entryDate"
                            value={campaign.entryDate}
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
                            type="number"
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
                            type="number"
                            name="Results"
                            value={campaign.Results}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Reach:
                        <input
                            type="number"
                            name="Reach"
                            value={campaign.Reach}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Impressions:
                        <input
                            type="number"
                            name="Impressions"
                            value={campaign.Impressions}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Cost Per Result:
                        <input
                            type="number"
                            name="Costperresult"
                            value={campaign.Costperresult}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Amount Spent:
                        <input
                            type="number"
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
                    {/* start here  */}
                    <label>
                        lastSignificent:
                        <input
                            type="text"
                            name="lastSignificent"
                            value={campaign.lastSignificent}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        schedule:
                        <input
                            type="text"
                            name="schedule"
                            value={campaign.schedule}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        qualityRanking:
                        <input
                            type="text"
                            name="qualityRanking"
                            value={campaign.qualityRanking}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        engagementrateranking:
                        <input
                            type="text"
                            name="engagementrateranking"
                            value={campaign.engagementrateranking}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        conversionrateranking:
                        <input
                            type="text"
                            name="conversionrateranking"
                            value={campaign.conversionrateranking}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Quote Heading:
                        <input
                            type="text"
                            name="quoteheading"
                            value={campaign.quoteheading}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Quote Text:
                        <input
                            type="text"
                            name="quotetext"
                            value={campaign.quotetext}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Frequency:
                        <input
                            type="number"
                            name="frequency"
                            value={campaign.frequency}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Campaign Image:
                        <input
                            type="text"
                            name="campaingImage"
                            value={campaign.campaingImage}
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

export default EditMyCampaing;
