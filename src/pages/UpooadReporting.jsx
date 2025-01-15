// components/CampaignPage.js
import React, { useEffect, useState } from "react";
import {
  Table,
  Upload,
  Button,
  message,
  Typography,
  Divider,
  Space,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title } = Typography;
const { Dragger } = Upload;

const UploadReporting = () => {
  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [campaignData, setCampaignData] = useState([]);

  const handleUpload = async () => {
    if (!file) {
      message.warning("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:3001/api/reporting/upload", formData);
      message.success("File uploaded successfully");
      setFileList([]);
      setFile(null);
      fetchCampaigns(); // Fetch updated data after upload
    } catch (error) {
      message.error("Upload failed");
    }
  };

  const draggerProps = {
    name: "file",
    multiple: false,
    beforeUpload: (file) => {
      setFile(file);
      setFileList([file]);
      return false;
    },
    fileList,
    onRemove: () => {
      setFile(null);
      setFileList([]);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const fetchCampaigns = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/reporting`);
      setCampaignData(data);
    } catch (error) {
      message.error("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const columns = [
    { title: "Campaign Name", dataIndex: "campaignName", key: "campaignName" },
    { title: "AdSet Name", dataIndex: "adSetName", key: "adSetName" },
    { title: "Ads", dataIndex: "ads", key: "ads" },
    {
      title: "impressionDevice",
      dataIndex: "impressionDevice",
      key: "impressionDevice",
    },
    { title: "PageID", dataIndex: "pageID", key: "pageID" },
    {
      title: "deliveryStatus",
      dataIndex: "deliveryStatus",
      key: "deliveryStatus",
    },
    {
      title: "deliveryLevel",
      dataIndex: "deliveryLevel",
      key: "deliveryLevel",
    },
    { title: "Reach", dataIndex: "reach", key: "reach" },
    { title: "Impressions", dataIndex: "impressions", key: "impressions" },
    { title: "Frequency", dataIndex: "frequency", key: "frequency" },
    {
      title: "attributionSetting",
      dataIndex: "attributionSetting",
      key: "attributionSetting",
    },
    { title: "Results", dataIndex: "results", key: "results" },
    { title: "amountSpent", dataIndex: "amountSpent", key: "amountSpent" },
    {
      title: "Cost Per Result",
      dataIndex: "costPerResult",
      key: "costPerResult",
    },
    { title: "starts", dataIndex: "starts", key: "starts" },
    { title: "ends", dataIndex: "ends", key: "ends" },
    {
      title: "reportingStarts",
      dataIndex: "reportingStarts",
      key: "reportingStarts",
    },
    {
      title: "reportingEnds",
      dataIndex: "reportingEnds",
      key: "reportingEnds",
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        Upload Reporting Data
      </Title>
      <Dragger
        {...draggerProps}
        style={{ padding: "30px", borderRadius: "10px" }}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">Only CSV files are supported.</p>
      </Dragger>

      <Divider />

      <Space
        style={{ width: "100%", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={!file}
          icon={<UploadOutlined />}
        >
          Upload
        </Button>
        <Button
          type="danger"
          onClick={() => {
            setFile(null);
            setFileList([]);
          }}
          disabled={!fileList.length}
        >
          Clear Upload
        </Button>
      </Space>

      <Divider />

      <Table dataSource={campaignData} columns={columns} pagination={false} />
    </div>
  );
};

export default UploadReporting;
