import { MEALS, CATEGORIES } from "../data/dummyData";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

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

    return <MealsList passedItems={displayedMeals} />;
};

export default MealsOverviewScreen;
