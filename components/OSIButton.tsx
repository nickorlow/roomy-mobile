import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    StyleSheet,
    VirtualizedList,
    StyleProp,
    ViewStyle,
    TouchableOpacity,
    TextInput,
    useColorScheme
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import Card from "./Card";

export default function OSIButton(props: { onPress: Function, value: string, color:string, style?:StyleProp<ViewStyle>, onLongPress?: Function}) {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);


    const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;

    return(
        <TouchableOpacity onPress={() => props.onPress()} onLongPress={() => {if(props.onLongPress != undefined) props.onLongPress()}} style={[styles.link, props.style]}>
            <Card color={props.color} style={{ height: RFValue(40), }}>
                <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>{props.value}</Text>
            </Card>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    link: {
        width: "100%",
    },
    subcontent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
});
