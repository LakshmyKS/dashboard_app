import React from 'react';
import Dashboard from "../pages/Dashboard"
import "../styles/index.scss";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function DashboardContainer() {
  return (
    <Content >
    <Layout>
        <Header>Header</Header>
      <Layout>
        <Sider >Sider</Sider>
        <Layout className="body-layout">  
        <Dashboard/> </Layout>
      </Layout>
    </Layout>
    </Content>
  );
}

export default DashboardContainer;
