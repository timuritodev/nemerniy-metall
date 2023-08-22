import { Link } from 'react-router-dom';
import './Nav.css';
import { FC } from 'react';

export const Nav: FC = () => {
    return (
        <nav className='nav'>
            <div className='links__container'>
                <Link to="/service" className='nav__link'>Услуги</Link>
                <Link to="/delivery" className='nav__link'>Доставка и самовывоз</Link>
                <Link to="/payment" className='nav__link'>Оплата</Link>
                <Link to="/return" className='nav__link'>Возврат</Link>
                <Link to="/contacts" className='nav__link'>Контакты</Link>
            </div>
            <p className='nav__text'>+7-(917)-874-88-05</p>
        </nav>
    )
}

