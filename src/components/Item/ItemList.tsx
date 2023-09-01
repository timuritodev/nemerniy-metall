import './Item';
import { Item } from './Item';
import { IItem, IItemProps, IItembyid } from '../../types/Items.types';
import { FC } from 'react';

export const ItemList: FC<IItemProps> = ({ data, id }) => {
    return (
        <section className='cardlist'>
            {data.map((item) => <Item key={id} data={item} id={id}/>)}
        </section>
    )
}

