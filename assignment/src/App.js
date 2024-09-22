// src/App.js
import React, { useState } from 'react';
import './App.css';
import Adduser from './components/add_user';
import Listuser from './components/list_user';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Flex, Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh'  }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<HomeOutlined />}>
              <Link to="/Listuser">List Users</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<HomeOutlined />}>
              <Link to="/Adduser">Add User</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout >
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: toggle,
              }
            )}
          </Header>

          <Content style={{display:'flex' , flexDirection:'column' , alignItems:'center' }}>
            <Routes>
              <Route path="/Listuser" element={<Listuser />} />
              <Route path="/Adduser" element={<Adduser />} />
              <Route path="/" element={<h3>This is an assignment</h3>} />
            </Routes>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2024 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
