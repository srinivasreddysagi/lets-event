"use client";

import React from "react";
import Layout from "../../components/common/Layout";
import Link from "next/link";

export const Dashboard = () => {
    return (
        <Layout>
            <p>Choose which ever service you want</p>
            <Link href={"/event-services/seeker"}>Seeker</Link>
            <Link href={"/event-services/provider"}>Provider</Link>
        </Layout>
    );
};

export default Dashboard;