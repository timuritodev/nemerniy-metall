import './ItemPage.css';
import { useAppSelector } from '../../services/typeHooks';
import { ItemsSlider } from '../../components/ItemsSlider/ItemsSlider';
import { BinButton } from '../../components/BinButton/BinButton';
import { Like } from '../../components/Like/Like';

export const ItemPage = () => {
    const item = useAppSelector((state) => state.itembyid.itembyid)
    const balka = useAppSelector((state) => state.item.items[0])
    const ugol = useAppSelector((state) => state.item.items[1])
    const shveller = useAppSelector((state) => state.item.items[2])
    const tube = useAppSelector((state) => state.item.items[3])

    const items =
        item.title.startsWith("Балка")
            ? balka
            : item.title.startsWith("Угол")
                ? ugol
                : item.title.startsWith("Швеллер")
                    ? shveller
                    : item.title.startsWith("Труб")
                        ? tube
                        : balka

return (
        <section className='item-page'>
            <div className='item-page__container'>
                <img className='item-page__image' src={item.image} alt='pic' />
                <div className='item-page__text-container'>
                    <h2 className='item-page__title'>{item.title}</h2>
                    <p className='item-page__size'>{item.size}</p>
                    <p className='item-page__quantity'>{item.quantity}</p>
                </div>
                <div className='item-page__price-container'>
                    <p className='item-page__price'>{item.price}</p>
                    <BinButton data={item} />
                    <Like data={item} />
                </div>
            </div>
            <ItemsSlider title={'ada'} items={items.data} id={items.id} />
        </section>
    )
}

