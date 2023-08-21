import React, { FC, useState } from "react";
import { initialLoginFormState, loginValidations } from "./loginValidations";
import { useForm } from "../../hooks/useForm";
import { useRequest } from "../../hooks/useRequest";
import { useAppDispatch } from "../../store/hooks";
import {
    setNotification,
    setUserData,
} from "../../store/slices/acrossAppSlice";
import InputElement from "../common/InputElement";
import { Button } from "@mui/material";
import formFields from "../../assets/content/FormFields.json";
import endpoint from "../../assets/content/Endpoints.json";
import messages from "../../assets/content/AlertMessages.json";
import appData from "../../assets/content/AppDetails.json";
import md5 from "blueimp-md5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Response } from "./interfaces";

export const LoginForm: FC = () => {
    const dispatch = useAppDispatch();
    const { formState, handleChange, validate, setError, clearForm } = useForm(
        initialLoginFormState,
        loginValidations
    );

    const { isError, postData } = useRequest();

    const router = useRouter();

    const [togglePasswordVisibility, setTogglePasswordVisibility] =
        useState(true);

    const showHidePassword = () =>
        setTogglePasswordVisibility(!togglePasswordVisibility);

    const authenticateUser = (userData) => {
        sessionStorage.setItem("auth", JSON.stringify(userData));
        dispatch(setUserData(userData));
        router.push(appData.loginView.routes.data[0].path);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) {
            const payload = {
                email: formState[0].value,
                password: md5(formState[1].value),
            };
            const response: Response = await postData(
                endpoint.root +
                    endpoint.endpoints.rootVersion +
                    endpoint.endpoints.login,
                payload
            );
            if (response.status === 200) {
                if (response.data.message === messages.login.notRegistered) {
                    setError(
                        formFields.textFieldTypes.email,
                        formFields.loginForm.errors.email
                    );
                    dispatch(
                        setNotification({
                            notification: true,
                            variant: response.data.type,
                            message: response.data.message,
                        })
                    );
                } else if (response.data.message === messages.login.wrongPcode) {
                    setError(
                        formFields.textFieldTypes.password,
                        formFields.loginForm.errors.password
                    );
                    dispatch(
                        setNotification({
                            notification: true,
                            variant: response.data.type,
                            message: response.data.message,
                        })
                    );
                } else {
                    dispatch(
                        setNotification({
                            notification: true,
                            variant: response.data.type,
                            message: response.data.message,
                        })
                    );
                    clearForm();
                    authenticateUser(response.data.userData);
                }
            } else {
                dispatch(
                    setNotification({
                        notification: true,
                        variant: messages.alertVariants.error,
                        message: messages.common.error,
                    })
                );
            }
        }
    };

    if (isError.status) return <>{isError.message}</>;

    return (
        <>
            <div className="register-show">
                <p className="register-message">
                    {"Don't have an account?"}{" "}
                    <Link href="/register">{"Register"}</Link>{" "}
                </p>
            </div>

            <form className="login-form" onSubmit={submitHandler}>
                <div className="input email-field">
                    <InputElement
                        className="inputField"
                        type={formFields.textFieldTypes.email}
                        name={formFields.textFieldTypes.email}
                        label={formFields.registrationForm.email.label}
                        error={!!formState[0].error}
                        helperText={formState[0].error}
                        value={formState[0].value}
                        onChange={handleChange}
                    />
                </div>
                <div className="input password-field">
                    <InputElement
                        className="inputField"
                        name={formFields.textFieldTypes.password}
                        label={formFields.registrationForm.password.label}
                        type={formFields.textFieldTypes.password}
                        error={!!formState[1].error}
                        helperText={formState[1].error}
                        value={formState[1].value}
                        onChange={handleChange}
                        hide={togglePasswordVisibility}
                        showHidePassword={showHidePassword}
                    />
                </div>
                <div className="submit-btn">
                    <Button variant="contained" type="submit">
                        {formFields.buttons.login}
                    </Button>
                </div>
            </form>

            <div className="register-show">
                <p className="register-message">
                    {"Forgot password?"}{" "}
                    <Link href="/register">{"Reset Password"}</Link>{" "}
                </p>
            </div>
        </>
    );
};

export default LoginForm;