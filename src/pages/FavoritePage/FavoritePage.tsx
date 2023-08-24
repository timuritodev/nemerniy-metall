/* eslint-disable react-hooks/exhaustive-deps */
import './FavoritePage.css';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import { CardList } from '../../components/Card/CardList';
import { getCardsApi } from '../../services/redux/slices/cards/cards';

export const FavoritePage: FC = () => {
    const dispatch = useAppDispatch();
    const cardsFav = useAppSelector((state) => state.card.cardsFavorite)

    console.log(cardsFav, 'fav')

    useEffect(() => {
        dispatch(getCardsApi());
    }, []);

    return (
        <section className='favorite-page'>
            <h2 className='cardlist__title'>Избранное</h2>
            <CardList data={cardsFav} />
        </section>
    )
}

