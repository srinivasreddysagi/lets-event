import React, { FC } from "react";
import NavBar from "../../NavBar";
import Jambotron from "../../common/Jambotron";
import content from "../../../assets/content/SiteContent.json";
import appData from "../../../assets/content/AppDetails.json";

export const AboutPage: FC = () => {
    return (
        <>
            <NavBar />
            <main className="container py-4">
                <Jambotron
                    pickupLine={content.aboutPage.pickupLine}
                    moreDetails={content.aboutPage.details}
                    label={content.aboutPage.createAccount}
                    link={appData.routes.data[2].path}
                />
            </main>
        </>
    );
};

export default AboutPage;