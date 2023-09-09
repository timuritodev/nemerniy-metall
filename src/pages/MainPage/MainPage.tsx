/* eslint-disable react-hooks/exhaustive-deps */
import './MainPage.css';
import { FC } from 'react';
import { SlickSlider } from '../../components/SlickSlider/SlickSlider';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import { getBlocksApi } from '../../services/redux/slices/blocks/block';
import { BlockList } from '../../components/Block/BlockList';
import { CardList } from '../../components/Card/CardList';
import { getCardsApi } from '../../services/redux/slices/cards/cards';
import { getItemsApi } from '../../services/redux/slices/items/items';

export const MainPage: FC = () => {
    const dispatch = useAppDispatch();
    const blocks = useAppSelector((state) => state.block.blocks);
    const cards = useAppSelector((state) => state.card.cards)

    useEffect(() => {
        dispatch(getBlocksApi());
        dispatch(getCardsApi());
    }, []);

    useEffect(() => {
        const isItemsFetched = localStorage.getItem('isItemsFetched');
        if (!isItemsFetched) {
            dispatch(getItemsApi());
            localStorage.setItem('isItemsFetched', 'true');
        }
    }, []);

    return (
        <section className='main'>
            <BlockList data={blocks} />
            <div>
                <SlickSlider />
                <h2 className='cardlist__title'>Выгодное предложение</h2>
                <CardList data={cards} />
            </div>
        </section>
    )
}

