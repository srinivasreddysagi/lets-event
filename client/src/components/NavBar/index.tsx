import React, { FC, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppDetails from "../../assets/content/AppDetails.json";
import { usePathname } from "next/navigation";

export const NavBar: FC = () => {
    const pathName = usePathname();

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href={AppDetails.routes.data[0].path}>
                        <img
                            alt=""
                            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{" "}
                        {AppDetails.applicationName}
                    </Navbar.Brand>
                    <Nav className="justify-content-end" activeKey={pathName}>
                        {AppDetails.routes.data.map(({ key, path, name }) => (
                            <Nav.Item key={key}>
                                <Nav.Link href={path}>{name}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
