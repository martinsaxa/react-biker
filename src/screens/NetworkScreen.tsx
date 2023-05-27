import { Linking, StyleSheet, View } from "react-native";
import { ActivityIndicator, Headline, Modal, Surface, Text } from "react-native-paper";
import { NetworkProps } from ".";
import { useNetwork } from "../hooks/api";
import MapView, { Callout, Marker } from "react-native-maps";
import InfoSurface from "../components/InfoSurface";

export default function NetworkScreen({ route, navigation }: NetworkProps) {
    const { data } = useNetwork(route.params.id)

    if (!data) return <ActivityIndicator />

    const { network } = data

    return (
        <View style={{ flex: 1 }}>
            <MapView style={styles.map} initialRegion={{
                latitude: network.location.latitude,
                longitude: network.location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                {network.stations.map((station, index) => (
                    <Marker 
                        key={index}
                        coordinate={{
                            latitude: station.latitude,
                            longitude: station.longitude
                        }}
                    >
                        <Callout onPress={() => navigation.navigate('Station', { station })}>
                            <Text>{station.name}</Text>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            <View style={styles.info}>
                <View style={styles.row}>
                    <InfoSurface heading="E-Bikes" value={network.ebikes ? "Yes" : "No"} />
                    <InfoSurface heading="Provider" value={network.company ? network.company : "Unknown"} />
                </View>
                <View style={styles.row}>
                    <InfoSurface heading="Stations" value={network.stations.length} />
                    <InfoSurface heading="Source" value={ network.source ? 'Click' : 'Unknown' } onPress={network.source ? () => Linking.openURL(network.source as string) : undefined} />
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
    }
})