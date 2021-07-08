import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import FirstScreen from "./FirstScreen";
import Score from "./Score";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={ HomeScreen } options={{headerShown: false}} />
                <Stack.Screen name="First Task" component={ FirstScreen } />
                <Stack.Screen name= "Score" component={Score} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
