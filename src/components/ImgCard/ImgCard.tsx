import { IImage } from '../../types/Image.types';
import { Button } from '../Button/Button';
import './ImgCard.css';

// export const ImgCard = ({ data }: { data: IImage }) => {
//     return (
//         <section className='img'>
//             <h2 className='img__title'>{data.title}</h2>
//             <p className='img__text'>{data.text}</p>
//             <img className='img__image' src={data.image} alt={data.image} />
//         </section>
//     )
// }

export const ImgCard = ({ data }: { data: IImage }) => {
    return (
        <section className='img'>
            <div className='img__overlay'>
                <div>
                    <h2 className='img__title'>{data.title}</h2>
                    <p className='img__text'>{data.text}</p>
                </div>
                <Button title={'Оставить заявку'} />
            </div>
            {/* <img className='img__image' src={data.image} alt={data.image} /> */}
        </section>
    )
}
