import { Network } from '../types/api/networks'

export const sortNetworks = (a: Network, b: Network): number => {
  if (a.location.city < b.location.city) return -1
  if (a.location.city > b.location.city) return 1
  return 0
}
