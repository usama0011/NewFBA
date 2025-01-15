import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ViewCampaignsPage.css";
import { useNavigate } from "react-router-dom";

const ViewMyCampaings = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(
          "https://facebookadsmangerserver.vercel.app/api/newcampaing"
        );
        setCampaigns(response.data);
      } catch (err) {
        setError("Error fetching campaigns");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://facebookadsmangerserver.vercel.app/api/newcampaing/${id}`
      );
      setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
      alert("Campaing has been delteed successfully");
    } catch (err) {
      setError("Error deleting campaign");
    }
  };

  const handleEdit = (id) => {
    // Redirect to edit page or show edit form (not implemented here)
    navigation(`/editmycampaing/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  console.log("All campaings", campaigns);
  return (
    <div className="campaigns-container">
      <h1 className="campaigns-title">Campaigns {campaigns?.length}</h1>
      <div className="campaigns-list">
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="campaign-item">
            <div className="campaign-details">
              <p>
                <strong>Current Switch:</strong>{" "}
                {campaign.currentSwitch ? "True" : "False"}
              </p>
              <p>
                <strong>Campaign Name:</strong> {campaign.campaingname}
              </p>
              <p>
                <strong>Delivery:</strong> {campaign.Delivery}
              </p>
              <p>
                <strong>Bid Strategy:</strong> {campaign.Bidstrategy}
              </p>
              <p>
                <strong>Budget:</strong> {campaign.Budget}
              </p>
              <p>
                <strong>Attribution Setting:</strong>{" "}
                {campaign.Attributionsetting}
              </p>
              <p>
                <strong>Results:</strong> {campaign.Results}
              </p>
              <p>
                <strong>Reach:</strong> {campaign.Reach}
              </p>
              <p>
                <strong>Impressions:</strong> {campaign.Impressions}
              </p>
              <p>
                <strong>Cost Per Result:</strong> {campaign.Costperresult}
              </p>
              <p>
                <strong>Amount Spent:</strong> {campaign.Amountspent}
              </p>
              <p>
                <strong>Ends:</strong> {campaign.Ends}
              </p>
              <p>
                <strong>Entry Date:</strong> {campaign.entryDate}
              </p>
              <p>
                <strong>Campaign Image:</strong>{" "}
                <img
                  src={campaign.campaingImage}
                  alt={campaign.campaingname}
                  className="campaign-image"
                />
              </p>
              <p>
                <strong>lastSignificent:</strong> {campaign.lastSignificent}
              </p>
              <p>
                <strong>schedule:</strong> {campaign.schedule}
              </p>
              <p>
                <strong>qualityRanking:</strong> {campaign.qualityRanking}
              </p>
              <p>
                <strong>engagementrateranking:</strong>{" "}
                {campaign.engagementrateranking}
              </p>
              <p>
                <strong>conversionrateranking:</strong>{" "}
                {campaign.conversionrateranking}
              </p>
              <p>
                <strong>Quote Heading:</strong> {campaign.quoteheading}
              </p>
              <p>
                <strong>Quote Text:</strong> {campaign.quotetext}
              </p>
              <p>
                <strong>Frequency:</strong> {campaign.frequency}
              </p>
            </div>
            <br />
            <div className="campaignactions">
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleEdit(campaign._id)}
                className="edit-button"
              >
                Edit
              </button>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleDelete(campaign._id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMyCampaings;
