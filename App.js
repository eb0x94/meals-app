import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NavStack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <NavStack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: "#351401" },
                        headerTintColor: "white",
                        contentStyle: { backgroundColor: "#3f2f25" },
                    }}
                >
                    <NavStack.Screen
                        name="MealsCategories"
                        component={CategoriesScreen}
                        options={{
                            title: "All Categories",
                        }}
                    />
                    <NavStack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                        // options={({route, navigation}) => {
                        //   let catId = route.params.categoryId;
                        //   return {
                        //     title: catId
                        //   }
                        // }} -> With this you can setup navigation specific details. the following is an alternative to acheve the same but from inside the components passing the details towards the navigator.
                      
                    />
                </NavStack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
