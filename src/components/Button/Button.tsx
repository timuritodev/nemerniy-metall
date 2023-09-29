import { useAppDispatch } from '../../services/typeHooks';
import { openPopup, closePopup } from '../../services/redux/slices/popup/popup';
import { useAppSelector } from '../../services/typeHooks';
import PopupForm from '../PopupForm/PopupForm';
import './Button.css'

export const Button = ({ title }: { title: string }) => {
	const dispatch = useAppDispatch();

	const isPopupOpen = useAppSelector((state) => state.popup.popup);

	const switchPopupTrailer = () => {
		if (isPopupOpen) {
			dispatch(closePopup());
		} else {
			dispatch(openPopup());
		}
	};

	return (
		<div className="button__container">
			<button
				onClick={switchPopupTrailer}
				className={`button ${title === 'Оставить заявку' ? 'button_add' : ''}`}
			>
				{title}
			</button>
			<PopupForm switchPopupTrailer={switchPopupTrailer} />
		</div>
	);
};
