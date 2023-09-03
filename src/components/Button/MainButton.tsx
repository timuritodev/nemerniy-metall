import { useState } from 'react';
import './Button.css';
import PopupForm from '../PopupForm/PopupForm';

export const MainButton = ({ title }: { title: string }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const switchPopupTrailer = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    return (
        <div className='main-button__container'>
            <button onClick={switchPopupTrailer} className={`button ${title === 'Оставить заявку' ? 'button_add' : ''}`}>{title}</button>
            <PopupForm isPopupOpen={isPopupOpen} switchPopupTrailer={switchPopupTrailer} />
        </div>
    )
}

