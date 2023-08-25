/* eslint-disable react-hooks/exhaustive-deps */
import './BinPage.css';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import { CardList } from '../../components/Card/CardList';
import { getCardsApi } from '../../services/redux/slices/cards/cards';

export const BinPage: FC = () => {
    const dispatch = useAppDispatch();
    const cardsBin = useAppSelector((state) => state.card.cardsBin)

    console.log(cardsBin, 'fav')

    useEffect(() => {
        dispatch(getCardsApi());
    }, []);

    return (
        <section className='bin-page'>
            <h2 className='bin-page__title'>Корзина</h2>
            <CardList data={cardsBin} />
        </section>
    )
}

