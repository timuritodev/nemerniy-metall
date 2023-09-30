/* eslint-disable react-hooks/exhaustive-deps */
import './SlickSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';
import { ImgCard } from '../ImgCard/ImgCard';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import { getImagesApi } from '../../services/redux/slices/images/images';
import { MainButton } from '../Button/MainButton';
import { Discount } from '../Discount/Discount';

export const SlickSlider: FC = () => {
	const dispatch = useAppDispatch();
	const img = useAppSelector((state) => state.image.images);

	const settings = {
		dots: true,
		infinite: true,
		speed: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true, // Устанавливаем fade в true для плавного переключения
	};

	useEffect(() => {
		dispatch(getImagesApi());
	}, []);

	return (
		<div className="slick-slider_container">
			<Slider {...settings} className="slick-slider">
				{img.map((item) => (
					<div key={item.id}>
						<ImgCard data={item} />
						{item.id === 2 ? <Discount num={5} /> : null}
					</div>
				))}
			</Slider>
			<MainButton title={'Оставить заявку'} />
		</div>
	);
};
