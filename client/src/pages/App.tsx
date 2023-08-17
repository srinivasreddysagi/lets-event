import React, { FC } from "react";
import LandingPage from "../components/layouts/LandingPage";
import SnackBar from "../components/common/SnackBar";
import Loader from "../components/common/Loader";
import { useAppSelector } from "../store/hooks";

const App: FC = () => {
    const acrossApp = useAppSelector((state) => state.acrossApp);

    return (
        <>
            <LandingPage />
            <SnackBar
                snack={acrossApp.notification.notification}
                variant={acrossApp.notification.variant}
                message={acrossApp.notification.message}
            />
            <Loader isLoading={acrossApp.isLoading} />
        </>
    );
};

export default App;