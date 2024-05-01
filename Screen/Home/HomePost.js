import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AllJobPost from "../JobPost/AllJobPost";
import AddPost from "../JobPost/AddPost";
import PostDetails from "../JobPost/PostDetails";

const Stack = createNativeStackNavigator();

const HomePost = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Group
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="AllJobPost" component={AllJobPost}
                />
                <Stack.Screen name="AddPost" component={AddPost} />
                <Stack.Screen name="PostDetails" component={PostDetails} />

            </Stack.Group>
        </Stack.Navigator>
    );
};

export default HomePost;

const styles = StyleSheet.create({});
