import './Like.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { updateFavorite } from '../../services/redux/slices/cards/cards';
import heart from '../../images/heart-card.png';
import heart_clicked from '../../images/heart-card-clicked.png';


export const Like = ({ data }: { data: any }) => {

    const dispatch = useAppDispatch();
    const id = data.id;

    const cardsFav = useAppSelector(
        (state) => state.card.cards.find((card) => card.id === id)?.is_favorite
    );

    const handleClickFavorite = () => {
        dispatch(updateFavorite({ favorite: !cardsFav, id }));
    };

    const typesImg = data.is_favorite ? heart_clicked : heart;

    return (
        <img className='card__heart' src={typesImg} alt={heart} onClick={handleClickFavorite} />
    )
}
