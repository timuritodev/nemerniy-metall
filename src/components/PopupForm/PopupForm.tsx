/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/PopupForm.tsx
import React, { useState } from 'react';
import { getSubmitFormApi } from '../../services/redux/slices/form/form';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';

const PopupForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Perform validation here if needed
        const formData = {
            fullName,
            phoneNumber,
            email,
            message,
        };

        // dispatch(getSubmitFormApi(formData)); тут не знаю как правильно отправялть данные, оставил на потом

        // Clear form fields after submission
        setFullName('');
        setPhoneNumber('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="popup">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name (max 150 characters)"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    maxLength={150}
                />
                <input
                    type="tel"
                    placeholder="Phone Number (Russian format)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    pattern="[+]7 [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}"
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
