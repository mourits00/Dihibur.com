/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import ActionButton from './ActionButton';
import {WelcomeIlusstrations} from '../../assets';

const WelcomeAuth = () => {
    return (
        <View style={Styles.wrapper.page}>

                <Image source={WelcomeIlusstrations} style={Styles.wrapper.illustrations} />
                <Text style={Styles.text.welcome}>One Click Entertainment</Text>
                <ActionButton title="Masuk"/>
                <ActionButton title="Daftar"/>
                <Text style={Styles.text.footnotes}>Powered By Simple IT Solutions</Text>
        </View>
    );
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
            marginTop : 20,
            marginBottom:8,
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
        footnotes :{
            fontSize : 10,
            color : 'black',
            marginTop : 10,
        }
    }
}
export default WelcomeAuth;