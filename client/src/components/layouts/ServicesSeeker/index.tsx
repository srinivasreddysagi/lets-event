import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "../../../utils/utilityFunctions";
import appData from "../../../assets/content/AppDetails.json";
import { getRequest } from "../../../services/ApiCalls";
import endpoints from "../../../assets/content/Endpoints.json";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSeekerServices } from "../../../store/slices/eventServices";
import { setIsLoading } from "../../../store/slices/acrossAppSlice";
import { Col, Container, Row } from "react-bootstrap";
import ShowServiceTile from "../../ShowServiceTile";
import { setCartItems } from "../../../store/slices/shoppingCart";

export const ServicesSeeker = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const fetchServicesOfProvider = async () => {
        const allServices = await getRequest(
            endpoints.root +
                endpoints.endpoints.rootVersion +
                endpoints.endpoints.allServices
        );
        if (allServices.status === 200) {
            dispatch(setSeekerServices(allServices.data));
        } else {
            console.log(">>> Error occured while getting services");
        }
    };

    useEffect(() => {
        dispatch(setIsLoading(true));
        if (!isLoggedIn()) {
            router.push(appData.routes.data[1].path);
        }
        fetchServicesOfProvider();
        dispatch(setIsLoading(false));
    }, []);

    const seekerServices = useAppSelector(
        (state) => state.eventServices.seekerServices
    );

    const shoppingCart = useAppSelector((state) => state.shoppingCart);

    const addToCart = (obj) => {
        const isInCart = shoppingCart.cartItems.filter((each) => each._id === obj._id).length === 0;
        console.log(">>> shoppingCart.cartItems: ", isInCart);
        if (isInCart) {
            dispatch(setCartItems([...shoppingCart.cartItems, obj]));
        } else {
            const cartItems = shoppingCart.cartItems.filter(
                (each) => each._id !== obj._id
            );
            dispatch(setCartItems(cartItems));
        }
    };

    return (
        <>
            <Container
                className={`services-seeker ${
                    seekerServices.length > 0 || "empty"
                }`}
            >
                <Row className="p-4 services-seeker-row">
                    {seekerServices?.map((service) => (
                        <Col
                            lg={4}
                            className="p-4 services-tile"
                            key={service._id}
                        >
                            <ShowServiceTile
                                {...service}
                                addToCart={() => addToCart(service)}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ServicesSeeker;