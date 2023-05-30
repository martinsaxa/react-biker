import { Linking, View } from 'react-native'
import { Headline, Text } from 'react-native-paper'
import { global } from '../lib/styles'

export default function AboutScreen() {
  return (
    <View style={global.center}>
      <Headline>React Biker</Headline>
      <Text>Created by Martin Saxa</Text>
      <Text>
        Data from{' '}
        <Text
          onPress={() => Linking.openURL('https://citybik.es/')}
          style={global.link}
        >
          https://citybik.es/
        </Text>
      </Text>
    </View>
  )
}
