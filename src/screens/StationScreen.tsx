import { StyleSheet, View } from 'react-native'
import { Surface, Text } from 'react-native-paper'
import { StationProps } from '.'
import MapView, { Marker } from 'react-native-maps'
import InfoSurface from '../components/InfoSurface'
import { useMemo } from 'react'
import { formatTime } from '../lib/time'

export default function StationScreen({ route }: StationProps) {
  const { latitude, longitude, empty_slots, free_bikes, extra } =
    route.params.station

  const date = useMemo(
    () => formatTime(extra.last_updated),
    [extra.last_updated]
  )

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
        />
      </MapView>
      <View style={styles.info}>
        <View style={styles.row}>
          <InfoSurface heading='Empty Slots' value={empty_slots} />
          <InfoSurface heading='Free Bikes' value={free_bikes} />
        </View>
        <View style={styles.row}>
          <InfoSurface heading='Last Updated' value={date} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  info: {
    flex: 1,
    rowGap: 10,
    margin: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 10,
  },
})
