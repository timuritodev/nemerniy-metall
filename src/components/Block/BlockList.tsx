import './Block.css';
import { IBlockProps } from '../../types/Block.types';
import { Block } from './Block';

export const BlockList = ({ data } : IBlockProps) => {

    return (
        <section className='blocklist'>
            {data.map((item) => <Block key={item.id} data={item} />)}
        </section>
    )
}

