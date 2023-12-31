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

    const cardName = data.title; 

    const cartItemsJson = localStorage.getItem('cartItems');
    const cartItemNamesJson = localStorage.getItem('cartItemNames');

    const cartItems = cartItemsJson ? JSON.parse(cartItemsJson) : [];
    const cartItemNames = cartItemNamesJson ? JSON.parse(cartItemNamesJson) : [];

    // const isInCart = cartItems.includes(id);
    const isInCart = cartItemNames.includes(title);

    const handleClickBin = () => {
        const newIsInCart = !isInCart;

        if (location.pathname === '/') {
            dispatch(updateBin({ bin: newIsInCart, id }));
        } else {
            dispatch(updateBinItem({ bin: newIsInCart, id }));
        }

        if (newIsInCart) {
            cartItems.push(id);
            cartItemNames.push(cardName);
        } else {
            const indexToRemove = cartItems.indexOf(id);
            if (indexToRemove !== -1) {
                cartItems.splice(indexToRemove, 1);
                cartItemNames.splice(indexToRemove, 1);
            }
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartItemNames', JSON.stringify(cartItemNames)); 
    };

    const typesText = isInCart ? '-' : 'В корзину';

    return (
        <button className='card__button' onClick={handleClickBin}>{typesText}</button>
    );
};
