export interface ICard {
    _id?: string,
	id: number;
	title: string;
    image: string;
    size: string;
    price: string;
    quantity: number;
    is_favorite?: boolean;
    is_bin?: boolean;
}

export interface ICardState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	cards: Array<ICard>;
    cardsFavorite: Array<ICard>;
    cardsBin: Array<ICard>;
}

export interface ICardProps {
	data: ICard[];
}