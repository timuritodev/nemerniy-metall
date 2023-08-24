import './Telephone.css';
import { FC } from 'react';
import telephone from "../../images/telephone.png";

export const Telephone: FC = () => {
    return (
        <section className='telephone'>
            <img className='telephone__img' src={telephone} alt={telephone} />
            <p className='telephone__text'>+7-(917)-874-88-05</p>
        </section>
    )
}

