/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
    useEffect (() => {
            setTimeout (() => {
               navigation.replace('WelcomeAuth');
            },2000)
    })
    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    )
}

export default Splash;