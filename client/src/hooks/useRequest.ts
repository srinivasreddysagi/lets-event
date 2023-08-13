import { useState } from "react";
import { postRequest } from "../services/ApiCalls";

export const useRequest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({status: false, message: "Something went wrong :("});

    const postData = async (url, payload) => {
        setIsLoading(true);
        try {
            const response = await postRequest(url, payload);
            return response;
        } catch (error) {
            setIsError(error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        isError,
        postData,
    };
};