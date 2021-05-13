import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { TransparentCard } from './Card';
import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RFValue } from 'react-native-responsive-fontsize';
import {GroceryItem, User} from "../roomy-api/Types"
import {getUser} from "../roomy-api/ApiFunctions";



export default function GroceryListItem (props: {item: GroceryItem }) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
    const [isVisible, setVisible] = useState(false);
    const totalPrice = props.item.quantity * props.item.price;
    const user: User = getUser(props.item.buyerId)[0];
    return (

    <View style={[styles.item, {backgroundColor: 'transparent', paddingLeft: 0}]}>
      <TouchableOpacity onPress={() => {setVisible(true)}} >

      <View style={{ flexDirection: 'row', backgroundColor: 'transparent'}} lightColor="#eee" darkColor="#1D1D1D">

      <Text style={{fontSize: RFValue(35)}}>{'🛒'}</Text>
        <TransparentCard style={{paddingLeft: 5}}>
          <Text style={[styles.listItemTitle, {color: adColors.text}]}>{ props.item.name}</Text>
          <Text style={[{color: "grey", fontWeight: 'bold'}]}>Quantity: {props.item.quantity} | Total Cost: ${totalPrice}</Text>
          <Text style={[{color: "grey", fontWeight: 'bold'}]}>For {user.firstName+" "+user.lastName}</Text>
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
