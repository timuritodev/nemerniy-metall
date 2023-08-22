import { IImage } from "../../../../types/Image.types";

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

export const getImgs = (): Array<IImage> => {
	// return fetchData(`${API_URL}/signin`, data);

	const myimg = [
        {
            id: 1,
            title: 'Скидки 15%',
            text: 'Арматура 5*5, Уголок',
            image: 'https://fs.kinomania.ru/image/file/film_wallpaper/a/3c/a3cdf7cabc49ea4612b126ae2a30ecbf.1440.900.jpeg',
        },
        {
            id: 1,
            title: 'Скидки 15%',
            text: 'Арматура 5*5, Уголок',
            image: 'https://in-rating.ru/space/wp-content/uploads/2023/03/Les-trois-mousquetaires-DArtagnan-9-1200.jpg',
        },
        {
            id: 1,
            title: 'Скидки 15%',
            text: 'Арматура 5*5, Уголок',
            image: 'https://avatars.mds.yandex.net/get-znatoki/1548967/2a0000016cc241be5ba3b55cc281e4c2fa14/w480',
        }
    ]

	return myimg;
};
