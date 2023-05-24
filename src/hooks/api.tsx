import useSWR from 'swr'

export const useNetworks = () => {
    return useSWR('/v2/networks')
}