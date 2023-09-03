import React, { FC, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddItemTile from "../../AddItemTile";
import AddServiceForm from "../../AddServiceForm";
import ServiceTile from "../../ServiceTile";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setIsLoading } from "../../../store/slices/acrossAppSlice";
import { setProviderServices } from "../../../store/slices/eventServices";
import { getRequest } from "../../../services/ApiCalls";
import endpoints from '../../../assets/content/Endpoints.json';
import { useRouter } from "next/navigation";
import { isLoggedIn } from "../../../utils/utilityFunctions";
import appData from "../../../assets/content/AppDetails.json";

export const ServicesProvider: FC = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.acrossApp.userData);

    const router = useRouter();

    const fetchServicesOfProvider = async (email) => {
        const allServices = await getRequest(
            `${
                endpoints.root +
                endpoints.endpoints.rootVersion +
                endpoints.endpoints.allServices
            }/${email}`
        );
        if(allServices.status === 200) {
            dispatch(setProviderServices(allServices.data));
        } else {
            console.log(">>> Error occured while getting service providers");
        }
    }

    useEffect(() => {
        dispatch(setIsLoading(true));
        if (!isLoggedIn()) {
            router.push(appData.routes.data[1].path);
        }
        fetchServicesOfProvider(userData.email);
        dispatch(setIsLoading(false));
    }, [])

    const [open, setOpen] = useState(false);
    const providerServices = useAppSelector(
        (state) => state.eventServices.providerServices
    );

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Container
                className={`services-provider ${
                    providerServices.length > 0 || "empty"
                }`}
            >
                <Row className="p-4 services-provider-row">
                    {providerServices?.map((service) => (
                        <Col
                            lg={4}
                            className="p-4 services-tile"
                            key={service._id}
                        >
                            <ServiceTile {...service} />
                        </Col>
                    ))}
                    <Col key={"add-button"} lg={4} className="p-4 services-tile">
                        <AddItemTile clickHandler={() => setOpen(true)} />
                    </Col>
                </Row>
            </Container>
            <AddServiceForm
                open={open}
                handleClose={handleClose}
                userData={userData}
                refreshServicesData={fetchServicesOfProvider}
            />
        </>
    );
};

export default ServicesProvider;