import './ItemsSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';
import { ISlider } from '../../types/Slider.types';
import { Item } from '../Item/Item';

export const ItemsSlider: FC<ISlider> = ({ title, items, id }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 0,
        arrows: true,
    };

    return (
        <div className="item-slider__container">
            <h1 className="item-slider__title">{title}</h1>
            <Slider {...settings} className="item-slider">
                {items.map((item) => (
                    <Item key={item.itemId} data={item} id={id} />
                ))}
            </Slider>
        </div>
    );
};
