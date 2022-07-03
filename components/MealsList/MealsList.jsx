import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "../MealItem";

const MealsList = ({passedItems}) => {
    let renderMealItem = (itemData) => {
        let parsedItem = itemData.item;
        let mealItemProps = {
            id: parsedItem.id,
            title: parsedItem.title,
            imageUrl: parsedItem.imageUrl,
            mealDuration: parsedItem.duration,
            mealComplexity: parsedItem.complexity,
            mealAffordability: parsedItem.affordability,
        };
        return <MealItem {...mealItemProps} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={passedItems}
                renderItem={renderMealItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default MealsList;
