// src/components/Listuser.js
import React, { useState, useEffect } from 'react';
import { Table, Space, Button, message, Card } from 'antd';
import axios from 'axios';
import moment from 'moment';

const Listuser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/users');
      setUsers(response.data.user || []); // Ensure users is an array
    } catch (error) {
      message.error('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  const formatDate = (timestamp) => moment(timestamp).format('YYYY-MM-DD HH:mm:ss');

  const handleRefresh = () => {
    fetchUsers();
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text, record) => formatDate(record.createdAt),
    },
  ];

  return (
    <Card title="User List" bordered={false} style={{ margin: '0px',width:'100%' }}>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={handleRefresh}>
          Refresh
        </Button>
      </Space>
      <Table
        dataSource={users}
        columns={columns}
        loading={loading}
        rowKey="_id" // Assuming each user object has a unique _id field
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '20', '50'],
        }}
        style={{ background: '#f9f9f9' }} // Optional background styling
      />
    </Card>
  );
};

export default Listuser;
