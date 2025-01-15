import React, { useState } from 'react';
import axios from 'axios';


const CreateCampaing = () => {
    const [formData, setFormData] = useState({
        currentSwitch: '',
        campainglink: "",
        entryDate: "",
        campaingname: '',
        Delivery: '',
        Bidstrategy: '',
        Budget: '',
        Attributionsetting: '',
        Results: '',
        Reach: '',
        Impressions: '',
        Costperresult: '',
        Amountspent: '',
        Ends: '',
        campaingImage: '',
        lastSignificent: "",
        schedule: "",
        qualityRanking: "",
        engagementrateranking: "",
        conversionrateranking: "",
        quoteheading: "",
        quotetext: "",
        frequency: "",
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
            const response = await axios.post('https://facebookadsmangerserver.vercel.app/api/newcampaing', formData);
            console.log(response.data);
            setFormData({
                currentSwitch: '',
                campaingname: '',
                campainglink: "",
                Delivery: '',
                Bidstrategy: '',
                Budget: '',
                Attributionsetting: '',
                Results: '',
                Reach: '',
                Impressions: '',
                Costperresult: '',
                Amountspent: '',
                Ends: '',
                campaingImage: '',
                lastSignificent: "",
                schedule: "",
                qualityRanking: "",
                engagementrateranking: "",
                conversionrateranking: "",
                quoteheading: "",
                quotetext: "",
                frequency: "",
            })
        } catch (err) {
            setError('Error submitting form');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Campaign Form</h1>
            <form className="campaign-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="currentSwitch">Current Switch</label>
                    <select
                        name="currentSwitch"
                        value={formData.currentSwitch}
                        onChange={handleChange}
                        className="form-input"
                        required
                    >
                        <option value="">Select</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="campaingname">Campaign Name</label>
                    <input
                        type="text"
                        name="campaingname"
                        value={formData.campaingname}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="campainglink">Campaign Link</label>
                    <input
                        type="text"
                        name="campainglink"
                        value={formData.campainglink}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Delivery">Delivery</label>
                    <input
                        type="text"
                        name="Delivery"
                        value={formData.Delivery}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Bidstrategy">Bid Strategy</label>
                    <input
                        type="text"
                        name="Bidstrategy"
                        value={formData.Bidstrategy}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Budget">Budget</label>
                    <input
                        type="number"
                        name="Budget"
                        value={formData.Budget}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Attributionsetting">Attribution Setting</label>
                    <input
                        type="text"
                        name="Attributionsetting"
                        value={formData.Attributionsetting}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Results">Results</label>
                    <input
                        type="number"
                        name="Results"
                        value={formData.Results}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Reach">Reach</label>
                    <input
                        type="number"
                        name="Reach"
                        value={formData.Reach}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Impressions">Impressions</label>
                    <input
                        type="number"
                        name="Impressions"
                        value={formData.Impressions}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Costperresult">Cost Per Result</label>
                    <input
                        type="number"
                        name="Costperresult"
                        value={formData.Costperresult}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Amountspent">Amount Spent</label>
                    <input
                        type="number"
                        name="Amountspent"
                        value={formData.Amountspent}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Ends">Ends</label>
                    <input
                        type="text"
                        name="Ends"
                        value={formData.Ends}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="campaingImage">Campaign Image</label>
                    <input
                        type="text"
                        name="campaingImage"
                        value={formData.campaingImage}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastSignificent">last Significent Edit:</label>
                    <input
                        type="date"
                        name="lastSignificent"
                        value={formData.lastSignificent}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="schedule">Schedule:</label>
                    <input
                        type="string"
                        name="schedule"
                        value={formData.schedule}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="qualityRanking">Quality Ranking:</label>
                    <input
                        type="string"
                        name="qualityRanking"
                        value={formData.qualityRanking}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="engagementrateranking">Engagement Rate Ranking:</label>
                    <input
                        type="string"
                        name="engagementrateranking"
                        value={formData.engagementrateranking}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quoteheading">Quote Heading:</label>
                    <input
                        type="string"
                        name="quoteheading"
                        value={formData.quoteheading}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quotetext">Quote Text:</label>
                    <input
                        type="string"
                        name="quotetext"
                        value={formData.quotetext}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="frequency">Frequency:</label>
                    <input
                        type="number"
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="conversionrateranking">Conversion Rate Ranking:</label>
                    <input
                        type="string"
                        name="conversionrateranking"
                        value={formData.conversionrateranking}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="entryDate">Entery Date:</label>
                    <input
                        type="date"
                        name="entryDate"
                        value={formData.entryDate}
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

export default CreateCampaing;
