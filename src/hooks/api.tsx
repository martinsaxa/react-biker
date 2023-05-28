import { useState } from 'react'
import useSWRImmutable from 'swr/immutable'
import useSWR from 'swr'
import { NetworksRequest } from '../types/api/networks'
import { NetworkRequest } from '../types/api/network'
import { sortNetworks } from '../lib/networks'

export const useNetworks = () => {
    const networks = useSWRImmutable<NetworksRequest>('/v2/networks')
    const [searchQuery, setSearchQuery] = useState('')
    if (!networks.data) return {
        searchQuery, setSearchQuery, ...networks
    }

    let newNetworks = networks.data.networks.sort(sortNetworks)
    newNetworks = newNetworks.filter((network) => network.location.city.toLowerCase().startsWith(searchQuery.toLowerCase()))

    return {
        ...networks,
        searchQuery,
        setSearchQuery,
        data: {
            networks: newNetworks,
        },
    }
}

export const useNetwork = (id: string) => {
    return useSWR<NetworkRequest>('/v2/networks/' + id)
}
