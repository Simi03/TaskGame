import React from "react";
import {Text, Image, StyleSheet, View, TouchableOpacity, ImageBackground, Share} from "react-native";
import {FontAwesome} from '@expo/vector-icons';

import {score} from './FirstScreen';
import {Icon, NativeBaseProvider} from "native-base";
import {fontWeight, textAlign} from "styled-system";

const background = {uri: "https://images.unsplash.com/photo-1557683304-673a23048d34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=486&q=80"};
const clap = {uri:"http://cdn.shopify.com/s/files/1/1061/1924/products/Clapping_Hands_Emoji_ios10_d7ab242e-7230-47bf-b1e2-d46a4bc51b5b_grande.png?v=1571606090"};


const styles = StyleSheet.create({
    globalView: {
        flex: 1,
    },
    titleStyle: {
        fontSize: 60,
        textAlign: "center",
        marginTop: 50,
        color:"white",
    },
    scoreStyle: {
        fontSize: 85,
        textAlign: "center",
        marginBottom: 100,
        color:"white",
        top:15,

    },
    messageStyle: {
        textAlign: "center",
        fontSize:25,
        color:"white",
        bottom:30,
        fontWeight:"bold"
    },
    returnButtonStyle: {
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
        left: 30,
    },
    iconStyle: {
        left: 155,
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        borderRadius: 90,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 20,
    },
    titleArea: {
        flex: 2,
    },
    messageArea: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        bottom:40,

    },
    ButtonArea: {
        flex: 1,
        flexDirection: "row",

    },
    background:{
        width: "100%",
        height: "100%",
    },
    clap:{
        width: "56%",
        height: "56%",
        top:35,
    },
});

let message = "";
function Score({navigation}) {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Hey check this crazy NEW Game out my Score was ' + score + '/1 \nHow much can you get?',

            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    if (score == 1) {
        message = "Good Job! You were able to fulfill every Task. :)";
    }else if(score > 1){
        message ="Wow You're on a Streak! Keep it going. :)";
    } else {
        message = "At least You've tried. More luck next time! :)";
    }
    return (
        <View>
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.globalView}>
                    <View style={styles.titleArea}><Text style={styles.titleStyle}>Your Score!</Text>
                        <Text style={styles.scoreStyle}>{score}/1</Text>
                    </View>
                    <View style={styles.messageArea}>
                        <Text style={styles.messageStyle}>{message} </Text>
                        <Image source={clap} style={styles.clap}></Image>
                    </View>
                    <View style={styles.ButtonArea}>
                        <TouchableOpacity style={styles.returnButtonStyle} onPress={() =>{ navigation.navigate("Home");}}>
                            <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>Try Again</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconStyle} onPress={() => onShare()}>
                            <FontAwesome  name="share" size={50} color="black"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}
export default Score;