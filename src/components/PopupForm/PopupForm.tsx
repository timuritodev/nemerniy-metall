/* eslint-disable @typescript-eslint/no-unused-vars */
import './PopupForm.css';
import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../services/typeHooks';
import { PopupFormProps } from '../../types/Popup.types';
import { sendEmailApi } from '../../services/redux/slices/email/email';
import { useAppSelector } from '../../services/typeHooks';

const PopupForm: FC<PopupFormProps> = ({ switchPopupTrailer }) => {
    const dispatch = useAppDispatch();

    const [fio, setFio] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [items, setItems] = useState('')
    
    const isPopupOpen = useAppSelector((state) => state.popup.popup);

    useEffect(() => {
        const cartItemNamesJson = localStorage.getItem('cartItemNames');
        if (cartItemNamesJson) {
            const cartItemNames = JSON.parse(cartItemNamesJson);
            const joinedMessage = cartItemNames.join('\n');
            setItems(joinedMessage);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        switchPopupTrailer();
        const formData = {
            fio,
            telephone,
            email,
            message,
            items,
        };

        dispatch(sendEmailApi(formData));

        setFio('');
        setTelephone('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className={`popup-form ${isPopupOpen ? 'popup-form_opened' : ''}`}>
            <form onSubmit={handleSubmit} className='popup-form__container'>
                <h2 className='popup-form__title'>Обратная связь</h2>
                <input
                    type="text"
                    placeholder="ФИО"
                    value={fio}
                    onChange={(e) => setFio(e.target.value)}
                    maxLength={150}
                    className='input__field'
                />
                <input
                    type="tel"
                    placeholder="Номер телефона"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    // pattern="[+]7 [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}"
                    className='input__field'
                />
                <input
                    type="email"
                    placeholder="Почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='input__field'
                />
                <textarea
                    placeholder="Сообщений(максимум 520 символов)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={520}
                    className='textarea__field'
                />
                {items && (
                    <div className='popup-form__items'>
                        <h3 className='popup-form__items__title'>Выбранные товары:</h3>
                        <ul className='popup-form__items__list'>
                            {items.split('\n').map((item, index) => (
                                <li className="popup-form__items__lists" key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <button type="submit" className='popup-form__button'>Отправить</button>
                <button
                    className="popup-form__close"
                    type="button"
                    onClick={switchPopupTrailer}
                />
            </form>
        </div>
    );
};

export default PopupForm;
