import React, { FC } from "react";
import { ProviderServices } from "../../store/interfaces";
import { GrAdd } from "react-icons/gr";

export const ServiceTile: FC<Omit<ProviderServices, "id" | "contact">> = ({
    name,
    service,
    city,
    price,
}) => {
    return (
        <>
            <section className="service-tile">
                <h6>{`${name} | ${service}`}</h6>
                <p>{city}</p>
                <p>₹{price}</p>
            </section>
        </>
    );
};

export default ServiceTile;