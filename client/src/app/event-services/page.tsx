"use client";

import React from "react";
import Layout from "../../components/common/Layout";
import EventServices from "../../components/layouts/EventServices";

export const Dashboard = () => {
    return (
        <Layout>
            <EventServices />
        </Layout>
    );
};

export default Dashboard;