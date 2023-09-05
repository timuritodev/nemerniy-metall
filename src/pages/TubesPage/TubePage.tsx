/* eslint-disable react-hooks/exhaustive-deps */
import './TubePage.css';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import { getItemsApi } from '../../services/redux/slices/items/items';
import { ItemList } from '../../components/Item/ItemList';

export const TubePage: FC = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.item.items[3])

    useEffect(() => {
        dispatch(getItemsApi());
    }, []);

    return (
        <section className='tube-page'>
            <h2 className='tube-page__title'>{items.title}</h2>
            <ItemList data={items.data} id={items.id}/>
        </section>
    )
}

