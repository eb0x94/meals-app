import { StyleSheet, View, Text } from "react-native";

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleStyle}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    subtitleStyle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitleContainer: {
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
    },
});

export default Subtitle;
