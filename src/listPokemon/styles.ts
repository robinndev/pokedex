import { StyleSheet } from "react-native";
import lightTheme from "../theme/lightTheme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: lightTheme.colors.background,
        paddingHorizontal: 20
    },

    containerText: {
        paddingTop: 32
    },

    title: {
        fontSize: 32,

    },

    describe: {
        color: lightTheme.colors.describe,
        fontSize: 16,
        marginTop: 16
    }
})


