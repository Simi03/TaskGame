import React from "react";
import { ImageBackground, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Icon, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import center from "native-base/src/theme/components/center";

const background = { uri: "https://wallpaperaccess.com/full/869.jpg" };
//const title = {uri: "https://fontmeme.com/permalink/210707/140831bd0fb81ff77a7985024f0d5968.png"};
//<Image source={title}/>

const styles = StyleSheet.create({
    image: {
        flex: 1,
        paddingTop: '0%',
        width: "100%",
        height: "100%",

    },
    button: {
        marginTop:"100%",
        marginLeft: "36%",
        marginRight: "36%",
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: "white",
    },
});

function HomeScreen({ navigation }) {
    return (
        <NativeBaseProvider>
            <ImageBackground source={background} style={styles.image}>
                <TouchableOpacity style={styles.button}>
                    <Icon
                        as={MaterialCommunityIcons}
                        name="play"
                        size={60}
                        onPress={() => navigation.navigate("First Task")}
                    />
                </TouchableOpacity>
            </ImageBackground>
        </NativeBaseProvider>
    );
}
export default HomeScreen;