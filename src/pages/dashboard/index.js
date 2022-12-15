import React from "react";
import { Tabs } from "antd";
import Subcription from "./Subcription";
import Revenue from "./Revenue";

const Dashboard = () => {
    return (
        <div>
            <p className="font-semibold">Dashboard</p>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Subcription" key="1">
                    <Subcription />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Revenue" key="2">
                    <Revenue />
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
};

export default Dashboard;
