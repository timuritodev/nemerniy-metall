import { IBlock } from "../../../../types/Block.types";

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
            image: '',
        },
        {
            id: 1,
            title: 'Листовой прокат',
            image: '',
        },
        {
            id: 1,
            title: 'Сорт',
            image: '',
        }
    ]

	return myblock;
};
