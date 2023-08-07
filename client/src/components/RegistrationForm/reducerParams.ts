import formFields from "../../assets/content/FormFields.json";

export const initialFormState = [
    {
        id: formFields.registrationForm.firstName.id,
        value: "",
        error: "",
    },
    {
        id: formFields.registrationForm.lastName.id,
        value: "",
        error: "",
    },
    {
        id: formFields.registrationForm.email.id,
        value: "",
        error: "",
    },
    {
        id: formFields.registrationForm.mobile.id,
        value: "",
        error: "",
    },
    {
        id: formFields.registrationForm.password.id,
        value: "",
        error: "",
    },
    {
        id: formFields.registrationForm.confirmPassword.id,
        value: "",
        error: "",
    },
];

export const formReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return state.map((field) => {
                if (field.id === action.id) {
                    return { ...field, value: action.value, error: "" };
                } else {
                    return field;
                }
            });
        case "VALIDATE":
            return state.map((field) => {
                if (field.value.trim() === "") {
                    return {
                        ...field,
                        error: formFields.registrationForm[field.id].errorText,
                    };
                } else {
                    return field;
                }
            });
        case "CLEAR":
            return state.map((field) => {
                return {
                    ...field,
                    value: "",
                    error: "",
                };
            });
        default:
            return state;
    }
};