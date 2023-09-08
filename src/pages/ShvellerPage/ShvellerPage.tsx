import './ShvellerPage.css';
import { FC } from 'react';
import { useAppSelector } from '../../services/typeHooks';
import { ItemList } from '../../components/Item/ItemList';

export const ShvellerPage: FC = () => {
    const items = useAppSelector((state) => state.item.items[2])

    return (
        <section className='shveller-page'>
            <h2 className='shveller-page__title'>{items.title}</h2>
            <ItemList data={items.data} id={items.id}/>
        </section>
    )
}

