// src/pages/AccountList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  Spin,
  Typography,
  Space,
  Popconfirm,
  message,
} from "antd";
import axiosInstance from "axios";

const { Title } = Typography;

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axiosInstance.get(
        "https://facebookadsmangerserver.vercel.app/api/currentAccount"
      );
      setAccounts(response.data);
    } catch (error) {
      message.error("Error fetching accounts. Please try again later.");
      console.error("Error fetching accounts:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async (id) => {
    try {
      await axiosInstance.delete(`/currentAccount/${id}`);
      setAccounts(accounts.filter((account) => account._id !== id));
      message.success("Account deleted successfully.");
    } catch (error) {
      message.error("Error deleting account. Please try again later.");
      console.error("Error deleting account:", error);
    }
  };

  const columns = [
    {
      title: "Account Name",
      dataIndex: "currentAccountname",
      key: "currentAccountname",
    },
    {
      title: "Main Account Name",
      dataIndex: "mainAccountname",
      key: "mainAccountname",
    },
    {
      title: "Main Account Image",
      dataIndex: "mainAccountImage",
      key: "mainAccountImage",
      render: (text) => (
        <img
          src={text}
          alt="Main Account"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/edit-account/${record._id}`}>Edit</Link>
          <Popconfirm
            title="Are you sure you want to delete this account?"
            onConfirm={() => deleteAccount(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Current Accounts</Title>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <Table
          dataSource={accounts}
          columns={columns}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
        />
      )}
      <div style={{ marginTop: "20px" }}>
        <Link to="/add-account">
          <Button type="primary">Add New Account</Button>
        </Link>
      </div>
    </div>
  );
};

export default AccountList;
