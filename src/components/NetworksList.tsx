import { FlashList } from "@shopify/flash-list";
import { ActivityIndicator, Divider, List, Text } from "react-native-paper";
import { useNetworks } from "../hooks/api";
import { sortNetworks } from "../lib/networks";

interface Props {
    onItemPress: (id: string) => void
}

export default function NetworksList({ onItemPress }: Props) {
    const { data, isLoading } = useNetworks()
    
    if (isLoading) return <ActivityIndicator />
    if (!data) return <Text>No data</Text>

    const networks = data.networks.sort(sortNetworks)

    return (
        <FlashList
            data={networks}
            renderItem={({ item }) => <List.Item title={item.location.city} onPress={() => onItemPress(item.id)} />}
            estimatedItemSize={49}
            ItemSeparatorComponent={Divider}
        />
    )
}