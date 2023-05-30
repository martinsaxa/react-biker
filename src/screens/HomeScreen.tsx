import { StyleSheet, View } from 'react-native'
import { ActivityIndicator, Searchbar, Text } from 'react-native-paper'
import { HomeProps } from '.'
import NetworksList from '../components/NetworksList'
import { useNetworks } from '../hooks/api'
import { global } from '../lib/styles'

export default function HomeScreen({ navigation }: HomeProps) {
  const { data, isLoading, searchQuery, setSearchQuery } = useNetworks()

  const navigateToDetailsScreen = (id: string) =>
    navigation.navigate('Network', { id })

  if (isLoading) {
    return (
      <View style={global.center}>
        <ActivityIndicator size='large' />
      </View>
    )
  }
  if (!data) {
    return (
      <View style={global.center}>
        <Text>No Data</Text>
      </View>
    )
  }

  const networks = data.networks.filter((network) =>
    network.location.city.toLowerCase().startsWith(searchQuery.toLowerCase())
  )

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query)}
        style={styles.searchBar}
      />
      <NetworksList networks={networks} onItemPress={navigateToDetailsScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: 4,
    marginTop: 2,
  },
})
