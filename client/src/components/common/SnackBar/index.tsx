import React from "react";
// import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppDispatch } from "../../../store/hooks";
import { setNotification } from "../../../store/slices/acrossAppSlice";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBar = ({ snack, message, variant }) => {
    const dispatch = useAppDispatch();

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(
            setNotification({
                notification: false,
                message: "",
                variant: "",
            })
        );
    };

    return (
        <Snackbar open={snack} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={variant}
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackBar;