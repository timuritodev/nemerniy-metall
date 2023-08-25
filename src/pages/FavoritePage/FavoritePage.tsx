import './FavoritePage.css';
import { FC } from 'react';
import { useAppSelector } from '../../services/typeHooks';
import { CardList } from '../../components/Card/CardList';

export const FavoritePage: FC = () => {
    const cardsFav = useAppSelector((state) => state.card.cardsFavorite)

    return (
        <section className='favorite-page'>
            <h2 className='cardlist__title'>Избранное</h2>
            <CardList data={cardsFav} />
        </section>
    )
}

