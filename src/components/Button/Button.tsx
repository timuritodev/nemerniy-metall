import './Button.css';

export const Button = ({ title }: { title: string }) => {
    return (
        <section className='button__container'>
            <button className={`button ${title === 'Оставить заявку' ? 'button_add' : ''}`}>{title}</button>
        </section>
    )
}

