import { useState } from "react";
import { postRequest } from "../services/ApiCalls";
import { useAppDispatch } from "../store/hooks";
import { setIsLoading } from "../store/slices/acrossAppSlice";

export const useRequest = () => {
    const dispatch = useAppDispatch();
    const [isError, setIsError] = useState({status: false, message: "Something went wrong :("});

    const postData = async (url, payload) => {
        dispatch(setIsLoading(true));
        try {
            const response = await postRequest(url, payload);
            return response;
        } catch (error) {
            setIsError(error);
            dispatch(setIsLoading(false));
            return { status: 500 };
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    return {
        // isLoading,
        isError,
        postData,
    };
};