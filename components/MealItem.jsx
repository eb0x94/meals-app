import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    Platform,
} from "react-native";

const MealItem = ({
    title,
    imageUrl,
    mealDuration,
    mealComplexity,
    mealAffordability,
}) => {
    return (
        <View style={styles.mealItemContainter}>
            <Pressable
                style={({ pressed }) =>
                    pressed ? styles.iosBottonPressed : null
                }
                android_ripple={{ color: "#ccc" }}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{mealDuration}m</Text>
                        <Text style={styles.detailItem}>
                            {mealComplexity.toUpperCase()}
                        </Text>
                        <Text style={styles.detailItem}>
                            {mealAffordability.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItemContainter: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 180,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    iosBottonPressed: {
        opacity: 0.8,
    },
});

export default MealItem;
