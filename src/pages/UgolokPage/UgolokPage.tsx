/* eslint-disable react-hooks/exhaustive-deps */
import './UgolokPage.css';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import { CardList } from '../../components/Card/CardList';
import { getItemsApi } from '../../services/redux/slices/items/items';

export const UgolokPage: FC = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.item.items[1])

    console.log(items)

    useEffect(() => {
        dispatch(getItemsApi());
    }, []);

    return (
        <section className='ugolok-page'>
            <h2 className='ugolok-page__title'>{items.title}</h2>
            <CardList data={items.data} />
        </section>
    )
}

