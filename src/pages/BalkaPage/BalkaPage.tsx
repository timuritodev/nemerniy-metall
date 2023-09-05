/* eslint-disable react-hooks/exhaustive-deps */
import './BalkaPage.css';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import { getItemsApi } from '../../services/redux/slices/items/items';
import { ItemList } from '../../components/Item/ItemList';

export const BalkaPage: FC = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.item.items[0])

    useEffect(() => {
        dispatch(getItemsApi());
    }, []);

    return (
        <section className='balka-page'>
            <h2 className='balka-page__title'>{items.title}</h2>
            <ItemList data={items.data} id={items.id}/>
        </section>
    )
}

