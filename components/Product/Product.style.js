import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
    container: {
        color: "red",
        backgroundColor: "#eee",
        margin: 10,
        borderRadius: 6,
        padding: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4
    },
    content:{
        width: (Dimensions.get('window').width / 2) - 40
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 14
    },
    price:{
        color: "#666",
        fontWeight: "bold",
    },
    stock:{
        color: "red",
        fontWeight: "bold",
        marginTop: 10,
    }
})