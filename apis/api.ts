import axios from "axios";

export interface IFetchStores {
    description: string;
    id: number
    image: string;
    name: string;
    thumb: string;
    url: string;
}



export async function fetchStores() {
    const response = await axios.get<IFetchStores[]>("http://localhost:9000/stores")
        .then(res => res.data)
        .catch(error => console.log(error.message));
        
    return response;
}

export async function fetchStoreDetail(id:string) {
    const response = await axios.get<IFetchStores>(`http://localhost:9000/stores/${id}`)
        .then(res => res.data)
        .catch(error => console.log(error.message));
    
    return response;
}