import axios from "axios";

export const adminLogin = async (data: any) => {
    return await axios.post(`your-api-endpoint/admin/login`, data)
};
export const userLogin = async (data: any) => {
    return await axios.post(`your-api-endpoint/user/login`, data)
};
export const adminSignup = async (data: any) => {
    return await axios.post(`your-api-endpoint/admin/signup`, data)
};
export const userSignup = async (data: any) => {
    return await axios.post(`your-api-endpoint/user/signup`, data)
};