import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, VirtualizedList, StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

const Card = (props: { children: any, style?: StyleProp<ViewStyle>, color:any }) =>
(
  <View lightColor={props.color} darkColor={props.color} style={[props.style, { borderRadius: 15, padding: 10, paddingHorizontal: 20, marginTop: 30, marginHorizontal: 15 }]}>
    {props.children}
  </View>
);

export const LongCard = (props: { children: any, style?: StyleProp<ViewStyle>, color:any }) =>
(
  <Card style={{width: "90%"}} color={props.color}>
     {props.children}
  </Card>
);


export const LongTitledCard = (props: { children: any, style?: StyleProp<ViewStyle>, title: string, titleColor: any, color:any }) =>
(
  <LongCard color={props.color} style={props.style}>
   
      <Text style={[styles.title, {marginBottom:RFValue(0), maxWidth: 250, color:props.titleColor}]}>{props.title}</Text> 
      <View style={styles.separator} lightColor="lightgrey" darkColor="rgba(255,255,255,0.1)" />
    {props.children}
    
  </LongCard>
);

export const TitledCard = (props: { children: any, style?: StyleProp<ViewStyle>, title: string, titleColor: any, color:any }) =>
(
  <Card color={props.color} style={props.style}>
   
      <Text style={[styles.title, {marginBottom:RFValue(10), maxWidth: 250, color:props.titleColor}]}>{props.title}</Text> 
    {props.children}
    
  </Card>
);

export const IconedTitledCard = (props: { children: any, style?: StyleProp<ViewStyle>, title: string, icon: any, color:any }) =>
(
  <Card color={props.color}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent'}}>
      <Text style={[styles.title, {marginBottom:10, maxWidth: 250}]}>{props.title}</Text> 
      <Ionicons name={props.icon} size={64} color="#fff"/>
    </View>
    {props.children}
    
  </Card>
);




export const TransparentCard = (props: { children: any, style?: StyleProp<ViewStyle> }) =>
(
  <View style={[props.style, { backgroundColor: "transparent" }]}>
    {props.children}
  </View>
);

export const AllDoneCard = (props: { style?: StyleProp<ViewStyle> }) =>
(
  <View lightColor="rgb(52,199,89)" darkColor="rgb(48,209,88)" style={[props.style, { borderRadius: 15, padding: 10, paddingHorizontal: 20, marginTop: 30, marginHorizontal: 15,flex: 1, alignItems:'center' }]}>
     <Text style={[styles.title, {marginBottom:10}]}>That's all for now!</Text>
     <Ionicons name="md-checkmark-circle" size={32} color="#fff"/>
  </View>
);


export const FeatureCard = (props: {title: string, content: string, icon:any, iconcolor:string, style?: StyleProp<ViewStyle> }) =>
(
  <View style={[props.style, { borderRadius: 15, paddingHorizontal: 30, marginHorizontal: 15, backgroundColor: "transparent", marginVertical: RFValue(15),  }]}>
     <View style={{ flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "transparent" }}>
     <Ionicons name={props.icon} size={54} color={props.iconcolor}/>
     <View style={{paddingLeft:RFValue(20), paddingRight:RFValue(50), minWidth:325, backgroundColor: "transparent"}}>
      <Text style={[styles.featTitle, {color: props.iconcolor}]}>{props.title}</Text>
      <Text>{props.content}</Text>
     </View>
     </View>
  </View>
);

export const MicroFeatureCard = (props: {title: string, content: string, icon:any, iconcolor:string, style?: StyleProp<ViewStyle> }) =>
(
  <View style={[props.style, { borderRadius: 15, marginHorizontal: 10, backgroundColor: "transparent", marginVertical: RFPercentage(.5) }]}>
     <View style={{ flexDirection: 'row',  backgroundColor: "transparent" }}>
     <Ionicons name={props.icon} size={24} color={props.iconcolor}/>
     <View style={{marginTop:RFValue(5), marginLeft:20, backgroundColor: "transparent"}}>
      <Text>{props.content}</Text>
     </View>
     </View>
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
    fontSize: 22,
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
export default Card;