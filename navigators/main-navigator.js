import AllMonsters from "../screens/all-monsters";
import DrawerNavigator from "./drawer-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MonstersOverview">
        <Stack.Screen
          name="Favorites"
          component={DrawerNavigator}
          options={{
            title: "Favorites",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
