import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { FC, useEffect, useState } from 'react';
import pic from "../../images/logoza.ru-PhotoRoom 1.svg";
import search from "../../images/search.svg";
import heart from "../../images/hearts.png"
import cart from "../../images/cart.png"
import Search from '../Search/Search';
import { useAppSelector } from '../../services/typeHooks';

export const Header: FC = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.value;
        setValues(value);
    };

    const [isOpenSearch, setIsOpenSearch] = useState(false);

	const isPopupOpen = useAppSelector((state) => state.popup.popup);

    useEffect(() => {
        if (values.length > 0) {
            setIsOpenSearch(true);
        }
        if (values.length < 1) {
            setIsOpenSearch(false);
        }
    }, [values]);

    const setSearchClose = () => {
        setIsOpenSearch(false);
    };

    const handleClickFav = () => {
        navigate('/favorites')
    };

    const handleClickBin = () => {
        navigate('/bin')
    };

    const handleClickLogo = () => {
        navigate('/');
    }
    return (
        <header className={`header ${isPopupOpen ? 'header-hidden' : ''}`}>
            <img className='header__logo' src={pic} alt={pic} onClick={handleClickLogo} />
            <div className="header__container">
                <form className="header__search">
                    <input
                        className="header__search-input"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Поиск по продукции"
                        onChange={handleChange}
                        // onBlur={setSearchClose}
                        value={values}
                        autoComplete='off'
                    />
                    <Link to="/search-result" className="header__search-button">
                        <img
                            className="header__search-button_search"
                            src={search}
                            alt="Кнопка поиска"
                        />
                    </Link>
                    <Search
                        isOpenSearch={isOpenSearch}
                        isClose={setSearchClose}
                        values={values}
                    />
                </form>
            </div>
            <div className='button__container'>
                <img className='header__button_img' src={heart} alt={heart} />
                <button className='header__button' onClick={handleClickFav}>Избранное</button>
                <img className='header__button_img' src={cart} alt={cart} />
                <button className='header__button' onClick={handleClickBin}>Корзина</button>
            </div>
        </header>
    )
}

