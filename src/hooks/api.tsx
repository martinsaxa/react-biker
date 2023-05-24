import useSWR from 'swr'
import { NetworksRequest } from '../types/api'

export const useNetworks = () => {
    return useSWR<NetworksRequest>('/v2/networks')
}