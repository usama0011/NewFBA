import React from "react";
import { Upload, Button, message } from "antd";
import axios from "axios";

const UploadReportingCSV = () => {
  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://facebookadsmangerserver.vercel.app/api/reporting/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      message.success(response.data.message);
    } catch (error) {
      console.error(error);
      message.error("Failed to upload CSV");
    }
  };

  return (
    <div>
      <h2>Upload Reporting CSV</h2>
      <Upload
        beforeUpload={(file) => {
          handleUpload(file);
          return false; // Prevent default upload behavior
        }}
        accept=".csv"
      >
        <Button type="primary">Upload CSV</Button>
      </Upload>
    </div>
  );
};

export default UploadReportingCSV;
