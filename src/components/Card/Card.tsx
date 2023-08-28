import './Card.css';
import { useAppDispatch } from '../../services/typeHooks';
import { useNavigate } from 'react-router';
import { getCardbyidApi } from '../../services/redux/slices/cardbyid/cardbyid';
import { BinButton } from '../BinButton/BinButton';
import { Like } from '../Like/Like';


export const Card = ({ data }: { data: any }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const id = data.id;

    const handleClickImage = () => {
        navigate('/cardpage');
        dispatch(getCardbyidApi(id))
        console.log(id)
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
