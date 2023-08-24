import './Card';
import { Card } from './Card';
import { ICardProps } from '../../types/Card.types';

export const CardList = ({ data } : ICardProps) => {

    return (
        <section className='cardlist'>
            {data.map((item) => <Card key={item.id} data={item} />)}
        </section>
    )
}

