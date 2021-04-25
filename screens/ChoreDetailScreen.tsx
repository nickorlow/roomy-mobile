import React, { useState} from 'react';
import { StyleSheet, Alert, Modal, useColorScheme } from 'react-native';
import { TransparentCard } from '../components/Card'
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RFValue } from "react-native-responsive-fontsize";
import OSIButton from "../components/OSIButton";
import { Audio } from 'expo-av';
import {markChoreDone} from "./Constants";

export type Chore = {
  emoji: string,
  name: string,
  date: Date,
  person: string,
  id: string
};

export default function ChoreDetailScreen(props: { isVisible: boolean, close: Function, chore: Chore }) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;

  const [emoji, setEmoji] = useState("🧹");
  const [days, setDays] = useState(['Monday']);
  const [duration, setDuration] = useState('1 - 5 Minutes');
  const [repetetion, setRepetetion] = useState('Daily');
  const [name, setName] = useState('');
  const [doneSound, setDoneSound]: any = useState();

  function addDay(day: string)
  {
    var localDays: string[] = days;
    localDays.indexOf(day) == -1 ? localDays.push(day) : delete localDays[localDays.indexOf(day)];
    setDays([]);
    setDays(localDays);
  }

  function deleteChore()
  {
    Alert.alert("Delete Chore", "Would you like to delete this occurrence, or all occurrences?", [{text:"Delete this occurrence", style:"destructive"}, {text:"Delete all occurrences", style:"destructive"}, {text:"Cancel", style:"cancel"}])
  }

  async function markChoreDonePress()
  {
    await playSound();
    markChoreDone(props.chore.id);
    props.close();
  }
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
        require('../static/sounds/ApplePaySuccessSoundEffect.mp3')
    );
    setDoneSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return doneSound
        ? () => {
          console.log('Unloading Sound');
          doneSound.unloadAsync(); }
        : undefined;
  }, [doneSound]);

  return (

    <Modal animationType={"slide"} presentationStyle="pageSheet" visible={props.isVisible} onRequestClose={() => props.close()} onDismiss={() => props.close()} style={{ backgroundColor: adColors.background }}>

      <View style={[{ minHeight: 100, backgroundColor: "#F59810", width: "100%", paddingTop: RFValue(25), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10), flexDirection: 'row', justifyContent: 'space-between' }]}>
        <TransparentCard>
          <Text style={[styles.title, { marginTop: RFValue(25), color: 'white' }]}>{props.chore.name}</Text>
          <Text style={{color: 'white'}}>{props.chore.date.toString()}</Text>
          </TransparentCard>
        <Text style={{fontSize: RFValue(75)}}>{props.chore.emoji}</Text>
      </View>
      <View style={{height: "100%", backgroundColor: adColors.background}}>
            <OSIButton onPress={deleteChore} value={"Delete"} color={adColors.systemRed}/>
            <OSIButton onPress={markChoreDonePress} value={"Mark as Done"} color={adColors.primaryColor}/>
            <OSIButton onPress={props.close} value={"Close"} color={adColors.primaryColor}/>
      </View>
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
  inputTitle: {
    fontWeight: 'bold',
    fontSize: RFValue(15),
    paddingTop: 10
  },
});

