import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, VirtualizedList, StyleProp, ViewStyle } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

const Card = (props: { children: any, style?: StyleProp<ViewStyle> }) =>
(
  <View lightColor="#eee" darkColor="#1D1D1D" style={[props.style, { borderRadius: 15, width: "90%", padding: 10, marginTop: 30 }]}>
    {props.children}
  </View>
);

export const TitledCard = (props: { children: any, style?: StyleProp<ViewStyle>, title: string }) =>
(
  <Card>
    <Text style={[styles.subheader, { paddingLeft: 10 }]}>{props.title}</Text>
    <View style={styles.separator} lightColor="lightgrey" darkColor="rgba(255,255,255,0.1)" />
    {props.children}
  </Card>
);


export const TransparentCard = (props: { children: any, style?: StyleProp<ViewStyle> }) =>
(
  <View style={[props.style, { backgroundColor: "transparent" }]}>
    {props.children}
  </View>
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
    fontSize: 25,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
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
export default Card;