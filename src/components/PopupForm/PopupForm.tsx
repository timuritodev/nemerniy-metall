/* eslint-disable @typescript-eslint/no-unused-vars */
import './PopupForm.css';
import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../services/typeHooks';
import { PopupFormProps } from '../../types/Popup.types';
import { sendEmailApi } from '../../services/redux/slices/email/email';

const PopupForm: FC<PopupFormProps> = ({ isPopupOpen, switchPopupTrailer }) => {
    const dispatch = useAppDispatch();

    const [fio, setFio] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Perform validation here if needed
        const formData = {
            fio,
            telephone,
            email,
            message,
        };

        dispatch(sendEmailApi(formData)); // тут не знаю как правильно отправялть данные, оставил на потом

        // Clear form fields after submission
        setFio('');
        setTelephone('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className={`popup-form ${isPopupOpen ? 'popup-form_opened' : ''}`}>
            <form onSubmit={handleSubmit} className='popup-form__container'>
                <input
                    type="text"
                    placeholder="Full Name (max 150 characters)"
                    value={fio}
                    onChange={(e) => setFio(e.target.value)}
                    maxLength={150}
                />
                <input
                    type="tel"
                    placeholder="Phone Number (Russian format)"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    // pattern="[+]7 [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Message (max 420 characters)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={420}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PopupForm;
