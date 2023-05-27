import useSWRImmutable from 'swr/immutable'
import useSWR from 'swr'
import { NetworksRequest } from '../types/api/networks'
import { NetworkRequest } from '../types/api/network'

export const useNetworks = () => {
    return useSWRImmutable<NetworksRequest>('/v2/networks')
}

export const useNetwork = (id: string) => {
    return useSWR<NetworkRequest>('/v2/networks/' + id)
}
