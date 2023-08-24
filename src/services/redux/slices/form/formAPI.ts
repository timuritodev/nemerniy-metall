const API_URL = '';

const checkRes = (res: Response) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(res);
    }
};

const postData = (url: string, data?: any) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        ...(!!data && { body: JSON.stringify(data) }),
    }).then((res) => checkRes(res));
};

export const getSubmitForm = (data: any): Promise<Response> => {
    return postData(`${API_URL}/signin`, data);
}