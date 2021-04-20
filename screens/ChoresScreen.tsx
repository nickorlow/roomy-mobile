import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, VirtualizedList, Button, Alert, DynamicColorIOS } from 'react-native';
import Card, { TitledCard, TransparentCard, LongTitledCard, LongCard } from '../components/Card';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import AddChoreScreen from './AddChoreScreen'
import { Checkbox } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';

import useColorScheme from '../hooks/useColorScheme';





import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';




const getChoreCount = (data) => data.length;
const Chore = ({ name, date, isLate, isDoneSoon, emoji, person }) => (
  
  <View style={[styles.item, {backgroundColor: 'transparent', paddingLeft: 0}]}>
    <View style={{ flexDirection: 'row', backgroundColor: 'transparent'}} lightColor="#eee" darkColor="#1D1D1D">

    <Text style={{fontSize: RFValue(35)}}>{isLate ? '❗' :emoji}</Text>
      <TransparentCard style={{paddingLeft: 5}}>
        <Text style={[styles.listItemTitle, {color: isLate ? "red" : isDoneSoon ? "#F59810" : "black"}]}>{name}</Text>
        <Text style={[{color: isLate ? "red" : isDoneSoon ? "#F59810" : "grey", fontWeight: 'bold'}]}>{date}</Text>
        <Text style={[{color: isLate ? "red" : isDoneSoon ? "#F59810" : "grey", fontWeight: 'bold'}]}>{person}</Text>
      </TransparentCard>
    </View>
  </View>
);
const getChore = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  name: data[index].name,
  date: data[index].date,
  isLate: data[index].isLate,
  isDoneSoon: data[index].isDoneSoon,
  emoji: data[index].emoji,
  person: data[index].person
});


export default function ChoresScreen() {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
     <View style={[{minHeight: 200, backgroundColor:"#F59810", width: "100%", paddingTop:RFValue(50), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10)}]}>
     <TransparentCard style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
       <TransparentCard>
        <Text style={[styles.title, {paddingBottom: RFValue(8)}]}>Chores</Text>
        <Text style={styles.subheader}>You have 5 chores left today.</Text>
        <Text style={styles.subheader}>1 Chore is late.</Text>
       </TransparentCard>
     </TransparentCard>
     </View>
        <ScrollView style={[{ width: "100%", height: "100%" }]}>
          <View style={styles.container}>

            <LongCard color={adColors.cardColor}>
            <View style={{ flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-between'}} >
              <TransparentCard>
                <Text style={[styles.title, {maxWidth: 250, color:adColors.text }]}>Your Chores</Text> 
              </TransparentCard>

              <TouchableOpacity onPress={() => {Alert.alert('Not Implemented!')}}>
                <Ionicons name="add-circle" color="#F59810" size={36}/>
              </TouchableOpacity>
              </View>
              <VirtualizedList
                data={[
                  { name: "Get a new Frontend", date: "Yesterday at 5:00 PM", isLate: true, isDoneSoon: false, emoji: '📱'},
                  { name: "Serve Dinner", date: "Today at 5:30 PM", isLate: false, isDoneSoon: true , emoji: '🍔' },
                  { name: "Finish Roomy App", date: "Friday", isLate: false, isDoneSoon: false , emoji: '📱' },
                ]}
                getItemCount={getChoreCount}
                getItem={getChore}
                scrollEnabled={false}
                renderItem={({ item }) => <Chore name={item.name} date={item.date} isLate={item.isLate} isDoneSoon={item.isDoneSoon} emoji={item.emoji}/>}
              />

<Text style={{textAlign: 'center', color: "#F59810", fontWeight: 'bold', fontSize: 25}}>See All</Text>
            </LongCard>



            <LongCard color={adColors.cardColor}>
            <View style={{ flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-between'}} >
              <TransparentCard>
                <Text style={[styles.title, {maxWidth: 250, color:adColors.text }]}>House Chores</Text> 
              </TransparentCard>

              <TouchableOpacity onPress={() => {Alert.alert('Not Implemented!')}}>
                <Ionicons name="add-circle" color="#F59810" size={36}/>
              </TouchableOpacity>
              </View>
              <VirtualizedList
                data={[
                  { name: "Secure Funding", date: "Yesterday at 5:00 PM", isLate: true, isDoneSoon: false, emoji: '📱', person:'Carson Hammock'},
                  { name: "Launder Money", date: "Today at 5:30 PM", isLate: false, isDoneSoon: true , emoji: '💰', person:'Saul Goodman' },
                  { name: "Cook Meth", date: "Friday", isLate: false, isDoneSoon: false , emoji: '🧑‍🍳', person:'Walter White'},
                ]}
                getItemCount={getChoreCount}
                getItem={getChore}
                scrollEnabled={false}
                renderItem={({ item }) => <Chore name={item.name} date={item.date} isLate={item.isLate} isDoneSoon={item.isDoneSoon} emoji={item.emoji} person={item.person}/>}
              />

<Text style={{textAlign: 'center', color: "#F59810", fontWeight: 'bold', fontSize: 25}}>See All</Text>
            </LongCard>




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
