import * as React from 'react';
import { StyleSheet, FlatList, VirtualizedList, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Card, { TitledCard, LongTitledCard, TransparentCard, LongCard } from '../components/Card';
import { Text, View } from '../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import ChoreItem from './ChoreListItem';
import { getChores, getMyChores } from './Constants';

const getItemCount = (data) => data.length;
const Item = ({ product, req }) => (
  <View style={[styles.item, {backgroundColor: 'transparent'}]}>
   
    <View style={{ flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-between'}} >
      <TransparentCard style={{paddingLeft: RFValue(10)}}>
        <Text style={styles.listItemTitle}>{product.substring(0,24)+(product.length > 24 ? '...' : '')}</Text>
        <Text style={{fontWeight: 'bold', color: "grey"}}>{req}</Text>
      </TransparentCard>
      <TouchableOpacity onPress={() => {Alert.alert('We should ask for a vote on this button press')}}>
      <Text style={{fontSize: RFValue(35)}}>{req == "For the whole Apartment" ? '🗳️': ''}</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  product: data[index].product,
  req: data[index].req
});

const getChoreCount = (data) => data.length;

const getChore = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  name: data[index].name,
  date: data[index].date,
  isLate: data[index].isLate,
  isDoneSoon: data[index].isDoneSoon,
  emoji: data[index].emoji
});


export default function HomeScreen() {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  const oadColors = useColorScheme() != "dark" ? Colors.dark : Colors.light;
  const list = [];

  for (var item of getMyChores().slice(0,3)) {
    list.push(<ChoreItem chore={item} />);
  }

  return (
    <View style={styles.container}>
     <View style={[{minHeight: 200, backgroundColor:"#F59810", width: "100%", paddingTop:RFValue(50), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10)}]}>
       <Text style={[styles.title, {paddingBottom: RFValue(8), color: oadColors.text}]}>Good Evening, Nicholas</Text>
       <Text style={[styles.subheader,{color: oadColors.text}]}>Nobody is home.</Text>
       <Text style={[styles.subheader,{color: oadColors.text}]}>You have 5 chores left today.</Text>
       <Text style={[styles.subheader,{color: oadColors.text}]}>Carson's guest will arrive in 15 minutes.</Text>
       <TransparentCard style={{ flexDirection: 'row', paddingTop: 15}}>
         <Ionicons name="moon" color={oadColors.text} size={24}/>
        <Text style={[styles.subheader, {paddingTop:RFValue(3), paddingLeft: RFValue(10), color: oadColors.text}]}>It is currently quiet hours</Text>
       </TransparentCard>
     </View>
        <ScrollView style={[{ width: "100%", height: "100%" }]}>
          <View style={styles.container}>

            <LongCard color={adColors.cardColor}>
            <View style={{ flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-between'}} >
              <TransparentCard>
                <Text style={[styles.title, {maxWidth: 250, color:adColors.text }]}>Chores</Text> 
              </TransparentCard>

              <TouchableOpacity onPress={() => {Alert.alert('Not Implemented!')}}>
                <Ionicons name="add-circle" color="#F59810" size={36}/>
              </TouchableOpacity>
              </View>
              
            {list}
              

<Text style={{textAlign: 'center', color: "#F59810", fontWeight: 'bold', fontSize: 25}}>4 More This Week</Text>
            </LongCard>

            <LongCard color={adColors.cardColor}>
            <View style={{ flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-between'}} >
              <TransparentCard>
                <Text style={[styles.title, {maxWidth: 250, color:adColors.text }]}>Groceries</Text> 
                <Text style={{paddingLeft: 5, color:"grey", fontWeight: 'bold'}}>Next grocery run: Saturday at 5:00 PM</Text>
              </TransparentCard>   
              <TouchableOpacity onPress={() => {Alert.alert('Not Implemented!')}}>
                <Ionicons name="add-circle" color="#F59810" size={36}/>
              </TouchableOpacity>
              </View>
              <VirtualizedList
                data={[
                  { product: 'Eggs', req: "For the whole Apartment" },
                  { product: 'Salad', req: "For Carson Hammock" },
                  { product: 'Space Exploration Technologies, Inc Falcon 9 Reusable Rocket', req: 'For Nicholas Orlowsky' },
                  
                ]}
                getItemCount={getItemCount}
                getItem={getItem}
                scrollEnabled={false}
                renderItem={({ item }) => <Item product={item.product} req={item.req} />}
              />
              <Text style={{textAlign: 'center', color: "#F59810", fontWeight: 'bold', fontSize: 25}}>4 More Items</Text>
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
