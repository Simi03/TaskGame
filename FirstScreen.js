import {StyleSheet, Text, TouchableOpacity, View, Vibration, ImageBackground} from "react-native";
import React from "react";
import {Button, Icon} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {BackgroundImage} from "react-native-elements/dist/config";
const background = { uri: "https://i.redd.it/ihfnlpbze7o01.jpg" };

const pattern = [900, 900, 900];
const styles = StyleSheet.create({
    vibrationButton:{
        marginLeft: "36%",
        marginRight: "36%",
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 90,
        backgroundColor: '#34E4EA',
    },
    choice:{
        marginBottom:"125%",

    },

    buttonText:{

    },

    introduction:{
        marginTop:"6%",
        flex:1,
        textAlign:"center",
        fontSize:31,
        fontWeight:"bold",
        color:"white"


    },
    image: {
        paddingTop: '0%',
        width: "100%",
        height: "100%",

    },


});

function FirstScreen() {
    return (
        <View>
            <ImageBackground source={background} style={styles.image}>
            <Text style={styles.introduction}> How often does your phone vibrate?</Text>
            <TouchableOpacity
                style={styles.vibrationButton}
                onPress={() => Vibration.vibrate(pattern)}
            >
                <Text>Play!</Text>
            </TouchableOpacity>
                <TouchableOpacity
                    style={styles.choice}
                  //  onPress={() => Vibration.vibrate(pattern)}
                >
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    );

}

export default FirstScreen;