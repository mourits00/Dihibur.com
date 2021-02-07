/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import { WelcomeIlusstrations } from '../../assets';

const Splash = ({navigation}) => {
    useEffect (() => {
            setTimeout (() => {
               navigation.replace('WelcomeAuth');
            },2000)
    })
    return (
        <View style={Styles.wrapper.page}>
            <Image source={WelcomeIlusstrations} style={Styles.wrapper.illustrations}></Image>
            <Text style={Styles.text.welcome}>Bersabarlah Menunggu .....</Text>
        </View>
    )
}

const Styles = {
    wrapper : {
        page : {
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'white',
            flex:1,
        },
        illustrations : {
            width:261, 
            height:187, 
            marginTop : 80,
            marginBottom:10,
        },

    },
    text : {
        welcome : {
            fontSize:20,
            fontWeight:'bold',
            color: 'black',
            marginBottom:190,
            paddingHorizontal:'15%'
        },
    }
}
export default Splash;