import React, { useState } from 'react';
import { StyleSheet, Modal, useColorScheme } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import EmojiButton from '../components/EmojiButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import OSIChooser from '../components/OSIChooser';
import RNPickerSelect from 'react-native-picker-select';
import OSIInput from "../components/OSIInput";
import OSIButton from "../components/OSIButton";

export default function AddGroceryScreen(props: { isVisible: boolean, close: Function }) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;

  const [emoji, setEmoji] = useState("🧹");
  const [days, setDays] = useState(['Monday']);
  const [duration, setDuration] = useState('1 - 5 Minutes');
  const [repetetion, setRepetetion] = useState('Daily');
  const [name, setName] = useState('');
  const [person, setPerson] = useState('');
  function addDay(day: string) {
    var localDays: string[] = days;
    localDays.indexOf(day) == -1 ? localDays.push(day) : delete localDays[localDays.indexOf(day)];
    setDays([]);
    setDays(localDays);
  }

  return (
    <Modal animationType={"slide"} presentationStyle="pageSheet" visible={props.isVisible} onRequestClose={() => props.close()} onDismiss={() => props.close()} style={{ backgroundColor: adColors.background }}>

      <View style={[{ minHeight: 100, backgroundColor: "#F59810", width: "100%", paddingTop: RFValue(25), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10), flexDirection: 'row', justifyContent: 'space-between' }]}>
        <Text style={[styles.title, { paddingBottom: RFValue(8), marginTop: RFValue(25), color: 'white' }]}>Add Grocery Item</Text>
        <Text style={{ fontSize: RFValue(75) }}>{emoji}</Text>
      </View>


      <View style={{ padding: 10 }}>
        <Text style={styles.inputTitle}>Name</Text>
        <OSIInput clickFunc={setName} value={name} placeholder="Grocery Name"/>
        <Text style={styles.inputTitle}>Roommate</Text>
        <View style={styles.input}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Saul Goodman', value: 'football' },
              { label: 'Walter White', value: 'baseball' },
              { label: 'Nicholas Orlowsky', value: 'hockey' },
            ]}
            style={{ inputIOS: { marginTop: RFValue(7) } }} />
        </View>

        <Text style={styles.inputTitle}>Icon</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🧑‍🍳' />
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🧹' />
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🚘' />
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='💵' />
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🛒' />
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🐾' />
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🛠️' />
        </View>

        <Text style={styles.inputTitle}>Start</Text>

        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(1598051730000)}
          mode="datetime"
          is24Hour={true}
          display="default"
          style={{ marginLeft: RFPercentage(13.5) }}
          onChange={() => { }}
        />
        <Text style={styles.inputTitle}>Repeats</Text>
        <View style={styles.input}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Never', value: 'never' },
              { label: 'Daily', value: 'daily' },
              { label: 'Every other day', value: 'halfdaily' },
              { label: 'Bi-Weekly', value: 'biweekly' },
              { label: 'Weekly', value: 'weekly' },
              { label: 'Bi-Monthly', value: 'bimonthly' },
              { label: 'Monthly', value: 'monthly' },
            ]}
            style={{ inputIOS: { marginTop: RFValue(7) } }} />
        </View>



        <Text style={styles.inputTitle}>Length</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'rgba(200,200,200,.75)', borderRadius: 10 }}>
          <OSIChooser clickFunc={setDuration} item="5 minutes" items={[duration]} style={{ borderBottomLeftRadius: 5, borderTopLeftRadius: 5 }} />
          <OSIChooser clickFunc={setDuration} item="15 minutes" items={[duration]} />
          <OSIChooser clickFunc={setDuration} item="30 minutes" items={[duration]} />
          <OSIChooser clickFunc={setDuration} item="1 Hour +" items={[duration]} style={{ borderBottomRightRadius: 5, borderTopRightRadius: 5 }} />
        </View>
      </View>
     <OSIButton value={"Add Grocery"} color={adColors.primaryColor} onPress={props.close}/>
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
    fontWeight: 'bold',
    marginBottom: 20
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
    position: 'absolute',
    bottom: RFValue(50),
  },
  inputTitle: {
    fontWeight: 'bold',
    fontSize: RFValue(15),
    marginTop: 10,
    paddingTop: 10
  },
});

