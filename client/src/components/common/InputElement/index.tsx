import React from "react";
import {
    IconButton,
    InputAdornment,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import formFields from "../../../assets/content/FormFields.json";

export const InputElement = (props) => {
    switch (props.type) {
        case "text":
        case "email":
        case "tel":
            return (
                <>
                    <TextField {...props} />
                </>
            );

        case "select":
            return (
                <FormControl fullWidth>
                    <InputLabel id={props.id}>{props.label}</InputLabel>
                    <Select {...props} labelId={props.id}>
                        {props.options.map(({ key, value }) => (
                            <MenuItem value={value}>{key}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
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