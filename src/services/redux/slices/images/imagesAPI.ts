import { IImage } from "../../../../types/Image.types";

export const getImgs = (): Array<IImage> => {
	const myimg = [
        {
            id: 1,
            title: 'Доставка от 20 тонн длинномером бесплатно',
            text: 'При покупке от 20 тонн металлопроката доставка длинномером бесплатно',
            image: 'https://www.stal-faktura.ru/upload/resize_cache/webp/upload/iblock/dd4/ba2srg7qewcgmtey56tfxotbs0lpeuua.webp',
        },
        {
            id: 2,
            title: 'Чистим склад!',
            text: 'Скидка 5% на всё при покупке металла на сумму от 100 000 рублей.',
            image: 'https://www.stal-faktura.ru/upload/resize_cache/webp/upload/iblock/6ed/z2qwi27vecs2iqmj94z559tbr5i6i5qb.webp',
        },
        // {
        //     id: 3,
        //     title: ' 15%',
        //     text: 'Арматура 5*5, Уголок',
        //     image: 'https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2425.jpg',
        // }
    ]

	return myimg;
};
