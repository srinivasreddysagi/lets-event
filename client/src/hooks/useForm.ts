import { useReducer, useState } from "react";

export const useForm = (initialFormState, validations) => {
    // const [isError, setIsError] = useState(false);
    let isError = true;

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
                return state.map((field) => {
                    if (
                        validations[field.name].required &&
                        field.value.trim() === ""
                    ) {
                        console.log("Executed empty 5 times");
                        isError = true; // setIsError(true);
                        return {
                            ...field,
                            error: `${field.label} is required`,
                        };
                    } else if (validations[field.name].patterns?.length > 0) {
                        validations[field.name].patterns.forEach(
                            (validation) => {
                                if (
                                    !validation.pattern.test(field.value) &&
                                    !field.error
                                ) {
                                    isError = true; setIsError(true);
                                    field.error = validation.message;
                                }
                            }
                        );
                        return field;
                    } else {
                        return field;
                    }
                });
            case "PLACE_ERR":
                return state.map((field) => {
                    if (field.name === action.payload.name) {
                        isError = true; // setIsError(true);
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

    const validate = async () => {
        await (() => dispatch({ type: "VALIDATE" }))();
        console.log("isError => ", isError);
        if (isError) {
            isError = false; // setIsError(false);
        } else {
            return true;
        }
        return false;
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