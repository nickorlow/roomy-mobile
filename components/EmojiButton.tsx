import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, VirtualizedList, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

const EmojiButton = (props: { clickFunc: Function,currentEmoji: string, emoji: string}) =>
(
  <TouchableOpacity onPress={() => {props.clickFunc(props.emoji)}} style={{backgroundColor: props.emoji == props.currentEmoji ? 'rgba(200,200,200,.75)':'transparent', borderColor: 'black', borderRadius: 10, margin: 5}}>
    <Text style={{fontSize: RFValue(40)}}>{props.emoji}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    fontSize: 18,
    height: 44
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "transparent"
    // paddingTop: 30
    // justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  featTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  listItemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
});
export default EmojiButton;