import { FlashList } from "@shopify/flash-list";
import { ActivityIndicator, Divider, List } from "react-native-paper";
import { useNetworks } from "../hooks/api";
import { NetworksRequest } from "../types/api";

interface Props {
    onItemPress: (id: string) => void
}

export default function NetworksList({ onItemPress }: Props) {
    const { data, isLoading } = useNetworks()
    
    if (isLoading) return <ActivityIndicator />

    const { networks } = data as NetworksRequest

    return (
        <FlashList
            data={networks}
            renderItem={({ item }) => <List.Item title={item.location.city} onPress={() => onItemPress(item.id)} />}
            estimatedItemSize={49}
            ItemSeparatorComponent={Divider}
        />
    )
}