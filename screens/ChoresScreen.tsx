import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList, TouchableOpacity, VirtualizedList, Button, Alert, DynamicColorIOS } from 'react-native';
import Card, { TitledCard, TransparentCard, LongTitledCard, LongCard } from '../components/Card';
import { Text, View } from '../components/Themed';
import AddChoreScreen from './AddChoreScreen'
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import useColorScheme from '../hooks/useColorScheme';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import ChoreDetailScreen, {Chore} from './ChoreDetailScreen';
import ChoreItem from './ChoreListItem';
import {getChores, getMyChores, getNotMyChores} from './Constants';
import {useIsFocused} from "@react-navigation/native";
import ChoreCard from "../components/ChoreCard";

export default function ChoresScreen() {

  const oadColors = useColorScheme() != "dark" ? Colors.dark : Colors.light;
  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;


  return (
    <View style={styles.container}>

     <View style={[{minHeight: 200, backgroundColor:"#F59810", width: "100%", paddingTop:RFValue(50), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10)}]}>
     <TransparentCard style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
       <TransparentCard>
        <Text style={[styles.title, {paddingBottom: RFValue(8), color: oadColors.text}]}>Chores</Text>
        <Text  style={[styles.subheader,{color: oadColors.text}]}>You have 5 chores left today.</Text>
        <Text  style={[styles.subheader,{color: oadColors.text}]}>1 Chore is late.</Text>
        <Text  style={[styles.subheader,{color: oadColors.text}]}>1 Chore needs to be finished soon.</Text>
       </TransparentCard>
     </TransparentCard>
     </View>
        <ScrollView style={[{ width: "100%", height: "100%" }]}>
          <View style={styles.container}>
            <ChoreCard listFunction={getMyChores} title={"My Chores"}/>
            <ChoreCard listFunction={getNotMyChores} title={"House Chores"}/>
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    fontSize: 18,
    marginVertical: 2
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "transparent"
    // paddingTop: 30
    // justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 20,
    color: 'white'
  },
  listItemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
});
