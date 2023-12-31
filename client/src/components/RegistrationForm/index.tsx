import React, { FC, useState } from "react";
import Link from "next/link";
import { useForm } from "../../hooks/useForm";
import InputElement from "../common/InputElement";
import { Button } from "@mui/material";
import formFields from "../../assets/content/FormFields.json";
import endpoint from "../../assets/content/Endpoints.json";
import messages from "../../assets/content/AlertMessages.json";
import { initialFormState, validations } from "./registerFormData";
import md5 from "blueimp-md5";
import { useRequest } from "../../hooks/useRequest";
import { useAppDispatch } from "../../store/hooks";
import { setNotification } from "../../store/slices/acrossAppSlice";

interface Response {
    status: number;
    data?: {
        type: string;
        message: string;
    }
}

export const RegistrationForm: FC = () => {
    const { formState, handleChange, validate, setError, clearForm } = useForm(
        initialFormState,
        validations
    );
    const { isError, postData } = useRequest();
    const [togglePasswordVisibility, setTogglePasswordVisibility] = useState({
        password: true,
        confirmPassword: true,
    });

    const dispatch = useAppDispatch();

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
            const response: Response = await postData(
                endpoint.root +
                    endpoint.endpoints.rootVersion +
                    endpoint.endpoints.register,
                payload
            );
            if (response.status === 200) {
                clearForm();
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
                        variant: messages.alertVariants.error,
                        message: messages.common.error,
                    })
                );
            }
        } else if (
            formState[4].value &&
            formState[5].value &&
            formState[4].value !== formState[5].value
        ) {
            setError(
                formFields.registrationForm.confirmPassword.id,
                formFields.registrationForm.confirmPassword.errorText
            );
        }
    };

    if (isError.status) return <>{isError.message}</>;

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
                        <InputElement
                            className="inputField"
                            key={each}
                            type={formFields.textFieldTypes.text}
                            name={each}
                            label={formFields.registrationForm[each].label}
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
                        <InputElement
                            key={each}
                            type={formFields.textFieldTypes[each]}
                            name={each}
                            label={formFields.registrationForm[each].label}
                            placeholder={
                                formFields.registrationForm[each].placeholder
                            }
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
                        <InputElement
                            key={each}
                            name={each}
                            type={formFields.registrationForm.password.id}
                            label={formFields.registrationForm[each].label}
                            hide={togglePasswordVisibility[each]}
                            showHidePassword={() =>
                                showHidePassword(
                                    formFields.registrationForm[each].id
                                )
                            }
                            error={!!formState[idx + 4].error}
                            helperText={formState[idx + 4].error}
                            value={formState[idx + 4].value}
                            onChange={handleChange}
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