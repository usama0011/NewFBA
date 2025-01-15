import React from "react";
import "../styles/MainNavigation.css";
import { Link } from "react-router-dom";
const MainNavigation = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Dashboard</h1>
      <div className="button-list">
        <Link to="/viewmyampaings" className="nav-button view-campaigns-button">
          View Campaigns
        </Link>
        {/* <Link to="/viewadsset" className="nav-button view-adsset-button">View Ad Sets</Link> */}
        <Link to="/viewads" className="nav-button view-ads-button">
          View Ads
        </Link>
        <Link
          to="/createcampaing"
          className="nav-button create-campaign-button"
        >
          Create Campaign
        </Link>
        <Link to="/createad" className="nav-button create-ad-button">
          Create Ad
        </Link>
        <Link to="/createAdSet" className="nav-button create-adset-button">
          Create Ad Set
        </Link>
        <Link to="/createpayment" className="nav-button create-adset-button">
          Create Payment
        </Link>
        <Link to="/viewpayments" className="nav-button create-adset-button">
          View Payments
        </Link>
        <Link to="/login" className="nav-button create-adset-button">
          Login
        </Link>
        <Link to="/uploadcamapings" className="nav-button create-adset-button">
          Upload Campaings
        </Link>
        <Link to="/accountlist" className="nav-button create-adset-button">
          Account List
        </Link>
        <Link to="/uploadreporting" className="nav-button view-ads-button">
          Upload Reporting
        </Link>
        <Link to="/uploadReportingCSV" className="nav-button view-ads-button">
          Upload CSV Reporting
        </Link>
      </div>
    </div>
  );
};

export default MainNavigation;
