import './Card.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useLocation, useNavigate } from 'react-router';
import { getCardbyidApi } from '../../services/redux/slices/cardbyid/cardbyid';
import { BinButton } from '../BinButton/BinButton';
import { Like } from '../Like/Like';
import { getItembyidApi } from '../../services/redux/slices/itembyid/itembyid';


export const Card = ({ data }: { data: any }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const item_id = useAppSelector((state) => state.item.items[2].id)

    const id = data.id;
    const dd = data.itemId;

    const handleClickImage = () => {
        if (location.pathname === '/') {
            navigate('/cardpage');
            dispatch(getCardbyidApi(id))
        } else {
            navigate('/cardpage');
            dispatch(getItembyidApi({id: item_id, itemId: dd}));
        }
    };

    return (
        <section className='card'>
            <img className='card__image' src={data.image} alt={data.image} onClick={handleClickImage} />
            <Like data={data} />
            <div className='card__container'>
                <div className='card__text-container'>
                    <h2 className='card__title'>{data.title}</h2>
                    {/* <p className='card__size'>{data.size}</p> */}
                </div>
                <div className='card__price_container'>
                    <p className='card__price'>{data.price}</p>
                    <BinButton data={data} />
                </div>
            </div>
        </section>
    )
}
