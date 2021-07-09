import {StyleSheet, Text, TouchableOpacity, View, Vibration, ImageBackground, TouchableHighlight, Platform} from "react-native";
import React from "react";
import {Button, Icon} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {BackgroundImage} from "react-native-elements/dist/config";
import {color} from "styled-system";

const background = {uri: "https://images.unsplash.com/photo-1557683325-3ba8f0df79de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=486&q=80"};

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
    wrongChoice: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 90,
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 90,
        backgroundColor: 'red',
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
        fontSize: 21,
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
const pattern = [900, 900, 900];


function FirstScreen({navigation}) {
    const [isPressed4, setIsPressed4] = React.useState(false);
    const [isPressed5, setIsPressed5] = React.useState(false);


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
                    <TouchableOpacity
                        style={styles.choice}
                        onPress={() => {navigation.navigate("Score");score = score + 1;}}
                    >
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>

                    <TouchableHighlight
                        style={[styles.choice, isPressed4 ? {backgroundColor: '#ed1350'} : null]}
                        onPress={() =>{ score = -1; setIsPressed4(true);}}
                    >
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={[styles.choice, isPressed5 ? {backgroundColor: '#ed1350'} : null]}
                        onPress={() =>{ score = -1; setIsPressed5(true);}}
                    >
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableHighlight>

                </View>
            </ImageBackground>
        </View>
    );

}

export default FirstScreen;