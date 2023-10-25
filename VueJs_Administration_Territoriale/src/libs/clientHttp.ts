import axios from "axios";
const clientHttp = axios.create(
    {
        baseURL:'http://127.0.0.1:3030/',
    }
)
export default clientHttp;