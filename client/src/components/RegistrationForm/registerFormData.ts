import formFields from "../../assets/content/FormFields.json";

export const initialFormState = [
    {
        label: formFields.registrationForm.firstName.label,
        name: formFields.registrationForm.firstName.id,
        value: "",
        error: "",
    },
    {
        label: formFields.registrationForm.lastName.label,
        name: formFields.registrationForm.lastName.id,
        value: "",
        error: "",
    },
    {
        label: formFields.registrationForm.email.label,
        name: formFields.registrationForm.email.id,
        value: "",
        error: "",
    },
    {
        label: formFields.registrationForm.mobile.label,
        name: formFields.registrationForm.mobile.id,
        value: "",
        error: "",
    },
    {
        label: formFields.registrationForm.password.label,
        name: formFields.registrationForm.password.id,
        value: "",
        error: "",
    },
    {
        label: formFields.registrationForm.confirmPassword.label,
        name: formFields.registrationForm.confirmPassword.id,
        value: "",
        error: "",
    },
];

export const validations = {
    firstName: {
        required: true,
        patterns: [
            {
                pattern: /^[a-zA-Z\s]+$/,
                message: "Only alphabets and space allowed",
            },
        ],
    },
    lastName: {
        required: false,
    },
    email: {
        required: true,
    },
    mobile: {
        required: true,
        patterns: [
            {
                pattern: /^\+(?!0)\d{12}$/,
                message: "Enter a valid mobile number along with country code",
            },
        ],
    },
    password: {
        required: true,
    },
    confirmPassword: {
        required: true,
    },
};