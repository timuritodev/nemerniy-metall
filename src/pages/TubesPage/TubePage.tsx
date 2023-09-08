import './TubePage.css';
import { FC } from 'react';
import { useAppSelector } from '../../services/typeHooks';
import { ItemList } from '../../components/Item/ItemList';

export const TubePage: FC = () => {
    const items = useAppSelector((state) => state.item.items[3])

    return (
        <section className='tube-page'>
            <h2 className='tube-page__title'>{items.title}</h2>
            <ItemList data={items.data} id={items.id}/>
        </section>
    )
}

