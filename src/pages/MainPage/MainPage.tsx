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
import { getAllItemsApi } from '../../services/redux/slices/allitems/allitems';
import { SalesBlock } from '../../components/SalesBlock/SalesBlock';
import { DeliveryBlock } from '../../components/DeliveryBlock/DeliveryBlock';
// import Cookies from "js-cookie";

export const MainPage: FC = () => {
	const dispatch = useAppDispatch();
	const blocks = useAppSelector((state) => state.block.blocks);
	const cards = useAppSelector((state) => state.card.cards);

	useEffect(() => {
		dispatch(getBlocksApi());
		dispatch(getCardsApi());
		dispatch(getAllItemsApi());
		dispatch(getItemsApi());
	}, []);

	// const myCookieValue = Cookies.get('tim');

	// // Пример: Если кука с именем 'myCookie' существует, выведем ее значение в консоль
	// if (myCookieValue) {
	//     console.log('Значение куки:', myCookieValue);
	// }

	// useEffect(() => {
	//     const isItemsFetched = localStorage.getItem('isItemsFetched');
	//     if (!isItemsFetched) {
	//         dispatch(getItemsApi());
	//         localStorage.setItem('isItemsFetched', 'true');
	//     }
	// }, []);

	return (
		<section className="main">
			<BlockList data={blocks} />
			<div>
				<SlickSlider />
				{cards.length !== 0 && (
					<h2 className="cardlist__title">Выгодное предложение</h2>
				)}
				<CardList data={cards} />
				<div className='main__container'>
					<SalesBlock />
					<DeliveryBlock />
				</div>
			</div>
		</section>
	);
};
