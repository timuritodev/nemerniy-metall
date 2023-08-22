import { IBlock } from "../../../../types/Block.types";
import pic1 from "../../../../images/07zi7wgi46i50v1n2ywepa8bp7rpl1m2.webp"
import pic2 from "../../../../images/b8dwceph3of19gdgwe4i7psnz0h4xz6r.webp"
import pic3 from "../../../../images/c6nph83dy5wt5b9ty0sp0ixu9vl906il.webp"

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

export const getBlocks = (): Array<IBlock> => {
	// return fetchData(`${API_URL}/signin`, data);

	const myblock = [
        {
            id: 1,
            title: 'Арматура',
            image: pic1,
        },
        {
            id: 1,
            title: 'Листовой прокат',
            image: pic2,
        },
        {
            id: 1,
            title: 'Сорт',
            image: pic3,
        },
        {
            id: 1,
            title: 'Сорт',
            image: pic3,
        },
        {
            id: 1,
            title: 'Сорт',
            image: pic3,
        }
    ]

	return myblock;
};
