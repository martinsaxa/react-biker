import useSWRImmutable from 'swr/immutable'
import { NetworksRequest } from '../types/api'

export const useNetworks = () => {
    return useSWRImmutable<NetworksRequest>('/v2/networks')
}

export const useNetwork = (id: string) => {
    const { data, ...rest } = useNetworks()
    if (data) {
        const network = data.networks.find((item) => item.id === id)
        return {
            data: network,
            ...rest
        }
    }
    return {data, ...rest}
}