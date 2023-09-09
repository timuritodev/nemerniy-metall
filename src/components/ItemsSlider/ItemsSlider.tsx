import './ItemsSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick-arrow.css'; 
import { FC } from 'react';
import { ISlider } from '../../types/Slider.types';
import { Item } from '../Item/Item';
import { CustomNextArrow, CustomPrevArrow } from '../Arrows/Arrows';

export const ItemsSlider: FC<ISlider> = ({ title, items, id }) => {
    const slidesToShow = items.length > 4 ? 4 : items.length;
    const slidesToScroll = slidesToShow;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        arrows: true,
        nextArrow: <CustomNextArrow />, 
        prevArrow: <CustomPrevArrow />,
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
