import React, { FC } from "react";
import { Services } from "../../store/interfaces";

export const ServiceTile: FC<Omit<Services, "_id" | "contact">> = ({
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