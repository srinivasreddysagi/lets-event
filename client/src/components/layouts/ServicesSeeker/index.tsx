import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "../../../utils/utilityFunctions";
import appData from "../../../assets/content/AppDetails.json";

export const ServicesSeeker = () => {
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn()) {
            router.push(appData.routes.data[1].path);
        }
    });

    return <div>ServicesSeeker</div>;
};

export default ServicesSeeker;