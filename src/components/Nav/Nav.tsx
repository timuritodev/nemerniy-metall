import { Link } from 'react-router-dom';
import './Nav.css';
import { FC } from 'react';
import { Telephone } from '../Telephone/Telephone';

export const Nav: FC = () => {
    return (
        <nav className="nav">
            <div className='links__container'>
                <Link to="/service-page" className='nav__link'>Услуги</Link>
                <Link to="/delivery-page" className='nav__link'>Доставка и самовывоз</Link>
                <Link to="/payment-page" className='nav__link'>Оплата</Link>
                <Link to="/return-page" className='nav__link'>Возврат</Link>
                <Link to="/contacts-page" className='nav__link'>Контакты</Link>
            </div>
            <div className='telephone__container'>
                <Telephone />
            </div>
        </nav>
    )
}

