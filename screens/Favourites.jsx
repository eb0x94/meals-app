import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummyData";
import { StyleSheet, Text, View } from "react-native";

const Favourites = () => {
    const favouriteMealsCtx = useContext(FavouritesContext);
    let favouriteMeals = MEALS.filter((meal) =>
        favouriteMealsCtx.ids.includes(meal.id)
    );

    if (favouriteMeals.length === 0) {
        return (
            <View style={styles.noFavsContainer}>
                <Text style={styles.textStyle}>
                    You do not have any favourite meals.
                </Text>
            </View>
        );
    }

    return <MealsList passedItems={favouriteMeals} />;
};

const styles = StyleSheet.create({
    noFavsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
});

export default Favourites;
