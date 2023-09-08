import './BalkaPage.css';
import { FC } from 'react';
import { useAppSelector } from '../../services/typeHooks';
import { ItemList } from '../../components/Item/ItemList';

export const BalkaPage: FC = () => {
    const items = useAppSelector((state) => state.item.items[0])

    return (
        <section className='balka-page'>
            <h2 className='balka-page__title'>{items.title}</h2>
            <ItemList data={items.data} id={items.id}/>
        </section>
    )
}

