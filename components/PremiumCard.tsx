import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {StyleSheet, VirtualizedList, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import Card, {MicroFeatureCard} from "./Card";
import useColorScheme from "../hooks/useColorScheme";
import OSIButton from "./OSIButton";

export default function PremiumCard() {
    const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;

    return (
        <Card color={adColors.cardColor} style={[{
            width: "90%",
            borderColor: adColors.cardColor,
            borderWidth: 1.5
        }]}>
            <View style={{backgroundColor: adColors.cardColor}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: adColors.cardColor}}>
                    <View style={{backgroundColor: adColors.cardColor}}>
                        <Text style={[styles.subtitle, {
                            marginBottom: 2,
                            maxWidth: 250,
                            color: adColors.text
                        }]}>Upgrade to Premium</Text>
                        <Text style={{color: adColors.text}}>Only $0.99/month</Text>
                    </View>
                </View>
                <View style={[styles.separator, {backgroundColor: adColors.text}]}/>
                <MicroFeatureCard content="Grocery bill splitting" iconcolor={adColors.text} icon="cart"/>
                <MicroFeatureCard content="Unlimited chores" iconcolor={adColors.text} icon="infinite"/>
                <MicroFeatureCard content="Cancel anytime" iconcolor={adColors.text} icon="calendar"/>
            </View>
            <OSIButton style={{width: "100%"}} color={adColors.pastelGreen} value={"Upgrade Today!"} onPress={()=>{}}/>
        </Card>
    );
}





const styles = StyleSheet.create({
    appleButton: {
        width: '100%',
        height: 45,
        shadowColor: '#555',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        marginVertical: 15,
    },
    separator: {
        marginVertical: RFValue(10),
        height: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: RFValue(5)
    },
    subcontent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    subtitle: {
        fontSize: RFValue(22),
        fontWeight: 'bold',
        marginBottom: 20
    },
    link: {
        height: 90,
        paddingVertical: 20,
        paddingHorizontal: 15,
        width: "100%"
    },
});
