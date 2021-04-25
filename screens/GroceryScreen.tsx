import React, {useState} from 'react';
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
import {getChores, getItemsToBuy} from './Constants';
import GroceryItem from './GroceryListItem';



export default function GroceryScreen() {

  const [isVisible, setVisible] = useState(false);

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  const list = [];

  for (var item of getItemsToBuy()) {
    list.push(<GroceryItem item={item} />);
  }


  return (
    <View style={styles.container}>
     <View style={[{minHeight: 200, backgroundColor:"#F59810", width: "100%", paddingTop:RFValue(50), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10)}]}>
     <TransparentCard style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
       <TransparentCard>
        <Text style={[styles.title, {paddingBottom: RFValue(8)}]}>Grocery Items</Text>
        <Text style={styles.subheader}>There are 3 items to buy.</Text>
       </TransparentCard>
     </TransparentCard>
     </View>
        <ScrollView style={[{ width: "100%", height: "100%" }]}>
          <View style={styles.container}>

            <LongCard color={adColors.cardColor}>
            <View style={{ flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-between'}} >
              <TransparentCard>
                <Text style={[styles.title, {maxWidth: 250, color:adColors.text }]}>Items to Buy</Text>
              </TransparentCard>

              <TouchableOpacity onPress={() => {setVisible(true)}}>
                <Ionicons name="add-circle" color="#F59810" size={36}/>
              </TouchableOpacity>
              </View>
              {list}

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
