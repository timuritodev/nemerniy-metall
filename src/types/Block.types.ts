export interface IBlock {
	id: number;
	title: string;
    image: string;
}

export interface IBlockState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	blocks: Array<IBlock>;
}

export interface IBlockProps {
	data: IBlock[];
}
