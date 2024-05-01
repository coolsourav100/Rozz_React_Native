import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../Home/Home'; // Corrected import path
import Bid from '../../Screen/Bid/Bid'; // Corrected import path
import Notification from '../../Screen/Notification/Notification'; // Corrected import path
import Profile from '../../Screen/Profile/Profile'; // Corrected import path
import SettingsScreen from '../Setting/SettingScreen';
import Index from '../Messages/Index';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={"DashBoard"}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Bid') {
                        iconName = 'gavel';
                    } else if (route.name === 'Messages') {
                        iconName = 'messenger-outline';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings';
                    }

                    // You can return any component that you like here!
                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: '#3b8f43',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Bid" component={Bid} />
            <Tab.Screen name="Messages" component={Index} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default MyTabs;
