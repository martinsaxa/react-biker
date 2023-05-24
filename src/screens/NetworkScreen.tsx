import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Headline, Text } from "react-native-paper";
import { NetworkProps } from ".";
import { useNetwork } from "../hooks/api";
import MapView, { Marker } from "react-native-maps";

export default function NetworkScreen({ route }: NetworkProps) {
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
                    />
                ))}
            </MapView>
            <View style={styles.info}>
                <Headline>{network.location.city}</Headline>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    info: {
        flex: 2,
    }
})