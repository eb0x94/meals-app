import { StyleSheet, View, Text, Pressable, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({ pressed }) => [
                    styles.buttonContainer,
                    pressed ? styles.iosBottonPressed : null,
                ]}
                android_ripple={{ color: "#ccc" }}
                onPress={onPress}
            >
                <View
                    style={[styles.textContainer, { backgroundColor: color }]}
                >
                    <Text style={styles.titleStyle}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 5,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    buttonContainer: { flex: 1 },
    iosBottonPressed: {
        opacity: 0.80,
    },
    textContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    titleStyle: {
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default CategoryGridTile;
