export interface IData {
    fio: string;
    telephone: string;
	email: string;
    message: string;
}

export interface IEmailState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
    email: string;
}