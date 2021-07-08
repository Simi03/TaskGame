import React from "react";
import {Text, Image, StyleSheet, View} from "react-native";
import {score} from './FirstScreen';

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

    titleArea: {
        flex: 1,
        backgroundColor: "green",
    },


    messageArea: {
        flex: 2,
        backgroundColor: "blue",

    },


});

let message = "";

function Score() {

    if (score > 0) {
        message = "Good Job!:)";
    } else {
        message = "At least You've tried. More luck next time :)";
    }
    return (
        <View style={styles.globalView}>
            <View style={styles.titleArea}><Text style={styles.titleStyle}>Your Score!</Text>
                <Text style={styles.scoreStyle}>{score}/1</Text>
            </View>
            <View style={styles.messageArea}><Text style={styles.messageStyle}>{message} </Text></View>
        </View>
    );
}

export default Score;