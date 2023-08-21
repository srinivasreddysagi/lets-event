import React, { FC } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppDetails from "../../assets/content/AppDetails.json";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { setUserData } from "../../store/slices/acrossAppSlice";

interface Props {
    auth: boolean;
    navItems: any;
}

export const NavBar: FC<Props> = ({ auth, navItems }) => {
    const pathName = usePathname();
    const dispatch = useAppDispatch();
    const router = useRouter();

    const logOut = () => {
        const payload = { signed: false, email: "" };
        dispatch(setUserData(payload));
        sessionStorage.setItem("auth", JSON.stringify(payload));
        router.push(AppDetails.routes.data[1].path);
    };

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
                        {navItems.length > 0 &&
                            navItems.map(({ key, path, name }) => (
                                <Nav.Item key={key}>
                                    <Link
                                        href={path}
                                        className={`nav-link ${
                                            path === pathName ? "active" : ""
                                        }`}
                                    >
                                        {name}
                                    </Link>
                                </Nav.Item>
                            ))}
                        {auth && (
                            <Button className="logout-btn" onClick={logOut}>
                                {"Logout"}
                            </Button>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;