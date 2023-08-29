import './Block.css';
import { IBlock } from '../../types/Block.types';
import { useNavigate } from 'react-router';

export const Block = ({ data }: { data: IBlock }) => {
    const navigate = useNavigate();

    const handleClickImage = () => {
        if (data.title === "Балка") {
            navigate('/balka-page');
        } else if (data.title === "Уголок") {
            navigate('/ugolok-page');
        }
    };

    return (
        <section className='block' onClick={handleClickImage}>
            <h2 className='block__title'>{data.title}</h2>
            <img className='block__img' src={data.image} alt={data.image} />
        </section>
    )
}

