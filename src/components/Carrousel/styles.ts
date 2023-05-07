import { Dimensions, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    mainContainer: {
        height: 200,
        width: Dimensions.get('window').width * 0.9,
        borderRadius: 12,
        backgroundColor: "red",
    },

    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: 12,
    },

    background: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    container: {
    },

    header: {
        color: "white", 
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal: 20


    },
    body: {
        color: "white", 
        fontSize: 14,
        marginTop: 12,
        paddingHorizontal: 20
    }
})