import './UgolokPage.css';
import { FC } from 'react';
import { useAppSelector } from '../../services/typeHooks';
import { ItemList } from '../../components/Item/ItemList';

export const UgolokPage: FC = () => {
    const items = useAppSelector((state) => state.item.items[1])

    return (
        <section className='ugolok-page'>
            <h2 className='ugolok-page__title'>{items.title}</h2>
            <ItemList data={items.data} id={items.id}/>
        </section>
    )
}

