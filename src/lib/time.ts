import { getLocales } from 'expo-localization'

export const formatTime = (time?: number) => {
  if (!time) return 'Unknown'
  const [locales] = getLocales()
  const { languageTag } = locales

  const date = new Date(time * 1000)
  const formattedDate = new Intl.DateTimeFormat(languageTag, {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date)
  return formattedDate
}
