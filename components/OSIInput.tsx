import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {StyleSheet, VirtualizedList, StyleProp, ViewStyle, TouchableOpacity, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function OSIInput(props: { clickFunc: Function, value: string, style?:StyleProp<ViewStyle>}) {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    return(
        <TextInput
            style={[styles.input, props.style]}
            value={props.value}
            placeholder="Chore Name"
            onChangeText={(e) => { props.clickFunc(e) }}
        />
    );
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        borderRadius: 5,
        backgroundColor: 'rgba(225,225,225,.75)',
        padding: 5,
        marginBottom: 10
    }
});
