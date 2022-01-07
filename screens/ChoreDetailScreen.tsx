import React, { useState} from 'react';
import { StyleSheet, Alert, Modal, useColorScheme } from 'react-native';
import { TransparentCard } from '../components/Card'
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RFValue } from "react-native-responsive-fontsize";
import OSIButton from "../components/OSIButton";
import { Audio } from 'expo-av';
import {getChores, markChoreDone} from "../roomy-api/ApiFunctions";
import {Chore, Home} from "../roomy-api/Types";
import {useDispatch, useSelector} from "react-redux";
import {HomeState} from "../reducers/homeReducer";
import {UserState} from "../reducers/userReducer";

export default function ChoreDetailScreen(props: { isVisible: boolean, close: Function, chore: Chore }) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;

  const [emoji, setEmoji] = useState("🧹");
  const [days, setDays] = useState(['Monday']);
  const [duration, setDuration] = useState('1 - 5 Minutes');
  const [repetetion, setRepetetion] = useState('Daily');
  const [name, setName] = useState('');
  const [doneSound, setDoneSound]: any = useState();
  const dispatch = useDispatch();
  const home: Home | null = useSelector<any, HomeState["home"]>((state) => state.home.home);
  const ustate: UserState | null = useSelector<any, UserState["user"]>((state) => state.user);

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
    var bod: string = JSON.stringify({
      completedDate: (new Date()),
      id: props.chore.id
    });
    console.log(bod)
    fetch('https://api.useroomy.com/home/'+home?.id+'/chores/'+props.chore.id, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: ustate?.auth || '',
        'Authorization-Provider': 'apple'
      },
      body: bod
    }).then((response) =>  {
      playSound();
      props.close();
    }).catch(function (response) {
      Alert.alert("Error!", "We couldn't connect to our servers!");
    });
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

