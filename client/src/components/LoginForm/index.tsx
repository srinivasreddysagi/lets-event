import React, { FC, useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import formFields from "../../assets/content/FormFields.json";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import md5 from "blueimp-md5";
import Link from "next/link";

export const LoginForm: FC = () => {

    const [loginCreds, setLoginCreds] = useState({
        email: { value: "", err: "" },
        password: { value: "", err: "" },
    });

    const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(true);

    const showHidePassword = () => setTogglePasswordVisibility(!togglePasswordVisibility);

    const handleChange = (event) => {
        setLoginCreds({
            ...loginCreds,
            [event.target.id]: { value: event.target.value, err: "" },
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (loginCreds.email.value.trim() && loginCreds.password.value) {
            console.log({
                email: loginCreds.email.value,
                password: md5(loginCreds.password.value),
            });
            setLoginCreds({
                email: { value: "", err: "" },
                password: { value: "", err: "" },
            });
        } else {
            if (!loginCreds.email.value.trim()) {
                setLoginCreds({
                    ...loginCreds,
                    email: {
                        ...loginCreds.email,
                        err: formFields.registrationForm.email.errorText,
                    },
                });
            }
            if (!loginCreds.password.value) {
                setLoginCreds((loginCreds) => {
                    return {
                        ...loginCreds,
                        password: {
                            ...loginCreds.password,
                            err: formFields.registrationForm.password.errorText,
                        },
                    };
                });
            }
        }
    };

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
                    <TextField
                        className="inputField"
                        type={formFields.textFieldTypes.email}
                        id={formFields.textFieldTypes.email}
                        label={formFields.registrationForm.email.label}
                        error={!!loginCreds.email.err}
                        helperText={loginCreds.email.err}
                        value={loginCreds.email.value}
                        onChange={handleChange}
                    />
                </div>
                <div className="input password-field">
                    <TextField
                        className="inputField"
                        id={formFields.textFieldTypes.password}
                        label={formFields.registrationForm.password.label}
                        type={
                            togglePasswordVisibility
                                ? formFields.textFieldTypes.password
                                : formFields.textFieldTypes.text
                        }
                        error={!!loginCreds.password.err}
                        helperText={loginCreds.password.err}
                        value={loginCreds.password.value}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onMouseUp={showHidePassword}
                                        onMouseDown={showHidePassword}
                                    >
                                        {togglePasswordVisibility ? (
                                            <AiFillEye />
                                        ) : (
                                            <AiFillEyeInvisible />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
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