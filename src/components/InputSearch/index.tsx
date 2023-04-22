import { TextInput } from "react-native"
import { styles } from "./styles"

export const InputSearch = () => {
    return (
        <TextInput style={styles.search} placeholder={'Please type here…'}/>
    )
}