import { BASE_URL } from '../api/constant';
import axios, { type AxiosError } from 'axios'

export const apiRequest = async (url?: string, method = 'GET', body?: object, params?: {}) => {
    try {
        const { data } = await axios({
            method,
            url: `${BASE_URL}/${url}`,
            data: body,
            params
        })
        return data
    } catch (e: unknown) {
        const error = e as AxiosError
        throw new Error(error?.message || 'Something went wrong')
    }
}