/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import { Button } from '../../components';


const ActionButton = ({title}) => {
    return (
        <View style={Styles.wrapper.component}>
            <Button title={title}/>
        </View>
    );
}

const Styles = {
    wrapper : {
        component : {
            marginBottom:43,
            width:400,
        },

    },

}

export default ActionButton;
