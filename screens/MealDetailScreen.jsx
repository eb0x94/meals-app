import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummyData";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
    let mealID = route.params.mealID;

    let selectedMeal = MEALS.find((meal) => {
        return meal.id === mealID;
    });

    let headerButtonPressHandler = () => {
        console.log("pressed!");
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon="star"
                        iconColor="white"
                        onPress={headerButtonPressHandler}
                    />
                );
            },
        });
    }, [navigation, headerButtonPressHandler]);

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
