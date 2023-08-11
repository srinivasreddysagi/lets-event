import { useReducer } from "react";

export const useForm = (initialFormState, validations) => {
    const formReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE":
                return state.map((field) => {
                    if (field.name === action.name) {
                        return { ...field, value: action.value, error: "" };
                    } else {
                        return field;
                    }
                });
            case "VALIDATE":
                    return action.payload;
            case "PLACE_ERR":
                return state.map((field) => {
                    if (field.name === action.payload.name) {
                        return { ...field, error: action.payload.error };
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

    const [formState, dispatch] = useReducer(formReducer, initialFormState);

    const handleChange = (event) => {
        dispatch({
            type: "CHANGE",
            name: event.target.name,
            value: event.target.value,
        });
    };

    const validate = () => {
        let isValid = true;
        const payload = formState.map((field) => {
            if (validations[field.name].required && field.value.trim() === "") {
                isValid = false;
                return {
                    ...field,
                    error: `${field.label} is required`,
                };
            } else if (validations[field.name].patterns?.length > 0) {
                validations[field.name].patterns.forEach((validation) => {
                    if (!validation.pattern.test(field.value) && !field.error) {
                        isValid = false;
                        field.error = validation.message;
                    }
                });
                return field;
            } else {
                return field;
            }
        });
        dispatch({ type: "VALIDATE", payload });
        return isValid;
    };

    const setError = (name, error) =>
        dispatch({ type: "PLACE_ERR", payload: { name, error } });

    const clearForm = () => dispatch({ type: "CLEAR" });

    return {
        formState,
        handleChange,
        validate,
        clearForm,
        setError,
    };
};