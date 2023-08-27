import React, { FC } from "react";
import { Box, Modal, Typography, Button } from "@mui/material";
import formFields from "../../assets/content/FormFields.json";
import endpoints from "../../assets/content/Endpoints.json";
import { useForm } from "../../hooks/useForm";
import {
    initialServiceFormState,
    serviceFormValidations,
    serviceFormInputElements,
} from "./serviceFormValidations";
import InputElement from "../common/InputElement";
import { postRequest } from "../../services/ApiCalls";
import messages from "../../assets/content/AlertMessages.json";
import { useAppDispatch } from "../../store/hooks";
import { setNotification } from "../../store/slices/acrossAppSlice";
import { UserData } from "../../store/interfaces";

export interface AddServiceFormProps {
    open: boolean;
    handleClose: any;
    userData: UserData;
}

export const AddServiceForm: FC<AddServiceFormProps> = ({
    open,
    handleClose,
    userData,
}) => {
    const { formState, handleChange, validate, clearForm } = useForm(
        initialServiceFormState,
        serviceFormValidations
    );

    const dispatch = useAppDispatch();

    const submitHandler = async (event) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) {
            const payload = {
                email: userData.email,
                service: formState[0].value,
                name: formState[1].value,
                city: formState[2].value,
                price: formState[3].value,
                contact: formState[4].value,
            };
            const response = await postRequest(
                endpoints.root +
                    endpoints.endpoints.rootVersion +
                    endpoints.endpoints.addService,
                payload
            );
            if (
                response.status === 200 &&
                response.data.message === messages.services.done
            ) {
                dispatch(
                    setNotification({
                        notification: true,
                        variant: response.data.type,
                        message: response.data.message,
                    })
                );
                clearForm();
                handleClose();
            }
        }
    };

    const closeModal = () => {
        clearForm();
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="service-provider-form"
        >
            <Box className="form-fill">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Service Details
                </Typography>
                <form className="form-fields" onSubmit={submitHandler}>
                    {serviceFormInputElements.map((each, idx) => (
                        <InputElement
                            className="inputField"
                            key={each.name}
                            type={each.type}
                            name={each.name}
                            label={each.label}
                            options={each?.options}
                            error={!!formState[idx].error}
                            helperText={formState[idx].error}
                            value={formState[idx].value}
                            onChange={handleChange}
                        />
                    ))}
                    <div className="submit-btn">
                        <Button variant="contained" type="submit">
                            {formFields.buttons.submit}
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default AddServiceForm;