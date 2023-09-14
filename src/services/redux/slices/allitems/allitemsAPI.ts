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

export const getAllitems = (): Promise<Array<ICard>> => {
    return fetchData(`${API_BASE_URL}/allitems`, 'GET');
};
