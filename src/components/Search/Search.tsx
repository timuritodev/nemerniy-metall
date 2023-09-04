/* eslint-disable react-hooks/exhaustive-deps */
import './Search.css';
import { useAppSelector } from '../../services/typeHooks';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/typeHooks';
import { getCardsApi } from '../../services/redux/slices/cards/cards';
import { ICard } from '../../types/Card.types';

const Search = ({
    isOpenSearch,
    values,
    isClose,
}: {
    isOpenSearch: boolean;
    values: string;
    isClose: () => void;
}) => {
    const dispatch = useAppDispatch();
    // const navigate = useNavigate();

    const cards = useAppSelector(
        (state) => state.card.cards
    );
    const [isFiltredCards, setIsFiltredCards] = useState(false);

    useEffect(() => {
        dispatch(getCardsApi());
    }, [values]);

    const filteredCards = cards;

    useEffect(() => {
        if (filteredCards?.length === 0) {
            setIsFiltredCards(true);
        } else {
            setIsFiltredCards(false);
        }
    }, [values]);

    // const handleImgClick = (filmId: number, token: string) => {
    //     if (user.token) {
    //         dispatch(getMoviebyidTokenApi({ filmId: filmId, token: token }));
    //     } else {
    //         dispatch(getMoviebyidApi(filmId));
    //     }
    //     navigate('/movie-page');
    //     isClose();
    //     window.scrollTo(0, 0);
    // };

    return (
        <section
            className={`searchGeneral ${isOpenSearch && 'searchGeneral_open'}`}
        >
            <div className="searchGeneral__films" id="searchGeneral__films">
                {!isFiltredCards ? (
                    filteredCards?.slice(0, 5).map((card: ICard) => (
                        <div
                            key={card.id}
                            // onClick={() => handleImgClick(card.id, user.token)}
                            className="searchGeneral__film"
                        >
                            <img
                                className="searchGeneral__film-poster"
                                src={card.image}
                                alt=''
                            />
                            <article className="searchGeneral__film-desc">
                                <p className="searchGeneral__film-name">{card.title}</p>
                                {/* <div className="searchGeneral__film-info">
                                    <div className="searchGeneral__film-rating">
                                        <RatedElement
                                            imdb={card.rating.rate_imdb}
                                            kinopoisk={card.rating.rate_kinopoisk}
                                            isSearch={true}
                                        />
                                    </div>
                                    <p className="searchGeneral__film-genres">
                                        {card.genres.join(', ')}
                                    </p>
                                    <p className="searchGeneral__film-year"> • {card.year}</p>
                                </div> */}
                            </article>
                        </div>
                    ))
                ) : (
                    <p className="searchGeneral__film-none">
                        По вашему запросу ничего не найдено
                    </p>
                )}
            </div>
        </section>
    );
};

export default Search;
