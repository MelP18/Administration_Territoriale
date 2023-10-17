import axios from "axios";
const clientHttp = axios.create(
    {
        baseURL:'http://127.0.0.1:3000/',
        headers:{
            Accept:"text/plain",
            /* "Content-Type":"application/xml" */
        }
    }
)

export const useAxios = ()=>{
    const get = async (url) =>{
        return await clientHttp.get(url);
    }

    return {
        get
    }
}