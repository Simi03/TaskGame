import React from "react";
import {Text, Image, StyleSheet, View, TouchableOpacity, ImageBackground} from "react-native";
import {FontAwesome} from '@expo/vector-icons';

import {score} from './FirstScreen';
import {Icon, NativeBaseProvider} from "native-base";
import {textAlign} from "styled-system";

const background = {uri: "https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"};
// clap emoji if needed http://cdn.shopify.com/s/files/1/1061/1924/products/Clapping_Hands_Emoji_ios10_d7ab242e-7230-47bf-b1e2-d46a4bc51b5b_grande.png?v=1571606090

const styles = StyleSheet.create({
    globalView: {
        flex: 1,
    },
    titleStyle: {
        fontSize: 60,
        textAlign: "center",
        marginTop: 50,


    },
    scoreStyle: {
        fontSize: 85,
        textAlign: "center",
        marginBottom: 100,

    },
    messageStyle: {
        textAlign: "center",

    },
    returnButtonStyle:{
        width: 130,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
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
    iconStyle:{

    },
    titleArea: {
        flex: 2,
        backgroundColor: "green",
    },
    messageArea: {
        flex: 3,
        backgroundColor: "blue",

    },
    ButtonArea: {
        flex: 1,
        flexDirection:"row",

    }
});

let message = "";
function Score({navigation}) {
    if (score > 0) {
        message = "Good Job! You were able to fulfill every Task.:)";
    } else {
        message = "At least You've tried. More luck next time! :)";
    }
    return (
        <View style={styles.globalView}>
            <View style={styles.titleArea}><Text style={styles.titleStyle}>Your Score!</Text>
                <Text style={styles.scoreStyle}>{score}/1</Text>
            </View>
            <View style={styles.messageArea}><Text style={styles.messageStyle}>{message} </Text></View>
            <View style={styles.ButtonArea}>
                <TouchableOpacity style={styles.returnButtonStyle} onPress={() => navigation.navigate("Home")}
                >
                    <Text style={{textAlign:"center", fontSize:20, fontWeight:"bold" }}>Try Again</Text>
                </TouchableOpacity>
                <FontAwesome style={styles.iconStyle} name="share" size={50} color="black"/>

            </View>

        </View>
    );
}
export default Score;