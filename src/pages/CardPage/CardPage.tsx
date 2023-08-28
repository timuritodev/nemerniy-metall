import './CardPage.css';
import { useAppSelector } from '../../services/typeHooks';
import { BinButton } from '../../components/BinButton/BinButton';
import { Like } from '../../components/Like/Like';

export const CardPage = () => {
    const card = useAppSelector((state) => state.cardbyid.cardbyid)

    return (
        <section className='card-page'>
            <div className='card-page__container'>
                <img className='card-page__image' src={card.image} alt='pic' />
                <div className='card-page__text-container'>
                    <h2 className='card-page__title'>{card.title}</h2>
                    <p className='card-page__size'>{card.size}</p>
                </div>
                <div className='card-page__price-container'>
                    <p className='card-page__price'>{card.price}</p>
                    <BinButton data={card} />
                    <Like data={card} />
                </div>
            </div>
        </section>
    )
}

