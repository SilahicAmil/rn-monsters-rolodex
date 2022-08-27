import AllMonsters from "../screens/all-monsters";
import FavoriteMonsters from "../screens/favorite-monsters";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ccc" },
        headerTintColor: "white",
        swipeEnabled: true,
        drawerHideStatusBarOnOpen: true,
        drawerStatusBarAnimation: "fade",
      }}
    >
      <Drawer.Screen
        name="Monsters"
        component={AllMonsters}
        options={{
          drawerIcon: () => (
            <FontAwesome name="optin-monster" size={16} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteMonsters}
        options={{
          drawerIcon: () => <Ionicons name="star" size={18} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
