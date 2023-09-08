import './Item.css';
import { useAppDispatch } from '../../services/typeHooks';
import { useNavigate } from 'react-router';
// import { BinButton } from '../BinButton/BinButton';
// import { Like } from '../Like/Like';
import { getItembyidApi } from '../../services/redux/slices/itembyid/itembyid';
import { IItembyid } from '../../types/Items.types';
import { LikeItem } from '../LikeItem/LikeItem';
import { BinButtonItem } from '../BinButtonItem/BinButtonItem';


export const Item = ({ data, id }: { data: IItembyid, id: number }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClickImage = () => {
        navigate('/item-page');
        dispatch(getItembyidApi({ id: id, itemId: data.itemId }));
    };

    return (
        <section className='item'>
            <img className='item__image' src={data.image} alt={data.image} onClick={handleClickImage} />
            <LikeItem data={data} />
            <div className='item__container'>
                <div className='item__text-container'>
                    <h2 className='item__title'>{data.title}</h2>
                    {/* <p className='item__size'>{data.size}</p> */}
                </div>
                <div className='item__price_container'>
                    <p className='item__price'>{data.price}</p>
                    <BinButtonItem data={data} />
                </div>
            </div>
        </section>
    )
}
