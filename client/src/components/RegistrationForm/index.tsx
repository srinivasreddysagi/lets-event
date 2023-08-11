import React, { FC, useState } from "react";
import Link from "next/link";
import { useForm } from "../../hooks/useForm";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import formFields from "../../assets/content/FormFields.json";
import endpoint from "../../assets/content/Endpoints.json";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { initialFormState, validations } from "./registerFormData";
import md5 from "blueimp-md5";
import { postRequest } from "../../services/ApiCalls";

export const RegistrationForm: FC = () => {
    const { formState, handleChange, validate, setError, clearForm } = useForm(
        initialFormState,
        validations
    );
    const [togglePasswordVisibility, setTogglePasswordVisibility] = useState({
        password: true,
        confirmPassword: true,
    });

    const showHidePassword = (fieldId) =>
        setTogglePasswordVisibility({
            ...togglePasswordVisibility,
            [fieldId]: !togglePasswordVisibility[fieldId],
        });

    const submitHandler = async (event) => {
        event.preventDefault();
        const isValid = await validate();
            if (formState[4].value === formState[5].value && isValid) {
                const payload = {
                    firstName: formState[0].value,
                    lastName: formState[1].value,
                    email: formState[2].value,
                    mobile: formState[3].value,
                    password: md5(formState[4].value),
                };
                try {
                    console.log(payload);
                    const response = postRequest(
                        endpoint.root +
                            endpoint.endpoints.rootVersion +
                            endpoint.endpoints.register,
                        payload
                    );
                } catch (error) {
                    console.log(error);
                }
                clearForm();
            } else if (
                formState[4].value &&
                formState[5].value && formState[4].value !== formState[5].value
            ) {
                setError(
                    formFields.registrationForm.confirmPassword.id,
                    formFields.registrationForm.confirmPassword.errorText
                );
            }
    };

    return (
        <>
            <div className="login-show">
                <p className="login-message">
                    {"Already have an account?"}{" "}
                    <Link href="/login">{"Login here"}</Link>{" "}
                </p>
            </div>
            <form className="registration-form" onSubmit={submitHandler}>
                <div className="name-wrapper">
                    {[
                        formFields.registrationForm.firstName.id,
                        formFields.registrationForm.lastName.id,
                    ].map((each, idx) => (
                        <TextField
                            className="inputField"
                            key={each}
                            type={formFields.textFieldTypes.text}
                            name={each}
                            label={formFields.registrationForm[each].label}
                            variant={formFields.variants.outlined}
                            error={!!formState[idx].error}
                            helperText={formState[idx].error}
                            value={formState[idx].value}
                            onChange={handleChange}
                        />
                    ))}
                </div>

                <div className="few-more-details">
                    {[
                        formFields.registrationForm.email.id,
                        formFields.registrationForm.mobile.id,
                    ].map((each, idx) => (
                        <TextField
                            key={each}
                            type={formFields.textFieldTypes[each]}
                            name={each}
                            label={formFields.registrationForm[each].label}
                            placeholder={
                                formFields.registrationForm[each].placeholder
                            }
                            variant={formFields.variants.outlined}
                            error={!!formState[idx + 2].error}
                            helperText={formState[idx + 2].error}
                            value={formState[idx + 2].value}
                            onChange={handleChange}
                        />
                    ))}
                </div>

                <div className="passwords">
                    {[
                        formFields.registrationForm.password.id,
                        formFields.registrationForm.confirmPassword.id,
                    ].map((each, idx) => (
                        <TextField
                            key={each}
                            name={each}
                            label={formFields.registrationForm[each].label}
                            type={
                                togglePasswordVisibility[each]
                                    ? formFields.textFieldTypes.password
                                    : formFields.textFieldTypes.text
                            }
                            variant={formFields.variants.outlined}
                            error={!!formState[idx + 4].error}
                            helperText={formState[idx + 4].error}
                            value={formState[idx + 4].value}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onMouseUp={() =>
                                                showHidePassword(
                                                    formFields.registrationForm[
                                                        each
                                                    ].id
                                                )
                                            }
                                            onMouseDown={() =>
                                                showHidePassword(
                                                    formFields.registrationForm[
                                                        each
                                                    ].id
                                                )
                                            }
                                        >
                                            {togglePasswordVisibility[each] ? (
                                                <AiFillEye />
                                            ) : (
                                                <AiFillEyeInvisible />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    ))}
                </div>
                <div className="submit-btn">
                    <Button variant="contained" type="submit">
                        {formFields.buttons.register}
                    </Button>
                </div>
            </form>
        </>
    );
};

export default RegistrationForm;