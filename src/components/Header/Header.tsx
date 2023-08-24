import { Link } from 'react-router-dom';
import './Header.css';
import { FC } from 'react';
import pic from "../../images/logoza.ru-PhotoRoom 1.svg";
import search from "../../images/search.svg";
import heart from "../../images/hearts.png"
import cart from "../../images/cart.png"

export const Header: FC = () => {
    return (
        <header className='header'>
            <img className='header__logo' src={pic} alt={pic} />
            <div className="header__container">
                <form className="header__search">
                    <input
                        className="header__search-input"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Поиск по продукции"
                        // onChange={handleChange}
                        // onBlur={setSearchClose}
                        autoComplete='off'
                    />
                    <Link to="/search-result" className="header__search-button">
                        <img
                            className="header__search-button_search"
                            src={search}
                            alt="Кнопка поиска"
                        />
                    </Link>
                </form>
            </div>
            <div className='button__container'>
                <img className='header__button_img' src={heart} alt={heart} />
                <button className='header__button'>Избранное</button>
                <img className='header__button_img' src={cart} alt={cart} />
                <button className='header__button'>Корзина</button>
            </div>
        </header>
    )
}

