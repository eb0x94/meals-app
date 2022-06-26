import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummyData";
import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
    let catId = route.params.categoryId;

    let displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    //useEffect alternative, but it makes the changes before or whilst the component is rendered.
    //useEffect invokes after the render of the components.
    useLayoutEffect(() => {
        let categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

  

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
                data={displayedMeals}
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

export default MealsOverviewScreen;
