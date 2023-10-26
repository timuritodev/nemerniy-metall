import { Button } from '../Button/Button';
import './Footer.css';
import { FC } from 'react';
import pic from '../../images/logoza.ru-PhotoRoom 1.svg';
import { Telephone } from '../Telephone/Telephone';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
	return (
		<footer className="footer">
			<div className="footer__logo-container">
				<img className="header__logo" src={pic} alt={pic} />
				<p className="footer__text footer__plus-text">
					Немерный металл - интернет магазин, занимающийся продажей металла.
				</p>
			</div>
			<div className="footer__text-container">
				<h3 className="footer__text__title">Покупателям</h3>
				<Link to="/service-page" className="footer__text__link">
					Услуги
				</Link>
				<Link to="/delivery-page" className="footer__text__link">
					Доставка и самовывоз
				</Link>
				<Link to="/payment-page" className="footer__text__link">
					Оплата
				</Link>
				<Link to="/return-page" className="footer__text__link">
					Возврат
				</Link>
				<Link to="/contacts-page" className="footer__text__link">
					Контакты
				</Link>
			</div>
			<div className="footer__text-container">
				<h3 className="footer__text__title">Компания</h3>
				<Link to="/contacts-page" className="footer__text__link">
					Контакты
				</Link>
				<Link to="/contacts-page" className="footer__text__link">
					О компании
				</Link>
			</div>
			<div className="footer__container">
				<Button title={'Обратная связь'} />
				<p className="footer__text">
					Остался вопрос или есть предложение? Напишите нам!
				</p>
				<Telephone />
			</div>
		</footer>
	);
};
