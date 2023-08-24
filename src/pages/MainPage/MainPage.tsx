/* eslint-disable react-hooks/exhaustive-deps */
import './MainPage.css';
import { FC } from 'react';
import { SlickSlider } from '../../components/SlickSlider/SlickSlider';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import { getBlocksApi } from '../../services/redux/slices/blocks/block';
import { BlockList } from '../../components/Block/BlockList';

export const MainPage: FC = () => {
    const dispatch = useAppDispatch();
    const blocks = useAppSelector((state) => state.block.blocks);

    useEffect(() => {
        dispatch(getBlocksApi());
    }, []);

    return (
        <section className='main'>
            <BlockList data={blocks} />
            <SlickSlider />
        </section>
    )
}

