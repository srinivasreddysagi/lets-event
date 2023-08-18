import React, { FC } from "react";
import LoginPage from "../../components/layouts/LoginPage";
import SnackBar from "../../components/common/SnackBar";
import Loader from "../../components/common/Loader";
import { useAppSelector } from "../../store/hooks";
import Head from "next/head";

export const Login: FC = () => {
    const acrossApp = useAppSelector((state) => state.acrossApp);

    return (
        <>
            <Head>
                <title>Let's Event | Login</title>
            </Head>
            <LoginPage />
            <SnackBar
                snack={acrossApp.notification.notification}
                variant={acrossApp.notification.variant}
                message={acrossApp.notification.message}
            />
            <Loader isLoading={acrossApp.isLoading} />
        </>
    );
};

export default Login;