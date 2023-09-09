import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Home, ExploreTrip, CreateTrip, Wishlist, Profile, Intro, PlaceDetail, TripPlan } from "../screens/index";
import { TabBar } from "../navigator/index";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName="Intro" screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Content" component={TabBar} />
            <Stack.Screen name="PlaceDetail" component={PlaceDetailNavigator} />
            <Stack.Screen name="TripPlan" component={CreateTripNavigator} />
        </Stack.Navigator>
    );
}

function PlaceDetailNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="RecommandTripDetail" component={PlaceDetail} />
        </Stack.Navigator>
    );
}

function CreateTripNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="MainTripPlan" component={TripPlan} />
        </Stack.Navigator>
    );
}

export default function Navigator() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
}