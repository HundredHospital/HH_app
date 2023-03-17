import { StyleSheet, View } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Video from "./screens/Video";
import News from "./screens/News";
import Map from "./screens/Map";
import { Ionicons, Feather } from "@expo/vector-icons";
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={S.appContainer}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color }) => {
              switch (route.name) {
                case "Home":
                  return <Ionicons name="home-sharp" size={24} color={color} />;
                case "Product":
                  return (
                    <Ionicons name="md-medkit" size={24} color={color} />
                  );
                case "Video":
                  return <Ionicons name="caret-forward-circle-outline" size={24} color={color} />;
                case "News":
                  return <Feather name="box" size={24} color={color} />;
                  case "Map":
                  return <Ionicons name="map" size={24} color={color} />;
              }
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          
          <Tab.Screen name="Product" component={Product} />
          <Tab.Screen name="Video" component={Video} />
          <Tab.Screen name="Home" component={Home} /> 
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Map" component={Map}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const S = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});