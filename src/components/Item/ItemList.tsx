import './Item';
import { Item } from './Item';
import { IItem, IItemProps, IItembyid } from '../../types/Items.types';

export const ItemList = ({ data } : IItemProps) => {

    return (
        <section className='cardlist'>
            {data.map((item) => <Item key={item.itemId} data={item} />)}
        </section>
    )
}

