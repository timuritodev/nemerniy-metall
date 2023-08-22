import './Block.css';
import { IBlock } from '../../types/Block.types';

export const Block = ({ data }: { data: IBlock }) => {

    return (
        <section className='block'>
            <h2 className='block__title'>{data.title}</h2>
            <img className='block__img' src={data.image} alt={data.image} />
        </section>
    )
}

