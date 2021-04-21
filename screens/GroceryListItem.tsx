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




export default function GroceryItem ({ item }) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
    const [isVisible, setVisible] = useState(false);
    const totalPrice = item.quantity * item.unitCost;
    return (
    
    <View style={[styles.item, {backgroundColor: 'transparent', paddingLeft: 0}]}>
      <TouchableOpacity onPress={() => {setVisible(true)}} >
     
      <View style={{ flexDirection: 'row', backgroundColor: 'transparent'}} lightColor="#eee" darkColor="#1D1D1D">
  
      <Text style={{fontSize: RFValue(35)}}>{'🛒'}</Text>
        <TransparentCard style={{paddingLeft: 5}}>
          <Text style={[styles.listItemTitle, {color: adColors.text}]}>{item.itemName}</Text>
          <Text style={[{color: "grey", fontWeight: 'bold'}]}>Quantity: {item.quantity} | Cost: ${totalPrice}</Text>
          <Text style={[{color: "grey", fontWeight: 'bold'}]}>For {item.boughtFor}</Text>
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
  