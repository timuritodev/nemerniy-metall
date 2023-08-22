import './SlickSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';
import { ImgCard } from '../ImgCard/ImgCard';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { IImage } from '../../types/Image.types';
import { useEffect, useState } from 'react';
import { getImagesApi } from '../../services/redux/slices/images/images';


export const SlickSlider: FC = () => {
    const dispatch = useAppDispatch();
	const img = useAppSelector((state) => state.image.images);
	const [data, setData] = useState<IImage[]>(img);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,

	};

	useEffect(() => {
		dispatch(getImagesApi());
	}, []);

	useEffect(() => {
		setData(img);
	}, []);

    console.log(img)
    return (
        <div className="slick-slider_container">
            <Slider {...settings} className="slick-slider">
                {data.map((item) => (
                    <ImgCard pic={item.image} />
                ))}
            </Slider>
        </div>
    );
};
