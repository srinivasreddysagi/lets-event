import React, { FC } from "react";
import NavBar from "../../NavBar";
import RegistrationForm from "../../RegistrationForm";

export const RegisterationPage: FC = () => {
    return (
        <>
            <NavBar />
            <RegistrationForm />
        </>
    );
};

export default RegisterationPage;