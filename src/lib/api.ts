export const HOME_URL = 'http://api.citybik.es'

export const fetcher = async (url: string) => {
    const res = await fetch(HOME_URL + url)
    const data = await res.json()
    return data
}

export const SWRoptions = {
    fetcher,
}