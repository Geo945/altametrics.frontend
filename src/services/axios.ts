import axios from 'axios';
import QueryString from 'qs';

declare global {
    interface Window {
        Planerio: any;
    }
}

const axiosInstance = axios.create({
    paramsSerializer: {
        serialize: (params) => {
            return QueryString.stringify(params, { indices: false });
        },
    },
    baseURL: 'http://localhost:4000/'
});

const errorHandler = (error: any) => {
    return Promise.reject(error);
};

const requestHandler = async (request: any) => {
    try {
        // add headers
        return request;
    } catch (error) {
        throw new Error('Cannot add headers');
    }
};

axiosInstance.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

const get = async <T>(url: string, params?: any, headers?: any): Promise<T> => {
    const response = await axiosInstance.get(url, {
        params,
        headers,
    });
    return response.data;
};

const update = async <T>(url: string, data: any): Promise<T> => {
    const response = await axiosInstance.put(url, data);
    return response.data;
};

const patch = async <T>(url: string, data: any): Promise<T> => {
    const response = await axiosInstance.patch(url, data);
    return response.data;
};

const remove = async <T>(url: string, data?: any): Promise<T> => {
    const response = await axiosInstance.delete(url, data);
    return response.data;
};

const post = async <T>(url: string, data: any): Promise<T> => {
    const response = await axiosInstance.post(url, data);
    return response.data;
};

export { get, update, remove, post, patch };
export default axiosInstance;
