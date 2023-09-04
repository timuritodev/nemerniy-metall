import { Link } from 'react-router-dom';
import './Nav.css';
import { FC, useEffect, useState } from 'react';
import { Telephone } from '../Telephone/Telephone';

export const Nav: FC = () => {
    const [isNavVisible, setIsNavVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsNavVisible(false);
            } else {
                setIsNavVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`nav ${isNavVisible ? 'visible' : 'hidden'}`}>
            <div className='links__container'>
                <Link to="/service" className='nav__link'>Услуги</Link>
                <Link to="/delivery" className='nav__link'>Доставка и самовывоз</Link>
                <Link to="/payment" className='nav__link'>Оплата</Link>
                <Link to="/return" className='nav__link'>Возврат</Link>
                <Link to="/contacts" className='nav__link'>Контакты</Link>
            </div>
            <div className='telephone__container'>
                <Telephone />
            </div>
        </nav>
    )
}

