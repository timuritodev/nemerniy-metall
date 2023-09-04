import { ICard } from "../../../../types/Card.types";
import { API_BASE_URL } from "../../../../utils/constants";


const checkRes = (res: Response) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(res);
    }
};

export const fetchData = (url: string, method: string) => {
    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => checkRes(res));
};

// export const fetchAddToFavorites = (id: number): Promise<Response> => {
//     return fetchData(`${API_BASE_URL}/cards/${id}/favorite`, 'POST');
// };

// export const fetchRemoveToFavorites = (id: number): Promise<Response> => {
//     return fetchData(`${API_BASE_URL}/cards/${id}/favorite`, 'DELETE');
// };

// export const getFavoriteCards = (): Promise<[]> => {
//     return fetchData(`${API_BASE_URL}/cards/favorites`, 'GET');
// };

export const getCards = (): Promise<Array<ICard>> => {
    return fetchData(`${API_BASE_URL}/cards`, 'GET');
};
