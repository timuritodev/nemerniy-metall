import { Link } from 'react-router-dom';
import './Header.css';
import { FC } from 'react';

export const Header: FC = () => {
    return (
        <header className='header'>
            <Link to="/services" className='header__link'>Услуги</Link>
            <Link to="/delivery" className='header__link'>Доставка и самовывоз</Link>
            <Link to="/payment" className='header__link'>Оплата</Link>
            <Link to="/return" className='header__link'>Возврат</Link>
            <Link to="/contacts" className='header__link'>Контакты</Link>
        </header>
    )
}

