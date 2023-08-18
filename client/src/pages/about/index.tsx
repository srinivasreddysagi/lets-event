import Head from "next/head";
import React, { FC } from "react";
import AboutPage from "../../components/layouts/AboutPage";

export const Login: FC = () => {
    return (
        <>
            <Head>
                <title>Let's Event | About Us</title>
            </Head>
            <AboutPage />
        </>
    );
};

export default Login;