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
export default function AddChoreScreen(props: { isVisible: boolean, close: Function }) {

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
        <Text style={[styles.title, { paddingBottom: RFValue(8), marginTop: RFValue(25), color: 'white' }]}>Add Chore</Text>
        <Text style={{fontSize: RFValue(75)}}>{emoji}</Text>
      </View>

     
      <View style={{ padding: 10 }}>
      <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Chore Name"
          onChangeText={(e) => {setName(e)}}
        />
        <Text style={styles.inputTitle}>Roommate</Text>
        <DropDownPicker
          items={[
            { label: 'Carson Hammock', value: 'chammock' },
            { label: 'Walter White', value: 'ww' },
            { label: 'Saul Goodman', value: 'sgood' },
            { label: 'Nicholas Orlowsky', value: 'nickorlow' },
          ]}
          defaultValue={"Carson Hammock"}
          containerStyle={{ height: 75 }}
          style={[styles.title,
          { backgroundColor: '#fafafa' }]}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
        />


        <Text style={styles.inputTitle}>Icon</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🧑‍🍳'/>
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🧹'/>
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🚘'/>
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='💵'/>
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🛒'/>
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🐾'/>
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🛠️'/>
        </View>
     
      <Text style={styles.inputTitle}>Start Date/Time</Text>
      
      <DateTimePicker
          testID="dateTimePicker"
          value={new Date(1598051730000)}
          mode="datetime"
          is24Hour={true}
          display="default"
          style={{marginLeft:RFPercentage(13.5)}}
          onChange={()=>{}}
        />
                <Text style={styles.inputTitle}>Repeats</Text>
         <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          <OSIChooser clickFunc={setRepetetion} item="Once" items={[repetetion]}/>
          <OSIChooser clickFunc={setRepetetion} item="Daily" items={[repetetion]}/>
          <OSIChooser clickFunc={setRepetetion} item="Ever other day" items={[repetetion]}/>
          <OSIChooser clickFunc={setRepetetion} item="Every week" items={[repetetion]}/>
          <OSIChooser clickFunc={setRepetetion} item="Weekly" items={[repetetion]}/>
          <OSIChooser clickFunc={setRepetetion} item="Bi-Weekly" items={[repetetion]}/>
          <OSIChooser clickFunc={setRepetetion} item="Monthly" items={[repetetion]}/>
        </View>
{/*         <Text>Days of Week</Text>
         <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          <OSIChooser clickFunc={addDay} item="M" items={days}/>
          <OSIChooser clickFunc={addDay} item="T" items={days}/>
          <OSIChooser clickFunc={addDay} item="W" items={days}/>
          <OSIChooser clickFunc={addDay} item="Th" items={days}/>
          <OSIChooser clickFunc={addDay} item="F" items={days}/>
          <OSIChooser clickFunc={addDay} item="S" items={days}/>
          <OSIChooser clickFunc={addDay} item="Su" items={days}/>
</View> commented so this is in git */}

        <Text style={styles.inputTitle}>Length</Text>
         <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          <OSIChooser clickFunc={setDuration} item="1 - 5 Minutes" items={[duration]}/>
          <OSIChooser clickFunc={setDuration} item="5 - 15 Minutes" items={[duration]}/>
          <OSIChooser clickFunc={setDuration} item="15 - 30 Minutes" items={[duration]}/>
          <OSIChooser clickFunc={setDuration} item="30 - 45 Minutes" items={[duration]}/>
          <OSIChooser clickFunc={setDuration} item="1 Hour +" items={[duration]}/>
        </View>
</View>        
      <TouchableOpacity onPress={() => props.close()} style={styles.link}>
        <Card color={adColors.primaryColor} style={{ height: "100%", }}>
          <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Add Chore</Text>
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
    paddingTop: 10
  },
});

