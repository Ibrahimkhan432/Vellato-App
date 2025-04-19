import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Dashboard from "../screens/bottomTabs/dashboard/Dashboard";
import PriceList from "../screens/bottomTabs/data/PriceList";
import Colors from "../constants/colors";
import Contacts from "../screens/contacts/Contacts";
import Settings from "../screens/bottomTabs/settings/Settings";

const Tab = createBottomTabNavigator();

const BottomTabScreens = () => {
    return (
        <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ color, size,focused }) => {
            let iconName;
            if (route.name === "Dashboard") {
                iconName = (require('../assests/icons/dashboard.png'));
            } else if (route.name === "Data") {
                iconName = (require('../assests/icons/data.png'))
            } else if (route.name === "Contacts") {
                iconName = (require('../assests/icons/contacts.png'));
            } else if (route.name === "Settings") {
                iconName = (require('../assests/icons/setting.png'));
            }
            return <Image source={iconName} size={size} color={color} 
            style={{tintColor: focused ? "#6B1514" : "gray", }}
            />;
        },
tabBarIconStyle:{
            
},
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "gray",
    })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Data" component={PriceList} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabScreens;
