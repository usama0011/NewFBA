// src/pages/EditAccount.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Spin, message, Card } from "antd";
import axiosInstance from "axios";
import AccountForm from "../components/AccountForm";

const { Title } = Typography;

const EditAccount = () => {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchAccount = async () => {
    try {
      const response = await axiosInstance.get(
        `https://facebookadsmangerserver.vercel.app/api/currentAccount/${id}`
      );
      setAccount(response.data);
    } catch (error) {
      message.error("Error fetching account details. Please try again later.");
      console.error("Error fetching account:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      await axiosInstance.put(
        `https://facebookadsmangerserver.vercel.app/api/currentAccount/${id}`,
        formData
      );
      message.success("Account updated successfully!");
    } catch (error) {
      message.error("Error updating account. Please try again later.");
      console.error("Error updating account:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Edit Account</Title>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <Card style={{ maxWidth: "600px", margin: "0 auto" }}>
          <AccountForm
            initialData={account}
            onSubmit={handleFormSubmit}
            additionalFields={[
              {
                label: "Main Account Name",
                name: "mainAccountname",
                type: "text",
              },
              {
                label: "Main Account Image URL",
                name: "mainAccountImage",
                type: "text",
              },
            ]}
          />
        </Card>
      )}
    </div>
  );
};

export default EditAccount;
