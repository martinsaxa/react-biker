import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Headline, Text } from "react-native-paper";
import { NetworkProps } from ".";
import { useNetwork } from "../hooks/api";
import MapView, { Marker } from "react-native-maps";

export default function NetworkScreen({ route }: NetworkProps) {
    const { data } = useNetwork(route.params.id)

    if (!data) return <ActivityIndicator />

    return (
        <View style={{ flex: 1 }}>
            <MapView style={styles.map} initialRegion={{
                latitude: data.location.latitude,
                longitude: data.location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                <Marker coordinate={{
                    latitude: data.location.latitude,
                    longitude: data.location.longitude,
                }} />
            </MapView>
            <View style={styles.info}>
                <Headline>{data.location.city}</Headline>
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