// src/pages/AccountForm.js
import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const AccountForm = ({
  initialData = {
    currentAccountname: "",
    mainAccountname: "",
    mainAccountImage: "",
  },
  onSubmit,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Form
      layout="vertical"
      initialValues={formData}
      onFinish={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <Form.Item
        label="Account Name"
        name="currentAccountname"
        rules={[{ required: true, message: "Please enter the account name" }]}
      >
        <Input
          name="currentAccountname"
          value={formData.currentAccountname}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item
        label="Main Account Name"
        name="mainAccountname"
        rules={[
          { required: true, message: "Please enter the main account name" },
        ]}
      >
        <Input
          name="mainAccountname"
          value={formData.mainAccountname}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item
        label="Main Account Image URL"
        name="mainAccountImage"
        rules={[
          {
            required: true,
            message: "Please enter the main account image URL",
          },
        ]}
      >
        <Input
          name="mainAccountImage"
          value={formData.mainAccountImage}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AccountForm;
