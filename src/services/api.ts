import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.clarifai.com',
    headers:{
        "Authorization":"Key f28dc5a371b34023814643eb78a10d6f"
    }
})