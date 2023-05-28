import useSWRImmutable from 'swr/immutable'
import useSWR from 'swr'
import { NetworksRequest } from '../types/api/networks'
import { NetworkRequest } from '../types/api/network'
import { sortNetworks } from '../lib/networks'

export const useNetworks = () => {
    const networks = useSWRImmutable<NetworksRequest>('/v2/networks')
    if (!networks.data) return networks

    let newNetworks = networks.data.networks.sort(sortNetworks)

    return {
        ...networks,
        data: {
            networks: newNetworks,
        },
    }
}

export const useNetwork = (id: string) => {
    return useSWR<NetworkRequest>('/v2/networks/' + id)
}
