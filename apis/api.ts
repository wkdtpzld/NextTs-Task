import axios from "axios";

interface IFetchStores {
    description: string;
    id: number
    image: string;
    name: string;
    thumb: string;
    url: string;
}

export async function fetchStores() {
    const response = axios.get<IFetchStores[]>("http://localhost:9000/stores")
        .then(res => res.data)
        .catch(error => console.log(error.message));
        
    return response;
}