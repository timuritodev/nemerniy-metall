import './BinButton.css';
import { useAppDispatch } from '../../services/typeHooks';
import { updateBin } from '../../services/redux/slices/cards/cards';
import { useLocation } from 'react-router';
import { updateBinItem } from '../../services/redux/slices/items/items';

export const BinButton = ({ data }: { data: any }) => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const id = location.pathname === '/' ? data.id : data.itemId;
    const title = data.title;

    const cardName = data.title; // Здесь предполагается, что имя карточки хранится в `data.title`

    // Получаем массив карточек в корзине из localStorage
    const cartItemsJson = localStorage.getItem('cartItems');
    const cartItemNamesJson = localStorage.getItem('cartItemNames'); // Добавляем для хранения имен

    // Проверяем, есть ли значения в localStorage
    const cartItems = cartItemsJson ? JSON.parse(cartItemsJson) : [];
    const cartItemNames = cartItemNamesJson ? JSON.parse(cartItemNamesJson) : [];

    // Проверяем, есть ли текущая карточка в корзине
    // const isInCart = cartItems.includes(id);
    const isInCart = cartItemNames.includes(title);

    const handleClickBin = () => {
        // Инвертируем статус корзины
        const newIsInCart = !isInCart;

        // Отправляем обновленное состояние на сервер или в хранилище Redux
        if (location.pathname === '/') {
            dispatch(updateBin({ bin: newIsInCart, id }));
        } else {
            dispatch(updateBinItem({ bin: newIsInCart, id }));
        }

        // Обновляем массив карточек в корзине в localStorage
        if (newIsInCart) {
            cartItems.push(id);
            cartItemNames.push(cardName); // Добавляем имя карточки в массив имен
        } else {
            const indexToRemove = cartItems.indexOf(id);
            if (indexToRemove !== -1) {
                cartItems.splice(indexToRemove, 1);
                cartItemNames.splice(indexToRemove, 1); // Удаляем имя карточки из массива имен
            }
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartItemNames', JSON.stringify(cartItemNames)); // Сохраняем массив имен
    };

    const typesText = isInCart ? '-' : 'В корзину';

    return (
        <button className='card__button' onClick={handleClickBin}>{typesText}</button>
    );
};
