import React, { FC, useEffect } from "react";
import Loader from "../../common/Loader";
import SnackBar from "../../common/SnackBar";
import NavBar from "../../NavBar";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import appDetails from '../../../assets/content/AppDetails.json';
import {
    setIsLoading,
    setUserData,
} from "../../../store/slices/acrossAppSlice";

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ children }) => {
    const dispatch = useAppDispatch();
    const acrossApp = useAppSelector((state) => state.acrossApp);
    const auth = acrossApp.userData.signed;
    const navItems = appDetails.routes.data.filter(
        ({ whenSigned }) => whenSigned || !auth
    );

    useEffect(() => {
        dispatch(setIsLoading(true));
        const userData = JSON.parse(sessionStorage.getItem("auth"));
        dispatch(setUserData(userData));
        dispatch(setIsLoading(false));
    }, []);

    return (
        <>
            <NavBar auth={auth} navItems={navItems} />
            {children}
            <SnackBar
                snack={acrossApp.notification.notification}
                variant={acrossApp.notification.variant}
                message={acrossApp.notification.message}
            />
            <Loader isLoading={acrossApp.isLoading} />
        </>
    );
};

export default Layout;