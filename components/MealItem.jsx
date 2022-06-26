import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({
    id,
    title,
    imageUrl,
    mealDuration,
    mealComplexity,
    mealAffordability,
}) => {
    let navigation = useNavigation();

    let onDetailItemPressHandler = () => {
        navigation.navigate("MealDetail", {
            mealID: id,
        });
    };

    return (
        <View style={styles.mealItemContainter}>
            <Pressable
                onPress={onDetailItemPressHandler}
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
                    <MealDetails
                        mealDuration={mealDuration}
                        mealComplexity={mealComplexity}
                        mealAffordability={mealAffordability}
                    />
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
    iosBottonPressed: {
        opacity: 0.8,
    },
});

export default MealItem;
