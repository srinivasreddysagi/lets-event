import React, { FC } from "react";
import RegisterationPage from "../components/layouts/RegisterationPage";
import SnackBar from "../components/common/SnackBar";
import Loader from "../components/common/Loader";
import { useAppSelector } from "../store/hooks";

const Register: FC = () => {
    const acrossApp = useAppSelector((state) => state.acrossApp);

    return (
        <>
            <RegisterationPage />
            <SnackBar
                snack={acrossApp.notification.notification}
                variant={acrossApp.notification.variant}
                message={acrossApp.notification.message}
            />
            <Loader isLoading={acrossApp.isLoading} />
        </>
    );
};

export default Register;