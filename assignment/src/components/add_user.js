// src/components/RegisterForm.js
import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import axios from 'axios';
import './add_user.css';
import { useNavigate } from 'react-router-dom'; 


const Adduser = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate(); // Initialize useNavigate

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:8000/users/add_user', values);
      message.success('User successful!');
      console.log('API response:', response.apiresp);
      navigate('/Listuser');
    } catch (error) {
      message.error('Registration failed. Please try again.');
      console.error('API error:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card title="Add Word" className="form-card">
      <Form
        form={form}
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please add name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please add email' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: 'Please add age' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add User
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Adduser;
