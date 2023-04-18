import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTAwZTMyODZiMzZjNjcwN2MzYzI3ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTQ1NzIwOCwiZXhwIjoxNjcyMjM0ODA4fQ.r8MtY2cPtZYak2PaZae4Rk5f_L_vJgEJBMEc-xVPVTQ"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});