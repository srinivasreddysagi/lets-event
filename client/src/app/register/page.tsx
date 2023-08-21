"use client";
import React, { FC } from "react";
import RegisterationPage from "../../components/layouts/RegisterationPage";
import SnackBar from "../../components/common/SnackBar";
import Loader from "../../components/common/Loader";
import { useAppSelector } from "../../store/hooks";
import Head from "next/head";
import Layout from "../../components/common/Layout";

const Register: FC = () => {
    const acrossApp = useAppSelector((state) => state.acrossApp);

    return (
        <>
            <Layout>
                <Head>
                    <title>Let's Event | Signup</title>
                </Head>
                <RegisterationPage />
                <SnackBar
                    snack={acrossApp.notification.notification}
                    variant={acrossApp.notification.variant}
                    message={acrossApp.notification.message}
                />
                <Loader isLoading={acrossApp.isLoading} />
            </Layout>
        </>
    );
};

export default Register;