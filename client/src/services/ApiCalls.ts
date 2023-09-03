import axios from "axios";

// const config = {
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//     },
// };

export const getRequest = async (url) => {
    const response = await axios.get(url);
    return response;
};

export const postRequest = async (url, body) => {
    const response = await axios.post(url, body);
    return response;
};