import './Card.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { updateBin, updateFavorite } from '../../services/redux/slices/cards/cards';
import heart from '../../images/heart-card.png';
import heart_clicked from '../../images/heart-card-clicked.png';


export const Card = ({ data }: { data: any }) => {

    const dispatch = useAppDispatch();
    const id = data.id;

    const cardsFav = useAppSelector(
        (state) => state.card.cards.find((card) => card.id === id)?.is_favorite
    );

    const cardsBin = useAppSelector(
        (state) => state.card.cards.find((card) => card.id === id)?.is_bin
    );


    const handleClickFavorite = () => {
        dispatch(updateFavorite({ favorite: !cardsFav, id }));
    };

    const handleClickWatch = () => {
        dispatch(updateBin({ bin: !cardsBin, id }));
    };

    const typesImg =
        cardsFav
            ? heart_clicked
            : heart

    return (
        <section className='card' onClick={handleClickFavorite}>
            <img className='card__image' src={data.image} alt={data.image} />
            <img className='card__heart' src={typesImg} alt={heart} />
            <div className='card__container'>
                <div className='card__text-container'>
                    <h2 className='card__title'>{data.title}</h2>
                    {/* <p className='card__size'>{data.size}</p> */}
                </div>
                <div className='card__price_container'>
                    <p className='card__price'>{data.price}</p>
                    <button className='card__button' onClick={handleClickWatch}>В корзину</button>
                </div>
            </div>
        </section>
    )
}
