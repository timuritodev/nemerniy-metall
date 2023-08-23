import { Link } from 'react-router-dom';
import './Header.css';
import { FC } from 'react';
import pic from "../../images/obezyanyi-huliganyi-hrame-uluvatu-3.jpg";
import search from "../../images/search.svg";

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
                <button className='header__button'>Избранное</button>
                <button className='header__button'>Корзина</button>
            </div>
        </header>
    )
}
