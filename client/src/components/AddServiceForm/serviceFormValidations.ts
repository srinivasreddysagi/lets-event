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
            { key: "Decoration", value: "DEC" },
            { key: "Catering", value: "CAT" },
            { key: "Venue", value: "VEN" },
            { key: "Bar", value: "BAR" },
            { key: "Transportation", value: "TRANS" },
            { key: "Makeup", value: "MKUP" },
            { key: "Cleaning", value: "CLNG" },
            { key: "Planning", value: "PLAN" },
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
            { key: "Hyderbad", value: "HYD" },
            { key: "Mumbai", value: "MUM" },
            { key: "Bengaluru", value: "BEN" },
            { key: "Visakhapatnam", value: "VZG" },
            { key: "Ahmedabad", value: "AHD" },
            { key: "Chennai", value: "CHE" },
            { key: "Jaipur", value: "JPR" },
            { key: "Nagpur", value: "NAG" },
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