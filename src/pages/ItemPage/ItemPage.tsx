import './ItemPage.css';
import { useAppSelector } from '../../services/typeHooks';
import { BinButton2 } from '../../components/BinButton2/BinButton2';
import { Dislike } from '../../components/Dislike/Dislike';

export const ItemPage = () => {
    const item = useAppSelector((state) => state.itembyid.itembyid)

    return (
        <section className='item-page'>
            <div className='item-page__container'>
                <img className='item-page__image' src={item.image} alt='pic' />
                <div className='item-page__text-container'>
                    <h2 className='item-page__title'>{item.title}</h2>
                    <p className='item-page__size'>{item.size}</p>
                </div>
                <div className='item-page__price-container'>
                    <p className='item-page__price'>{item.price}</p>
                    <BinButton2 data={item} />
                    <Dislike data={item} />
                </div>
            </div>
        </section>
    )
}

