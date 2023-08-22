import './MainPage.css';
import { FC } from 'react';
import { SlickSlider } from '../../components/SlickSlider/SlickSlider';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect, useState } from 'react';
import { getBlocksApi } from '../../services/redux/slices/blocks/block';
import { Block } from '../../components/Block/Block';

export const MainPage: FC = () => {
    const dispatch = useAppDispatch();
    const blocks = useAppSelector((state) => state.block.blocks);

    useEffect(() => {
        dispatch(getBlocksApi());
    }, []);

    return (
        <section className='main'>
            <div>
                {blocks.map((item) => <Block data={item} />)}
            </div>
            <SlickSlider />
        </section>
    )
}

