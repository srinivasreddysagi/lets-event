import React, { FC } from "react";
import LoginPage from "../components/layouts/LoginPage";
import SnackBar from "../components/common/SnackBar";
import Loader from "../components/common/Loader";
import { useAppSelector } from "../store/hooks";

export const Login: FC = () => {
    const acrossApp = useAppSelector((state) => state.acrossApp);

    return (
        <>
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