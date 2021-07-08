import {StyleSheet, Text, TouchableOpacity, View, Vibration, ImageBackground} from "react-native";
import React from "react";
import {Button, Icon} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {BackgroundImage} from "react-native-elements/dist/config";
import {color} from "styled-system";

const background = {uri: "https://i.redd.it/ihfnlpbze7o01.jpg"};

const pattern = [900, 900, 900];
const styles = StyleSheet.create({
    vibrationButton: {
        marginBottom: 42,
        width: 130,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 20,
    },
    choice: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 90,
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 90,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,

        elevation: 20,
    },

    buttonText: {
        fontSize: 20,
        fontWeight: "bold"
    },

    introduction: {
        marginTop: "10%",
        flex: 1,
        textAlign: "center",
        fontSize: 31,
        fontWeight: "bold",
        color: "white"


    },
    image: {
        //   paddingTop: '0%',
        width: "100%",
        height: "100%",

    },
    textView: {
        flex: 2,
        paddingTop: 30,
    },

    playView: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },

    choiceView: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },


});
export let score = 0;

function FirstScreen({navigation}) {
    return (
        <View>
            <ImageBackground source={background} style={styles.image}>
                <View style={styles.textView}>
                    <Text style={styles.introduction}> How often does your phone vibrate?</Text>
                </View>

                <View style={styles.playView}>
                    <TouchableOpacity style={styles.vibrationButton} onPress={() => Vibration.vibrate(pattern)}>
                        <Text style={styles.buttonText}>Play!</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.choiceView}>
                    <TouchableOpacity style={styles.choice}
                                      onPress={
                                          () => {
                                              navigation.navigate("Score")
                                              score = score + 1;
                                          }}
                    >
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.choice}
                        onPress={() => score = -1}
                    >
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.choice}
                        onPress={() => score = -1}
                    >
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    );

}

export default FirstScreen;