import { FlashList } from "@shopify/flash-list";
import { Divider, List } from "react-native-paper";
import { Network } from "../types/api/networks";

interface Props {
    networks: Network[]
    onItemPress: (id: string) => void
}

export default function NetworksList({ networks, onItemPress }: Props) {
    return (
        <FlashList
            data={networks}
            renderItem={({ item }) => <List.Item title={item.location.city} onPress={() => onItemPress(item.id)} />}
            estimatedItemSize={49}
            ItemSeparatorComponent={Divider}
        />
    )
}