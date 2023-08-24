import './Card.css';

export const Card = ({ data }: { data: any }) => {
    return (
        <section className='card'>
            <img className='card__image' src={data.image} alt={data.image} />
            <div className='card__container'>
                <div className='card__text-container'>
                    <h2 className='card__title'>{data.title}</h2>
                    {/* <p className='card__size'>{data.size}</p> */}
                </div>
                <div className='card__price_container'>
                    <p className='card__price'>{data.price}</p>
                    <button className='card__button'>В корзину</button>
                </div>
            </div>
        </section>
    )
}
