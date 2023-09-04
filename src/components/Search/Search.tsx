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

    const filteredCards = cards.filter((card) =>
        card.title.toLowerCase().includes(values.toLowerCase())
    );

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
            className={`search ${isOpenSearch && 'search_open'}`}
        >
            <div className="search__cards" id="search__cards">
                {!isFiltredCards ? (
                    filteredCards?.slice(0, 5).map((card: ICard) => (
                        <div
                            key={card.id}
                            // onClick={() => handleImgClick(card.id, user.token)}
                            className="search__card"
                        >
                            <img
                                className="search__card-poster"
                                src={card.image}
                                alt=''
                            />
                            <article className="search__card-desc">
                                <p className="search__card-name">{card.title}</p>
                                <div className="search__card-info">
                                    <p className="search__card-year">{card.price}</p>
                                    {/* 
                                    <div className="search__card-rating">
                                        <RatedElement
                                            imdb={card.rating.rate_imdb}
                                            kinopoisk={card.rating.rate_kinopoisk}
                                            isSearch={true}
                                        />
                                    </div>
                                    <p className="search__card-genres">
                                        {card.genres.join(', ')}
                                    </p>
                                    <p className="search__card-year"> • {card.year}</p>*/}
                                </div>
                            </article>
                        </div>
                    ))
                ) : (
                    <p className="search__card-none">
                        По вашему запросу ничего не найдено
                    </p>
                )}
            </div>
        </section>
    );
};

export default Search;
