import './BinPage.css';
import { FC } from 'react';
import { useAppSelector } from '../../services/typeHooks';
import { CardList } from '../../components/Card/CardList';

export const BinPage: FC = () => {
    const cardsBin = useAppSelector((state) => state.card.cardsBin)

    return (
        <section className='bin-page'>
            <h2 className='bin-page__title'>Корзина</h2>
            <CardList data={cardsBin} />
        </section>
    )
}

