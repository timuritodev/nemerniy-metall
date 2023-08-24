import { ICard } from "../../../../types/Card.types";
import pic1 from "../../../../images/steel.webp"

// const API_URL = 'http://127.0.0.1:3000';
// const checkRes = (res: Response) => {
//     if (res.ok) {
//         return res.json();
//     } else {
//         return Promise.reject(res);
//     }
// };

// const fetchData = (url: string, data?: IData) => {
// 	return fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		...(!!data && { body: JSON.stringify(data) }),
// 	}).then((res) => checkRes(res));
// };

export const getCards = (): Array<ICard> => {
	// return fetchData(`${API_URL}/signin`, data);

	const mycard = [
        {
            id: 1,
            title: 'Арматура',
            image: pic1,
            size: '100 мм',
            price: '4420 Руб ПМ/М' 
        },
        {
            id: 1,
            title: 'Арматура',
            image: pic1,
            size: '100 мм',
            price: '4420 Руб ПМ/М' 
        },
        {
            id: 1,
            title: 'Арматура',
            image: pic1,
            size: '100 мм',
            price: '4420 Руб ПМ/М' 
        },
        {
            id: 1,
            title: 'Арматура',
            image: pic1,
            size: '100 мм',
            price: '4420 Руб ПМ/М' 
        },
        {
            id: 1,
            title: 'Арматура',
            image: pic1,
            size: '100 мм',
            price: '4420 Руб ПМ/М' 
        },
    ]

	return mycard;
};
