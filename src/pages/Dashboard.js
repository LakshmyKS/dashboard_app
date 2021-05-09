import React from 'react';
import FilterDropdown from "../components/Dropdowns/FilterDropdown"
import "../styles/index.scss";
import { Layout } from 'antd';
import Chart from "./Chart"
const { Header, Footer, Sider, Content } = Layout;
export default function Dashboard() {
  return (
    < >
        <Content  className="content-layout"><FilterDropdown filterType="Year 2020"/></Content>
        <Content className="content-layout"><Chart/></Content>

    </>
  );
}

