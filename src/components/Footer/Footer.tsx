import { Button } from '../Button/Button';
import './Footer.css';
import { FC } from 'react';
import pic from "../../images/logoza.ru-PhotoRoom 1.svg";
import { Telephone } from '../Telephone/Telephone';

export const Footer: FC = () => {
    return (
        <footer className='footer'>
            <img className='header__logo' src={pic} alt={pic} />
            <div className='footer__container'>
                <Button title={'Обратная связь'} />
                <Telephone />
            </div>
        </footer>
    )
}

