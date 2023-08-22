import './ImgCard.css';

export const ImgCard = ({ pic }: { pic: string }) => {
    return (
        <img className='img' src={pic} alt={pic} />
    )
}

