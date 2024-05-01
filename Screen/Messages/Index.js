
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AllJobPost from "../JobPost/AllJobPost";
import PostDetails from "../JobPost/PostDetails";
import Messages from "./Messages";
import Conversation from "./Conversation";

const Stack = createNativeStackNavigator();

const Index = () => {
    return (
        <Stack.Navigator initialRouteName="Messages">
            <Stack.Group screenOptions={{ headerShown: false, }} >
                <Stack.Screen name="Messages" component={Messages} />
                <Stack.Screen name="Conversation" component={Conversation} />

            </Stack.Group>
        </Stack.Navigator>
    );
};

export default Index;

