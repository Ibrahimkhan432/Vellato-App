import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnBoarding1 from "../screens/onborading/OnBoarding1.js";
import OnBoarding2 from "../screens/onborading/OnBoarding2.js";
import Login from "../screens/auth/Login.js";
import ForgotPassword from "../screens/auth/ForgotPasssword.js";
import OtpVerification from "../screens/auth/OtpVerification.js";
import ResetPassword from "../screens/auth/ResetPassword.js";
import RegisterVisit from "../screens/RegisterVisit.js";
import PriceList from "../screens/bottomTabs/data/PriceList.js";
import Contacts from "../screens/contacts/Contacts.js";
import EditContact from "../screens/contacts/EditCnt.js";
import AddNewContact from "../screens/contacts/AddNewCnt.js";
import Settings from "../screens/bottomTabs/settings/Settings.js";
import ChangeName from "../screens/bottomTabs/settings/changeName.js";
import ChangePswd from "../screens/bottomTabs/settings/ChangePswd.js";
import BottomTabScreens from "./BottomTabScreens.js";
import Splash from "../screens/Splash.js";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Dashboard" component={BottomTabScreens} />
        <Stack.Screen name="RegisterVisit" component={RegisterVisit} />
        <Stack.Screen name="PriceList" component={PriceList} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="EditContact" component={EditContact} />
        <Stack.Screen name="AddNewContact" component={AddNewContact} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ChangeName" component={ChangeName} />
        <Stack.Screen name="ChangePswd" component={ChangePswd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
