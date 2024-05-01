import { Box, Divider } from '@gluestack-ui/themed';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const OTPforpassword = ({ navigation }) => {
    const otp1Ref = useRef(null);
    const otp2Ref = useRef(null);
    const otp3Ref = useRef(null);
    const otp4Ref = useRef(null);
    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");
    const [second, setSecond] = useState(59);
    const [minute, setMinute] = useState(4);
    const [resentotpstatus, setResentotpstatus] = useState(false);

    const handleSignIn = () => {
        navigation.navigate('SetNewPassword');
    };
    useEffect(() => {
        if (resentotpstatus == false) {
            const interval = setTimeout(updateTime, 1000);
            return function cleanUp() {
                clearTimeout(interval);
            };
        }
    });
    function updateTime() {
        if (minute == 0 && second == 0) {
            setSecond(59);
            setMinute(1);
            setResentotpstatus(true);
        } else {
            if (second == 0) {
                setMinute((minute) => minute - 1);
                setSecond(59);
            } else {
                setSecond((second) => second - 1);
            }
        }
    }

    return (
        <Box style={{ flex: 1, backgroundColor: "#ffffff", paddingHorizontal: 30, }}>
            <View style={{ padding: 10, paddingBottom: 30 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-ios" size={40} />
                </TouchableOpacity>
            </View>
            <Divider orientation="vertical" style={{ height: "10%" }} />
            <View style={{ display: "flex", justifyContent: "center", paddingBottom: 20 }}>
                <Text style={{ color: "#000", fontSize: 30, fontWeight: 600, textAlign: "center" }}> Reset Password</Text>
                <Text style={{ color: "#000", fontSize: 18, fontWeight: 400, textAlign: "center" }}> A resetcode has been send to your register email</Text>
            </View>


            <Box style={{ paddingTop: 40, }} >
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TextInput
                        style={styles.optText}
                        value={otp1}
                        ref={otp1Ref}
                        keyboardType="number-pad"
                        maxLength={1}
                        onChangeText={(otp1) => {
                            setOtp1(otp1);
                            if (otp1.length >= 1) {
                                otp2Ref.current.focus();
                            }
                        }}
                    />
                    <TextInput
                        style={styles.optText}
                        value={otp2}
                        ref={otp2Ref}
                        keyboardType="number-pad"
                        maxLength={1}
                        onChangeText={(otp2) => {
                            setOtp2(otp2);
                            if (otp2.length >= 1) {
                                otp3Ref.current.focus();
                            } else if (otp2.length < 1) {
                                otp1Ref.current.focus();
                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === "Backspace") {
                                otp1Ref.current.focus();
                            }
                        }}
                    />
                    <TextInput
                        style={styles.optText}
                        value={otp3}
                        ref={otp3Ref}
                        keyboardType="number-pad"
                        maxLength={1}
                        onChangeText={(otp3) => {
                            setOtp3(otp3);
                            if (otp3.length >= 1) {
                                otp4Ref.current.focus();
                            } else if (otp3.length < 1) {
                                otp2Ref.current.focus();
                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === "Backspace") {
                                otp2Ref.current.focus();
                            }
                        }}
                    />
                    <TextInput
                        style={styles.optText}
                        value={otp4}
                        ref={otp4Ref}
                        keyboardType="number-pad"
                        maxLength={1}
                        onChangeText={(otp4) => {
                            setOtp4(otp4);
                            if (otp4.length < 1) {
                                otp3Ref.current.focus();
                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === "Backspace") {
                                otp3Ref.current.focus();
                            }
                        }}
                    />
                </View>
                <View style={{ width: '100%', padding: 15, display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>

                </View>
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleSignIn} style={{
                        backgroundColor: "#3b8f43",
                        borderRadius: 8,
                        width: "100%",
                        height: 60,
                    }}><Text style={{ color: "#ffffff", textAlign: 'center', padding: 16, fontSize: 20, fontWeight: 600 }}>Reset Password</Text></TouchableOpacity>
                </View>
                <View
                    style={{
                        paddingVertical: 30,
                        paddingHorizontal: 20,
                        flexDirection: "row",
                        gap: 10,
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#541C9A",
                        }}
                    >
                        {minute < 10 ? `0${minute}` : minute} :{" "}
                        {second < 10 ? `0${second}` : second}
                    </Text>
                    <TouchableOpacity >
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: resentotpstatus ? "#541C9A" : "#AAA",
                            }}
                        >
                            Resent reset code
                        </Text>
                    </TouchableOpacity>
                </View>
            </Box>
        </Box >
    );
};
export default OTPforpassword;

const styles = StyleSheet.create({


    optText: {
        backgroundColor: "#f0f0f0", height: 60, width: '15%', borderRadius: 12, fontSize: 40, textAlign: "center"
    },

});
