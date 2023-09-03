import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { isLoggedIn } from "../../../utils/utilityFunctions";
import appData from "../../../assets/content/AppDetails.json"

export const EventServices = () => {

    const router = useRouter();

    useEffect(() => {
        if(!isLoggedIn()) {
            router.push(appData.routes.data[1].path);
        }
    })
    
    return (
        <main className="event-services">
            <div className="container d-flex flex-column align-items-center">
                <h3 className="choose-prompt">
                    What are you?
                </h3>
                <div className="links-wrapper d-flex justify-items-center gap-4">
                    <Link href={"/event-services/seeker"}>Seeker</Link>
                    <Link href={"/event-services/provider"}>Provider</Link>
                </div>
            </div>
        </main>
    );
};

export default EventServices;