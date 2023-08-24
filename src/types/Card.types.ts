export interface ICard {
	id: number;
	title: string;
    image: string;
    size: string;
    price: string
}

export interface ICardState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	cards: Array<ICard>;
}

export interface ICardProps {
	data: ICard[];
}