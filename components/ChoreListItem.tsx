import React, {useState} from 'react';
import { StyleSheet, FlatList, TouchableOpacity, VirtualizedList, Button, Alert, DynamicColorIOS } from 'react-native';
import Card, { TitledCard, TransparentCard, LongTitledCard, LongCard } from './Card';
import { Text, View } from './Themed';
import AddChoreScreen from '../screens/AddChoreScreen'
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import useColorScheme from '../hooks/useColorScheme';
import { RFValue } from 'react-native-responsive-fontsize';
import ChoreDetailScreen from '../screens/ChoreDetailScreen';
import {Chore, User} from "../roomy-api/Types";
import {getUser} from "../roomy-api/ApiFunctions";




export default function ChoreItem (props: { chore: Chore, closeFunc: Function }) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
    const [isVisible, setVisible] = useState(false);
    const isLate: boolean = new Date() > props.chore.date;
    const isDoneSoon = false;
    const user: User = getUser(props.chore.userId)[0];
    return (

    <View style={[styles.item, {backgroundColor: 'transparent', paddingLeft: 0}]}>
      <ChoreDetailScreen isVisible={isVisible} close={() => {setVisible(false); props.closeFunc()}} chore={props.chore}/>
      <TouchableOpacity onPress={() => {setVisible(true)}} >

      <View style={{ flexDirection: 'row', backgroundColor: 'transparent'}} lightColor="#eee" darkColor="#1D1D1D">

      <Text style={{fontSize: RFValue(35)}}>{isLate ? '❗' :props.chore.emoji}</Text>
        <TransparentCard style={{paddingLeft: 5}}>
          <Text style={[styles.listItemTitle, {color: isLate ? "red" : isDoneSoon ? "#F59810" : adColors.text}]}>{props.chore.name}</Text>
          <Text style={[{color: isLate ? adColors.systemRed : isDoneSoon ? "#F59810" : "grey", fontWeight: 'bold'}]}>{props.chore.date.toLocaleString()}</Text>
          <Text style={[{color: isLate ? adColors.systemRed : isDoneSoon ? "#F59810" : "grey", fontWeight: 'bold'}]}>{user.firstName+" "+user.lastName}</Text>
        </TransparentCard>
      </View>
      </TouchableOpacity>
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
