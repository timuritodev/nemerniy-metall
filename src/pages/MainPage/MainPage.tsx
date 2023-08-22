import './MainPage.css';
import { FC } from 'react';
import pic from "../../images/obezyanyi-huliganyi-hrame-uluvatu-3.jpg";
import { SlickSlider } from '../../components/SlickSlider/SlickSlider';

export const MainPage: FC = () => {
    return (
        <section className='main'>
            <SlickSlider />
        </section>
    )
}

