import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screen components
import DashBoard from "../Home/Home";
import SignInScreen from "../AuthScreen/SignInScreen";
import SignUpScreen from "../AuthScreen/SignUpScreen";
import JobDetails from "../JobDetails/JobDetails";
import StartScreen from "../AuthScreen/StartScreen";
import ForgetPassword from "../AuthScreen/ForgetPassword";
import ResetPassword from "../AuthScreen/ResetPassword";
import SetNewPassword from "../AuthScreen/SetNewPassword";
import ConfirmPasswordChange from "../AuthScreen/ConfirmPasswordChange";
import SingUpWithMobile from "../AuthScreen/SingUpWithMobile";
import SingInWithMobile from "../AuthScreen/SingInWithMobile";
import OTPforSignIn from "../AuthScreen/OtpforSignIn";
import OTPforpassword from "../AuthScreen/OTPforpassword";
import Chooselocation from "../Location/Chooselocation";
import SetLocation from "../Location/SetLocation";
import HomeScreen from "../Home/HomeScreen";
import MyTabs from "../Others/MayTab";
import MyPostTab from "../Others/MyPostTab";

const Stack = createNativeStackNavigator();

const MyStackScreens = () => {

  const { token } = useSelector((state) => state.user);
  console.log(token, "token")

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!token ? (
        <Stack.Group navigationKey={'SignInScreen'}>
          <Stack.Screen name="StartScreen" component={StartScreen} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="SetLocation" component={SetLocation} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="DashBoard" component={DashBoard} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="JobDetails" component={JobDetails} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="ConfirmPasswordChange" component={ConfirmPasswordChange} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="SingInWithMobile" component={SingInWithMobile} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="SingUpWithMobile" component={SingUpWithMobile} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="OtpforSignIn" component={OTPforSignIn} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="OTPforpassword" component={OTPforpassword} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="SetNewPassword" component={SetNewPassword} options={{ animation: "slide_from_right", gestureEnabled: true }} />
          <Stack.Screen name="chooselocation" component={Chooselocation} options={{ animation: "slide_from_right", gestureEnabled: true }} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="MyTabs" component={MyTabs} />
          <Stack.Screen name="MyPostTab" component={MyPostTab} />
          <Stack.Screen name="chooselocation" component={Chooselocation} options={{ animation: "slide_from_right", gestureEnabled: true }} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MyStackScreens;