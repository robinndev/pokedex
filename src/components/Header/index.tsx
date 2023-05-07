import { View } from "react-native"
import { styles } from "./styles"

import { Ionicons } from '@expo/vector-icons';

export const Header = () => {
    return(
        <View style={styles.container}>
            <Ionicons name="menu" size={32} color="white" />
        </View>
    )
}