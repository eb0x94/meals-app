import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { useContext, useLayoutEffect } from "react";

import { MEALS } from "../data/dummyData";
import IconButton from "../components/IconButton";
// import { FavouritesContext } from "../store/context/favourites-context";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";

const MealDetailScreen = ({ route, navigation }) => {
    // const favouriteMealsCtx = useContext(FavouritesContext);
    const favouriteMealsIDs = useSelector((state) => state.favouriteMeals.ids);
    const dispatch = useDispatch();

    let mealID = route.params.mealID;

    let selectedMeal = MEALS.find((meal) => {
        return meal.id === mealID;
    });

    // let isMealFavourite = favouriteMealsCtx.ids.includes(mealID);
    let isMealFavourite = favouriteMealsIDs.includes(mealID);

    let changeFavouriteStatusHandler = () => {
        if (isMealFavourite) {
            // favouriteMealsCtx.removeFavourite(mealID);
            dispatch(removeFavourite({ id: mealID }));
        } else {
            // favouriteMealsCtx.addFavourite(mealID);
            dispatch(addFavourite({ id: mealID }));
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={isMealFavourite ? "star" : "star-outline"}
                        iconColor="white"
                        onPress={changeFavouriteStatusHandler}
                    />
                );
            },
        });
    }, [navigation, changeFavouriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                mealDuration={selectedMeal.duration}
                mealComplexity={selectedMeal.complexity}
                mealAffordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.outerListContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 28,
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white",
    },
    listContainer: {
        width: "80%",
    },
    outerListContainer: {
        alignItems: "center",
    },
});

export default MealDetailScreen;
