import React, { FC, useEffect, useState } from "react";
import Jambotron from "../../common/Jambotron";
import NavBar from "../../NavBar";
import content from "../../../assets/content/SiteContent.json";
import appData from "../../../assets/content/AppDetails.json";
import LoggedinView from "../../LoginView";

export const LandingPage: FC = () => {
    const [auth, setAuth] = useState({ isLoggedIn: false, email: "" });

    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem("auth"));
        if (userData && userData.email !== "") {
            setAuth({
                isLoggedIn: true,
                email: userData.email,
            });
        }
    }, []);

    if (auth.isLoggedIn) {
        return (
            <>
                <NavBar />
                <LoggedinView />
            </>
        );
    } else {
        return (
            <>
                <NavBar />
                <main className="container py-4">
                    <Jambotron
                        pickupLine={content.landingPage.pickupLine}
                        moreDetails={content.landingPage.details}
                        label={content.landingPage.createAccount}
                        link={appData.routes.data[2].path}
                    />
                </main>
            </>
        );
    }
};

export default LandingPage;