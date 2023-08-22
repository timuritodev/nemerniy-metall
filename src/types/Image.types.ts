export interface IImage {
	id: number;
	title: string;
	text: string;
    image: string;
}

export interface IImageState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	images: Array<IImage>;
}
