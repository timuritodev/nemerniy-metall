export interface ICardbyid {
	id: number;
	title: string;
    image: string;
    size: string;
    price: string;
    is_favorite?: boolean;
    is_bin?: boolean;
}

export interface ICardbyidState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	cardbyid: ICardbyid;
}
