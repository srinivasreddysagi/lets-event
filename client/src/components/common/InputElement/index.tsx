import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import formFields from "../../../assets/content/FormFields.json";

export const InputElement = (props) => {
    switch (props.type) {
        case "text":
        case "email":
        case "tel":
            return (
                <>
                    <TextField
                        {...props }
                    />
                </>
            );

        case "password":
            return (
                <>
                    <TextField
                        {...props}
                        type={
                            props.hide
                                ? formFields.textFieldTypes.password
                                : formFields.textFieldTypes.text
                        }
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onMouseUp={props.showHidePassword}
                                        onMouseDown={props.showHidePassword}
                                        onTouchStart={props.showHidePassword}
                                    >
                                        {props.hide ? (
                                            <AiFillEye />
                                        ) : (
                                            <AiFillEyeInvisible />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </>
            );

        default:
            break;
    }
};

export default InputElement;