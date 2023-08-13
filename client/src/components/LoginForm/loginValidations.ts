import formFields from "../../assets/content/FormFields.json";

export const initialLoginFormState = [
    {
        label: formFields.registrationForm.email.label,
        name: formFields.registrationForm.email.id,
        value: "",
        error: "",
    },
    {
        label: formFields.registrationForm.password.label,
        name: formFields.registrationForm.password.id,
        value: "",
        error: "",
    },
];

export const loginValidations = {
    email: {
        required: true,
    },
    password: {
        required: true,
    },
};
