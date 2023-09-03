import { Button } from "@mui/material";
import React, { FC, useState } from "react";
import { Services } from "../../store/interfaces";

export interface ShowServiceTileProps extends Omit<Services, "_id" | "contact"> {
    addToCart: any;
}

export const ShowServiceTile: FC<ShowServiceTileProps> = ({
    name,
    service,
    city,
    price,
    addToCart,
}) => {
    const [isInCart, setIsInCart] = useState(false);

    const toggleIsInCart = () => {
        setIsInCart((isInCart) => !isInCart);
        addToCart();
    };
    
    return (
        <>
            <section className="service-tile show">
                <h6>{`${name} | ${service}`}</h6>
                <p>{city}</p>
                <p>₹{price}</p>
                <Button variant="outlined" onClick={toggleIsInCart}>
                    {isInCart ? "Remove from Cart" : "Add to Cart"}
                </Button>
            </section>
        </>
    );
};

export default ShowServiceTile;