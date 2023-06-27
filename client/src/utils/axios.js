import axios from "axios";

const BASE_URL = "http://localhost:7000/api/";
const persistData = localStorage.getItem("persist:root");
const persistObj = JSON.parse(persistData);
const userObj = JSON.parse(persistObj?.user || "{}");
const accessToken = userObj?.currentUser?.accessToken;

const token = accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${token}` },
});
