import React, { FC, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddItemTile from "../../AddItemTile";
import AddServiceForm from "../../AddServiceForm";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setIsLoading } from "../../../store/slices/acrossAppSlice";
import { setProviderServices } from "../../../store/slices/eventServices";
import { getRequest } from "../../../services/ApiCalls";
import endpoints from '../../../assets/content/Endpoints.json';

export const ServicesProvider: FC = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.acrossApp.userData);

    const fetchServicesOfProvider = async (email = "") => {
        const payload = {
            email
        }
        const allServices = await getRequest(
            endpoints.root +
                endpoints.endpoints.rootVersion +
                endpoints.endpoints.allServices,
            payload
        );
        dispatch(setProviderServices(allServices));
    }

    useEffect(() => {
        dispatch(setIsLoading(true));
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
            <Container className="services-provider empty">
                <Row className="p-4">
                    {providerServices.map((service) => (
                        <Col lg={4} className=" p-4" key={service.id}>
                            <AddItemTile clickHandler={() => setOpen(true)} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <AddServiceForm
                open={open}
                handleClose={handleClose}
                userData={userData}
            />
        </>
    );
};

export default ServicesProvider;