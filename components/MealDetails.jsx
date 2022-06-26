import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({
    mealDuration,
    mealComplexity,
    mealAffordability,
    style,
    textStyle,
}) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{mealDuration}m</Text>
            <Text style={[styles.detailItem, textStyle]}>
                {mealComplexity.toUpperCase()}
            </Text>
            <Text style={[styles.detailItem, textStyle]}>
                {mealAffordability.toUpperCase()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default MealDetails;
