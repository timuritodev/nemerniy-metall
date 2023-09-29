import { MainButton } from '../Button/MainButton';
import './DeliveryBlock.css';
import { useAppSelector } from '../../services/typeHooks';

export const DeliveryBlock = () => {
	const img = useAppSelector((state) => state.image.images[0]);

	return (
		<div className="delivery-block">
			<h2 className="delivery-block__title">Доставка от 20 тонн длинномером бесплатно</h2>
			<img className="delivery-block__image" src={img.image} alt={img.image} />
			<MainButton title="Оставить заявку" />
		</div>
	);
};
