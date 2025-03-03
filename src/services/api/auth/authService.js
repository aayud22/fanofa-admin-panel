import { post } from "../axiosInstance";
import API_CONSTANTS from "../../../constants/apiEndpoints";

export const loginUser = (credentials) => post(API_CONSTANTS.AUTH.LOGIN_USER, credentials);
export const loginAdmin = (credentials) => post(API_CONSTANTS.AUTH.LOGIN_ADMIN, credentials);