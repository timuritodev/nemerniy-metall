import './Dislike.css';
import { useAppDispatch } from '../../services/typeHooks';
import heart from '../../images/heart-card.png';
import heart_clicked from '../../images/heart-card-clicked.png';
import { updateFavoriteItem } from '../../services/redux/slices/items/items';

export const Dislike = ({ data }: { data: any }) => {
  const dispatch = useAppDispatch();
  const id = data.itemId;

  // Получаем массив избранных карточек из localStorage
  const favoriteCardsJson = localStorage.getItem('favoriteItems');
  
  // Проверяем, есть ли значение в localStorage
  const favoriteCards = favoriteCardsJson ? JSON.parse(favoriteCardsJson) : [];

  // Проверяем, есть ли текущая карточка в массиве избранных
  const isFavorite = favoriteCards.includes(id);

  const handleClickFavorite = () => {
    // Инвертируем статус избранного
    const newIsFavorite = !isFavorite;

    // Отправляем обновленное состояние на сервер или в хранилище Redux
    dispatch(updateFavoriteItem({ favorite: newIsFavorite, id }));

    // Обновляем массив избранных карточек в localStorage
    if (newIsFavorite) {
      favoriteCards.push(id);
    } else {
      favoriteCards.splice(favoriteCards.indexOf(id), 1);
    }

    localStorage.setItem('favoriteItems', JSON.stringify(favoriteCards));
  };

  const typesImg = isFavorite ? heart_clicked : heart;

  return (
    <img className='card__heart' src={typesImg} alt='heart' onClick={handleClickFavorite} />
  );
};
