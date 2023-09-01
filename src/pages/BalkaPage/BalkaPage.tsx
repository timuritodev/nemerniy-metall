/* eslint-disable react-hooks/exhaustive-deps */
import './BalkaPage.css';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import { CardList } from '../../components/Card/CardList';
import { getItemsApi } from '../../services/redux/slices/items/items';

export const BalkaPage: FC = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.item.items[0])

    console.log(items)

    useEffect(() => {
        dispatch(getItemsApi());
    }, []);

    return (
        <section className='balka-page'>
            <h2 className='balka-page__title'>{items.title}</h2>
            <CardList data={items.data} />
        </section>
    )
}
