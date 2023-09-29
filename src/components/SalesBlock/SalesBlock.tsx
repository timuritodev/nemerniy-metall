import { MainButton } from '../Button/MainButton';
import './SalesBlock.css';
import { useAppSelector } from '../../services/typeHooks';
import { Discount } from '../Discount/Discount';

export const SalesBlock = () => {
	const img = useAppSelector((state) => state.image.images);

	return (
		<div className="sales-block">
			<h2 className="sales-block__title">{img[0].title}</h2>
			<img className="sales-block__image" src={img[0].image} alt='фото' />
			<Discount num={15} />
			<MainButton title="Оставить заявку" />
		</div>
	);
};
