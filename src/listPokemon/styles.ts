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

    search: {
        width: "100%",
        borderWidth: 1,
        borderColor: lightTheme.colors.border,
        padding: 8,
        marginTop: 16,
        borderRadius: 4,
        marginBottom: 40,
        color: "black"
    },

    describe: {
        color: lightTheme.colors.describe,
        fontSize: 16,
        marginTop: 16
    }
})


