"use client";

import Head from "next/head";
import React, { FC } from "react";
import Layout from "../../components/common/Layout";
import AboutPage from "../../components/layouts/AboutPage";

export const Login: FC = () => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Let's Event | About Us</title>
                </Head>
                <AboutPage />
            </Layout>
        </>
    );
};

export default Login;