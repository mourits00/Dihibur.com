/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const Button = ({title}) => {
    return (
        <TouchableOpacity style={Styles.wrapper.tombol}>

                <Text style={Styles.text.title}>{title}</Text>

         </TouchableOpacity>
    )
}

const Styles = {
    wrapper : {
        tombol : {
            backgroundColor : colors.default,
            borderRadius : 25,
            height : 46,
        },
    },
    text : {
        title : {
            fontSize : 24,
            color : 'white',
            textAlign : 'center',
            paddingVertical : '2%',
        },
    },
}
export default Button;