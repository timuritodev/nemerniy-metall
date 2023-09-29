import { MainButton } from '../Button/MainButton';
import './SalesBlock.css';
import { useAppSelector } from '../../services/typeHooks';
import { Discount } from '../Discount/Discount';

export const SalesBlock = () => {
	const img = useAppSelector((state) => state.image.images[1]);

	return (
		<div className="sales-block">
			<h2 className="sales-block__title">{img.title}</h2>
			<img className="sales-block__image" src={img.image} alt={img.image} />
			<Discount num={15} />
			<MainButton title="Оставить заявку" />
		</div>
	);
};
