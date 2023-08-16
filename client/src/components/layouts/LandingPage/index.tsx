import React, { FC } from "react";
import Jambotron from "../../common/Jambotron/Jambotron";
import NavBar from "../../NavBar";
import content from '../../../assets/content/SiteContent.json';
import appData from "../../../assets/content/AppDetails.json";

export const LandingPage: FC = () => {
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
};

export default LandingPage;