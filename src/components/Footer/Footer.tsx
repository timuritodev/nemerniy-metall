import { Button } from '../Button/Button';
import './Footer.css';
import { FC } from 'react';
import pic from "../../images/obezyanyi-huliganyi-hrame-uluvatu-3.jpg";

export const Footer: FC = () => {
    return (
        <footer className='footer'>
            <img className='header__logo' src={pic} alt={pic} />
            <div className='footer__container'>
                <Button title={'Обратная связь'} />
                <p className='footer__text'>+7-(917)-874-88-05</p>
            </div>
        </footer>
    )
}

