import Link from "next/link";
import React from "react";

export const EventServices = () => {
    return (
        <main className="event-services">
            <div className="container">
                <p>Choose which ever service you want</p>
                <Link href={"/event-services/seeker"}>Seeker</Link>
                <Link href={"/event-services/provider"}>Provider</Link>
            </div>
        </main>
    );
};

export default EventServices;