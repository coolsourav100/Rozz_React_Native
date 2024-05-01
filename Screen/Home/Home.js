import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./HomeScreen";
import Profile from "../Profile/Profile";
import AllJobsScreen from "../JobDetails/AllJobsScreen";
import JobDetails from "../JobDetails/JobDetails";
import Notification from "../Notification/Notification";

const Stack = createNativeStackNavigator();

const Home = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Group screenOptions={{ headerShown: false, }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="AllJobsScreen" component={AllJobsScreen} />
                <Stack.Screen name="JobDetails" component={JobDetails} />
                <Stack.Screen name="Notification" component={Notification} />

            </Stack.Group>
        </Stack.Navigator>
    );
};

export default Home;

const styles = StyleSheet.create({});
