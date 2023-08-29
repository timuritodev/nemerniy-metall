import { IImage } from "../../../../types/Image.types";

export const getImgs = (): Array<IImage> => {
	const myimg = [
        {
            id: 1,
            title: 'Скидки 15%',
            text: 'Арматура 5*5, Уголок',
            image: 'https://png.pngtree.com/thumb_back/fw800/background/20200821/pngtree-dark-blue-solid-color-background-wallpaper-image_396572.jpg',
        },
        {
            id: 2,
            title: 'Скидки %фывы',
            text: ' 5*5, Уголок',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3cDrxffR5cmwyG9hZ5rplRGEu1-Csk7e2csIuWJM1g&s',
        },
        {
            id: 3,
            title: ' 15%',
            text: 'Арматура 5*5, Уголок',
            image: 'https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2425.jpg',
        }
    ]

	return myimg;
};
