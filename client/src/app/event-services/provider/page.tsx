"use client";

import React from "react";
import Layout from "../../../components/common/Layout";
import ServicesProvider from "../../../components/layouts/ServicesProvider";

export const Dashboard = () => {
    return (
        <Layout>
            <ServicesProvider />
        </Layout>
    );
};

export default Dashboard;