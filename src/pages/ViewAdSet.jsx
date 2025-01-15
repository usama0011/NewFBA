import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewAdSet = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const naivgation = useNavigate()

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get('https://facebookadsmangerserver.vercel.app/api/adsset');
                setCampaigns(response.data);
            } catch (err) {
                setError('Error fetching campaigns');
            } finally {
                setLoading(false);
            }
        };

        fetchCampaigns();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://facebookadsmangerserver.vercel.app/api/adsset/${id}`);
            setCampaigns(campaigns.filter(campaign => campaign._id !== id));
            alert("Ads set Deleted")
        } catch (err) {
            setError('Error deleting campaign');
        }
    };

    const handleEdit = (id) => {
        // Redirect to edit page or show edit form (not implemented here)
        naivgation(`/editmyadset/${id}`)
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="campaigns-container">
            <h1 className="campaigns-title">AdsSets {campaigns?.length}</h1>
            <div className="campaigns-list">
                {campaigns.map((campaign) => (
                    <div key={campaign._id} className="campaign-item">
                        <div className="campaign-details">
                            <p><strong>Current Switch:</strong> {campaign.currentSwitch ? 'True' : 'False'}</p>
                            <p><strong>Campaign Name:</strong> {campaign.campaingname}</p>
                            <p><strong>Delivery:</strong> {campaign.Delivery}</p>
                            <p><strong>Bid Strategy:</strong> {campaign.Bidstrategy}</p>
                            <p><strong>Budget:</strong> {campaign.Budget}</p>
                            <p><strong>Attribution Setting:</strong> {campaign.Attributionsetting}</p>
                            <p><strong>Results:</strong> {campaign.Results}</p>
                            <p><strong>Reach:</strong> {campaign.Reach}</p>
                            <p><strong>Impressions:</strong> {campaign.Impressions}</p>
                            <p><strong>Cost Per Result:</strong> {campaign.Costperresult}</p>
                            <p><strong>Amount Spent:</strong> {campaign.Amountspent}</p>
                            <p><strong>Ends:</strong> {campaign.Ends}</p>
                            <p><strong>Campaign Image:</strong> <img src={campaign.campaingImage} alt={campaign.campaingname} className="campaign-image" /></p>
                        </div>
                        <div className="">
                            <button onClick={() => handleEdit(campaign._id)} className="edit-button">Edit</button>
                            <button onClick={() => handleDelete(campaign._id)} className="delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewAdSet;
