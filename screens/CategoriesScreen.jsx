import { StyleSheet, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData.js";

const CategoriesScreen = ({ navigation }) => {
    let renderCategoryItem = (itemData) => {
        let pressHandler = () => {
            navigation.navigate("MealsOverview",{
                categoryId: itemData.item.id
            });
        };

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({});
export default CategoriesScreen;
