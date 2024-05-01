import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AllJobPost from "../JobPost/AllJobPost";
import PostDetails from "../JobPost/PostDetails";

const Stack = createNativeStackNavigator();

const HomeForPost = () => {
    return (
        <Stack.Navigator initialRouteName="AllJobPost">
            <Stack.Group screenOptions={{ headerShown: false, }} >
                <Stack.Screen name="AllJobPost" component={AllJobPost} />
                <Stack.Screen name="PostDetails" component={PostDetails} />

            </Stack.Group>
        </Stack.Navigator>
    );
};

export default HomeForPost;

const styles = StyleSheet.create({});
