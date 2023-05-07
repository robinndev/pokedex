import { TextInput } from "react-native"
import { styles } from "./styles"

export const InputSearch = (props) => {
    return (
        <TextInput onChangeText={props.onChangeText} style={styles.search} placeholder={'Please type here…'}/>
    )
}