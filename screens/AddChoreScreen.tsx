import React, { useState } from 'react';
import {StyleSheet, Modal, useColorScheme, Alert} from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import EmojiButton from '../components/EmojiButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import OSIChooser from '../components/OSIChooser';
import RNPickerSelect from 'react-native-picker-select';
import OSIInput from "../components/OSIInput";
import OSIButton from "../components/OSIButton";
import {addChore, getItemsToBuy, getRoomies} from "../roomy-api/ApiFunctions";
import {v4 as uuidv4} from 'uuid';





export default function AddChoreScreen(props: { isVisible: boolean, close: Function }) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  const [date, setDate] = useState(new Date());
  const [emoji, setEmoji] = useState("🧹");
  const [days, setDays] = useState(['Monday']);
  const [duration, setDuration] = useState('1 - 5 Minutes');
  const [repetition, setRepetition] = useState('Daily');
  const [name, setName] = useState('');
  const [person, setPerson] = useState('');


  function addDay(day: string) {
    var localDays: string[] = days;
    localDays.indexOf(day) == -1 ? localDays.push(day) : delete localDays[localDays.indexOf(day)];
    setDays([]);
    setDays(localDays);
  }

  function getRoomiesList()
  {
    var roomies : any[]= [];
    for (var roomy of getRoomies()) {
      roomies.push({label: roomy.firstName+" "+roomy.lastName, value: roomy.id});
    }
    return roomies;
  }
  function addChoreButtonPress()
  {

    if (name == null || name == "")
    {
      Alert.alert("Please give the chore a name");
    }

    if (emoji == null || emoji == "")
    {
      Alert.alert("Please give the chore an Emoji");
    }

    if (person == null || person == "")
    {
      Alert.alert("Please assign the chore to a user");
    }

    if (repetition == null || repetition == "")
    {
      Alert.alert("Please choose the repetition");
    }

    if (date == null)
    {
      Alert.alert("Please choose the date");
    }

    if (duration == null || duration == "")
    {
      Alert.alert("Please choose a duration");
    }

    addChore({
      name: name,
      emoji: emoji,
      userId: person,
      repeats: repetition,
      id: uuidv4(),
      date: date,
      duration: duration
    });

    closeScreen();
  }

  function closeScreen()
  {
    props.close();

    // Clear out vals for next chore
    setDate(new Date());
    setEmoji("🧹");
    setDuration('');
    setRepetition('Daily');
    setName('');
    setPerson('');
  }


  return (
    <Modal animationType={"slide"} presentationStyle="pageSheet" visible={props.isVisible} onRequestClose={() => props.close()} onDismiss={() => props.close()} style={{ backgroundColor: adColors.background }}>

      <View style={[{ minHeight: 100, backgroundColor: "#F59810", width: "100%", paddingTop: RFValue(25), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10), flexDirection: 'row', justifyContent: 'space-between' }]}>
        <Text style={[styles.title, { paddingBottom: RFValue(8), marginTop: RFValue(25), color: 'white' }]}>Add Chore</Text>
        <Text style={{ fontSize: RFValue(75) }}>{emoji}</Text>
      </View>


      <View style={{ padding: 10 }}>
        <Text style={styles.inputTitle}>Name</Text>
        <OSIInput clickFunc={setName} value={name} placeholder="Chore Name"/>
        <Text style={styles.inputTitle}>Roommate</Text>
        <View style={styles.input}>
          <RNPickerSelect
            onValueChange={(value) => setPerson(value)}
            items={getRoomiesList()}
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
          value={date}
          mode="datetime"
          is24Hour={true}
          display="default"
          style={{ marginLeft: RFPercentage(13.5) }}
          onChange={(value) => {setDate(new Date(value.timeStamp))}}
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
          <OSIChooser clickFunc={setDuration} item="5 mins" items={[duration]} style={{ borderBottomLeftRadius: 5, borderTopLeftRadius: 5 }} />
          <OSIChooser clickFunc={setDuration} item="15 mins" items={[duration]} />
          <OSIChooser clickFunc={setDuration} item="30 mins" items={[duration]} />
          <OSIChooser clickFunc={setDuration} item="1 hr +" items={[duration]} style={{ borderBottomRightRadius: 5, borderTopRightRadius: 5 }} />
        </View>

      </View>
      <OSIButton value={"Add Chore"} color={adColors.primaryColor} onPress={addChoreButtonPress}/>
      <OSIButton value={"Cancel"} color={adColors.systemRed} onPress={closeScreen}/>
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

