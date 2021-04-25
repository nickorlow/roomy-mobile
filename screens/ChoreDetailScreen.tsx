import React, { useState } from 'react';
import { StyleSheet, FlatList, VirtualizedList, Button, Alert, Modal, TouchableOpacity, useColorScheme, TextInput } from 'react-native';
import Card, { TransparentCard } from '../components/Card'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../constants/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import EmojiButton from '../components/EmojiButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import OSIChooser from '../components/OSIChooser';
import {Picker} from '@react-native-picker/picker';

export type Chore = {
  emoji: string,
  name: string,
  date: Date,
  person: string
};

export default function ChoreDetailScreen(props: { isVisible: boolean, close: Function, chore: Chore }) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;

  const [emoji, setEmoji] = useState("🧹");
  const [days, setDays] = useState(['Monday']);
  const [duration, setDuration] = useState('1 - 5 Minutes');
  const [repetetion, setRepetetion] = useState('Daily');
  const [name, setName] = useState('');

  function addDay(day: string)
  {
    var localDays: string[] = days;
    localDays.indexOf(day) == -1 ? localDays.push(day) : delete localDays[localDays.indexOf(day)];
    setDays([]);
    setDays(localDays);
  }

  return (
    <Modal animationType={"slide"} presentationStyle="pageSheet" visible={props.isVisible} onRequestClose={() => props.close()} onDismiss={() => props.close()} style={{ backgroundColor: adColors.background }}>

      <View style={[{ minHeight: 100, backgroundColor: "#F59810", width: "100%", paddingTop: RFValue(25), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10), flexDirection: 'row', justifyContent: 'space-between' }]}>
        <TransparentCard>
          <Text style={[styles.title, { marginTop: RFValue(25), color: 'white' }]}>{props.chore.name}</Text>
          <Text style={{color: 'white'}}>{props.chore.date.toString()}</Text>
          </TransparentCard>
        <Text style={{fontSize: RFValue(75)}}>{props.chore.emoji}</Text>
      </View>



      <TouchableOpacity onPress={() => props.close()} style={styles.link}>
        <Card color={adColors.primaryColor} style={{ height: "100%", }}>
          <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Mark as Done</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.close()} style={styles.link}>
        <Card color={adColors.primaryColor} style={{ height: "100%", }}>
          <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Delete This Occourance</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.close()} style={styles.link}>
        <Card color={adColors.primaryColor} style={{ height: "100%", }}>
          <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Fully Delete this Chore</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.close()} style={styles.link}>
        <Card color={adColors.primaryColor} style={{ height: "100%", }}>
          <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Close</Text>
        </Card>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 5,
    backgroundColor: 'rgba(225,225,225,.75)',
    padding: 5,
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  subcontent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  link: {
    height: 90,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "100%",
  },
  inputTitle: {
    fontWeight: 'bold',
    fontSize: RFValue(15),
    paddingTop: 10
  },
});

