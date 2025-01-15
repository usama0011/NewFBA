// src/pages/AddAccount.js
import React from "react";
import AccountForm from "../components/AccountForm";
import axiosInstance from "axios";

const AddAccount = () => {
  const handleFormSubmit = async (formData) => {
    try {
      await axiosInstance.post(
        "https://facebookadsmangerserver.vercel.app/api/currentAccount",
        formData
      );
      alert("Account added successfully!");
    } catch (error) {
      console.error("Error adding account:", error);
    }
  };

  return (
    <div>
      <h2>Add New Account</h2>
      <AccountForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddAccount;
