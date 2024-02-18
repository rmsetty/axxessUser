import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from "../screens/HomeScreen";
import VendorDetailsScreen from "../screens/VendorDetailsScreen";
import ServiceDetailsScreen from "../screens/ServiceDetailsScreen";
import Basket from "../screens/Basket";
import OrdersScreen from "../screens/OrderHistoryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrderDetailsNavigator from "./OrderDetailsNavigator";
import CourierInfoScreen from "../screens/CourierInfoScreen";
import CourierCalendarScreen from "../screens/CourierCalendarScreen";
import UserCalendarScreen from "../screens/UserCalendarScreen";
import UserNotesScreen from "../screens/UserNotesScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="HomeTabs" component={RegisterScreen} /> */}

      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Orders"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="book" size={24} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
<MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
            <HomeStack.Screen name="Register" component={RegisterScreen}/>
            <HomeStack.Screen name="Login" component={LoginScreen}/>


      <HomeStack.Screen name="Vendors" options ={{ headerShown: false }} component={HomeScreen}/>
      <HomeStack.Screen
        name="VendorDetails"
        component={VendorDetailsScreen}
      />
      <HomeStack.Screen
        name="ServiceDetails"
        component={ServiceDetailsScreen}
      />
      <HomeStack.Screen
        name="Courier Info"
        component={CourierInfoScreen}
      />
      <HomeStack.Screen
        name="Courier Calendar"
        component={CourierCalendarScreen}
      />
      <HomeStack.Screen
        name="User Calendar"
        component={UserCalendarScreen}
      />
      <HomeStack.Screen
        name="User Notes"
        component={UserNotesScreen}
      />
      <HomeStack.Screen name="Basket" component={Basket} />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen
        name="OrderDetails"
        component={OrderDetailsNavigator}
        screenOptions={{ headerShown: false }}
      />
    </OrdersStack.Navigator>
  );
};

export default RootNavigator;