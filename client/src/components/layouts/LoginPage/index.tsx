import React, { FC } from "react";
import NavBar from "../../NavBar";
import LoginForm from "../../LoginForm";

export const LoginPage: FC = () => {

    return (
        <>
            <NavBar />
            <LoginForm />
        </>
    );
};

export default LoginPage;