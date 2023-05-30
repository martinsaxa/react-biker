import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Surface, Text } from 'react-native-paper'

interface Props {
  heading: string
  value: string | number
  onPress?: () => void
}

export default function InfoSurface({ heading, value, onPress }: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.main}>
      <Surface style={styles.surface}>
        <Text style={styles.heading}>{heading}</Text>
        <Text>{value}</Text>
      </Surface>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  surface: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
    fontSize: 18,
  },
  heading: {
    fontWeight: 'bold',
  },
})
