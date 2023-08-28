import './BinButton.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { updateBin } from '../../services/redux/slices/cards/cards';

export const BinButton = ({ data }: { data: any }) => {
    const dispatch = useAppDispatch();
    const id = data.id;

    const cardsBin = useAppSelector(
        (state) => state.card.cards.find((card) => card.id === id)?.is_bin
    );

    const handleClickBin = () => {
        dispatch(updateBin({ bin: !cardsBin, id }));
    };

    const typesText = data.is_bin ? '-' : 'В корзину';

    return (
        <button className='card__button' onClick={handleClickBin}>{typesText}</button>
    )
}