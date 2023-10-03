import { useMutation, useQuery } from '@tanstack/react-query'
import { apiRequest } from './configs/request'

// Function for fetching data using React Query's useQuery hook
export function useFetch<T>(url: string, queryKey: string, params?: {}, onSuccess?: (data: T) => void, refetchInterval?: number) {
    return useQuery({
        queryKey: [queryKey],
        queryFn: () => apiRequest(url, 'get', {}, params),
        retry: true,
        onSuccess,
        refetchInterval
    })
}

// Function for mutation operations using React Query's useMutation hook
export function useMutationQuery<T>(
    method = 'get',
    url?: string,
    onSuccess?: (data?: T) => void,
    onError?: (data?: string) => void,
) {

    return {
        mutate: useMutation({
            mutationFn: (body: { query : string}) => {
                // Perform a mutation using apiRequest
                return apiRequest(`${url}/${body.query}`, method, body, { get_posts : true })
            },
            onSuccess,
            onError,
        }),
    }
}