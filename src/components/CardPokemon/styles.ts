
import { StyleSheet } from "react-native";
import lightTheme from "../../theme/lightTheme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 120,
        justifyContent: "space-between",
        alignItems: "center",
        // paddingHorizontal: 20,
        paddingLeft: 20,
        borderRadius: 8,
        flexDirection: "row",
        marginBottom: 30,
    },

    namePokemon: {
        fontSize: 22,
        color: lightTheme.colors.textHighlight,
        fontWeight: "bold"
    },

    atributes: {
        flexDirection: "row",
        gap: 8
    },

    tagAtributes: {
        // backgroundColor: "green",
        color: lightTheme.colors.textHighlight,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginTop: 20,
        borderRadius: 4
    },

    containerImage: {
        position: "relative",
        width: 130,
        height: 120,
    },

    imagePokemon: {
        width: 120,
        height: 120,
        top: -30,
        position: "absolute"
    },

    shiffterLoading: {
        backgroundColor: "#34393D",
        color: lightTheme.colors.textHighlight,
        paddingHorizontal: 8,
        paddingVertical: 4,
    }
})