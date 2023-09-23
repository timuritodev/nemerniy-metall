import './Like.css';
import { useAppDispatch } from '../../services/typeHooks';
import { updateFavorite } from '../../services/redux/slices/cards/cards';
import { updateFavoriteItem } from '../../services/redux/slices/items/items';
import { useLocation } from 'react-router';
import heart from '../../images/heart-card.png';
import heart_clicked from '../../images/heart-card-clicked.png';

export const Like = ({ data }: { data: any }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const id = location.pathname === '/' ? data.id : data.itemId;
  const title = data.title;

  const cardName = data.title; 

  const favoriteCardsJson = localStorage.getItem('favoriteCards');
  const favoriteCardsNamesJson = localStorage.getItem('favoriteCardsNames');

  const favoriteCards = favoriteCardsJson ? JSON.parse(favoriteCardsJson) : [];
  const favoriteCardsNames = favoriteCardsNamesJson ? JSON.parse(favoriteCardsNamesJson) : [];

  const isFavorite = favoriteCardsNames.includes(title);

  const handleClickFavorite = () => {
    const newIsFavorite = !isFavorite;

    if (location.pathname === '/') {
      dispatch(updateFavorite({ favorite: newIsFavorite, id }));
    } else {
      dispatch(updateFavoriteItem({ favorite: newIsFavorite, id }));
    }

    if (newIsFavorite) {
      favoriteCards.push(id);
      favoriteCardsNames.push(cardName);
    } else {
      favoriteCards.splice(favoriteCards.indexOf(id), 1);
      const indexToRemove = favoriteCards.indexOf(id);
            if (indexToRemove !== -1) {
              favoriteCards.splice(indexToRemove, 1);
              favoriteCardsNames.splice(indexToRemove, 1);
            }
    }

    localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards));
    localStorage.setItem('favoriteCardsNames', JSON.stringify(favoriteCardsNames)); 

  };

  const typesImg = isFavorite ? heart_clicked : heart;

  return (
    <img className='card__heart' src={typesImg} alt='heart' onClick={handleClickFavorite} />
  );
};
