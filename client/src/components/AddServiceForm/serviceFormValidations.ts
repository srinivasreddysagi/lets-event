import formFields from "../../assets/content/FormFields.json";

export const initialServiceFormState = [
    {
        label: formFields.serviceForm.service.label,
        name: formFields.serviceForm.service.id,
        value: "",
        error: "",
    },
    {
        label: formFields.serviceForm.name.label,
        name: formFields.serviceForm.name.id,
        value: "",
        error: "",
    },
    {
        label: formFields.serviceForm.city.label,
        name: formFields.serviceForm.city.id,
        value: "",
        error: "",
    },
    {
        label: formFields.serviceForm.price.label,
        name: formFields.serviceForm.price.id,
        value: "",
        error: "",
    },
    {
        label: formFields.serviceForm.contact.label,
        name: formFields.serviceForm.contact.id,
        value: "",
        error: "",
    },
];

export const serviceFormValidations = {
    service: {
        required: true,
    },
    name: {
        required: true,
        patterns: [
            {
                pattern: /^[a-zA-Z\s]+$/,
                message: "Only alphabets and space allowed",
            },
        ],
    },
    city: {
        required: true,
    },
    price: {
        required: true,
    },
    contact: {
        required: true,
        patterns: [
            {
                pattern: /^\+(?!0)\d{12}$/,
                message: "Enter a valid mobile number along with country code",
            },
        ],
    },
};

export const serviceFormInputElements = [
    {
        name: formFields.serviceForm.service.id,
        type: "select",
        label: formFields.serviceForm.service.label,
        options: [
            { key: "Decoration", value: "Decoration" },
            { key: "Catering", value: "Catering" },
            { key: "Venue", value: "Venue" },
            { key: "Bar", value: "Bar" },
            { key: "Transportation", value: "Transportation" },
            { key: "Makeup", value: "Makeup" },
            { key: "Cleaning", value: "Cleaning" },
            { key: "Planning", value: "Planning" },
        ],
    },
    {
        name: formFields.serviceForm.name.id,
        type: "text",
        label: formFields.serviceForm.name.label,
    },
    {
        name: formFields.serviceForm.city.id,
        type: "select",
        label: formFields.serviceForm.city.label,
        options: [
            { key: "Hyderbad", value: "Hyderbad" },
            { key: "Mumbai", value: "Mumbai" },
            { key: "Bengaluru", value: "Bengaluru" },
            { key: "Visakhapatnam", value: "Visakhapatnam" },
            { key: "Ahmedabad", value: "Ahmedabad" },
            { key: "Chennai", value: "Chennai" },
            { key: "Jaipur", value: "Jaipur" },
            { key: "Nagpur", value: "Nagpur" },
        ],
    },
    {
        name: formFields.serviceForm.price.id,
        type: "text",
        label: formFields.serviceForm.price.label,
    },
    {
        name: formFields.serviceForm.contact.id,
        type: "text",
        label: formFields.serviceForm.contact.label,
    },
];