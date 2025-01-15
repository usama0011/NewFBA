import React, { useState } from 'react';
import axios from 'axios';

const CreateAd = () => {
    const [formData, setFormData] = useState({
        currentSwitch: '',
        Adname: '',
        Delivery: '',
        entryDate: "",
        AdsetName: '',
        Bidstrategy: '',
        Budget: '',
        Lastsignificantedit: '',
        Attributionsetting: '',
        results: '',
        Reach: '',
        Impressions: '',
        Costperresult: '',
        QualityRanking: '',
        EngagementRateRanking: '',
        ConversionRateRanking: '',
        Amountspent: '',
        Ends: '',
        adImage: ''
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
            const response = await axios.post('https://facebookadsmangerserver.vercel.app/api/ads', formData);
            console.log(response.data);
            setFormData({
                currentSwitch: '',
                Adname: '',
                Delivery: '',
                AdsetName: '',
                Bidstrategy: '',
                Budget: '',
                Lastsignificantedit: '',
                Attributionsetting: '',
                results: '',
                Reach: '',
                Impressions: '',
                Costperresult: '',
                QualityRanking: '',
                EngagementRateRanking: '',
                ConversionRateRanking: '',
                Amountspent: '',
                Ends: '',
                adImage: ''
            })
        } catch (err) {
            setError('Error submitting form');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Ads Form</h1>
            <form className="ads-form" onSubmit={handleSubmit}>
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
                    <label htmlFor="Adname">Ad Name</label>
                    <input
                        type="text"
                        name="Adname"
                        value={formData.Adname}
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
                    <label htmlFor="AdsetName">Adset Name</label>
                    <input
                        type="text"
                        name="AdsetName"
                        value={formData.AdsetName}
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
                        type="text"
                        name="Budget"
                        value={formData.Budget}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Lastsignificantedit">Last Significant Edit</label>
                    <input
                        type="date"
                        name="Lastsignificantedit"
                        value={formData.Lastsignificantedit}
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
                    <label htmlFor="results">Results</label>
                    <input
                        type="text"
                        name="results"
                        value={formData.results}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Reach">Reach</label>
                    <input
                        type="text"
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
                        type="text"
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
                        type="text"
                        name="Costperresult"
                        value={formData.Costperresult}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="QualityRanking">Quality Ranking</label>
                    <input
                        type="text"
                        name="QualityRanking"
                        value={formData.QualityRanking}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="EngagementRateRanking">Engagement Rate Ranking</label>
                    <input
                        type="text"
                        name="EngagementRateRanking"
                        value={formData.EngagementRateRanking}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ConversionRateRanking">Conversion Rate Ranking</label>
                    <input
                        type="text"
                        name="ConversionRateRanking"
                        value={formData.ConversionRateRanking}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Amountspent">Amount Spent</label>
                    <input
                        type="text"
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
                        type="date"
                        name="Ends"
                        value={formData.Ends}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="adImage">Ad Image</label>
                    <input
                        type="text"
                        name="adImage"
                        value={formData.adImage}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="entryDate">Ad entryDate</label>
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

export default CreateAd;
