import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, VirtualizedList, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function OSIChooser(props: { clickFunc: Function, item: string, items: string[]}) {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  return(
    <TouchableOpacity onPress={() => {props.clickFunc(props.item); forceUpdate(); }} style={{backgroundColor: props.items.indexOf(props.item)!=-1 ? 'rgba(200,200,200,.75)':'transparent',borderWidth: 1 , borderColor: 'blue', borderRadius: 5, margin: 5, padding:2}}>
      <Text style={{fontSize: RFValue(16)}}>{props.item}</Text>
    </TouchableOpacity>
  );
}


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