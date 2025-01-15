import React, { useState } from 'react';
import axios from 'axios';

const CreateAdsSet = () => {
    const [formData, setFormData] = useState({
        currentSwitch: '',
        entryDate: "",
        AdsSetname: '',
        Delivery: '',
        Bidstrategy: '',
        Budget: '',
        Lastsignificantedit: '',
        Attributionsetting: '',
        results: '',
        Reach: '',
        Impressions: '',
        Costperresult: '',
        Amountspent: '',
        Ends: '',
        Schedule: '',
        adssetImage: ''
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
            const response = await axios.post('https://facebookadsmangerserver.vercel.app/api/adsset', formData);
            console.log(response.data);
            setFormData({
                currentSwitch: '',
                AdsSetname: '',
                Delivery: '',
                Bidstrategy: '',
                Budget: '',
                Lastsignificantedit: '',
                Attributionsetting: '',
                results: '',
                Reach: '',
                Impressions: '',
                Costperresult: '',
                Amountspent: '',
                entryDate: "",
                Ends: '',
                Schedule: '',
                adssetImage: ''
            })
        } catch (err) {
            setError('Error submitting form');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Ads Set Form</h1>
            <form className="ads-set-form" onSubmit={handleSubmit}>
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
                    <label htmlFor="AdsSetname">Ads Set Name</label>
                    <input
                        type="text"
                        name="AdsSetname"
                        value={formData.AdsSetname}
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
                    <label htmlFor="Schedule">Schedule</label>
                    <input
                        type="text"
                        name="Schedule"
                        value={formData.Schedule}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="adssetImage">Ads Set Image</label>
                    <input
                        type="text"
                        name="adssetImage"
                        value={formData.adssetImage}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="entryDate">Ads EntryDate</label>
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

export default CreateAdsSet;
