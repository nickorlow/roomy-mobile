import React, { useState } from 'react';
import {StyleSheet, Modal, useColorScheme, Alert} from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RFValue } from "react-native-responsive-fontsize";
import EmojiButton from '../components/EmojiButton';
import RNPickerSelect from 'react-native-picker-select';
import OSIInput from "../components/OSIInput";
import OSIButton from "../components/OSIButton";
import {addChore, addGroceryItem, currentUser} from "../roomy-api/ApiFunctions";
import {v4 as uuidv4} from 'uuid';


export default function AddGroceryScreen(props: { isVisible: boolean, close: Function }) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;

  const [emoji, setEmoji] = useState("🧽");
  const [quantity, setQuantity] = useState(1);
  const [unitCost, setUnitCost] = useState(0);
  const [name, setName] = useState('');
  const [whoFor, setWhoFor] = useState('');

  function addChoreButtonPress()
  {

    if (name == null || name == "")
    {
      Alert.alert("Please give the item a name");
      return;
    }

    if (emoji == null || emoji == "")
    {
      Alert.alert("Please give the item an Emoji");
      return;
    }

    if (whoFor == null || whoFor == "")
    {
      Alert.alert("Please select who the item is for");
      return;
    }

    if (quantity == null || quantity <= 0)
    {
      Alert.alert("Please set a valid quantity");
      return;
    }

    if (unitCost == null || unitCost <= 0)
    {
      Alert.alert("Please set a valid price");
      return;
    }



    addGroceryItem({
      buyerId: whoFor,
      id: uuidv4(),
      price: 0,
      quantity: 0,
      name: name,
      emoji: emoji
    });

    closeScreen();
  }

  function closeScreen()
  {
    props.close();

    // Clear out vals for next chore
    setQuantity(1);
    setEmoji("🧹");
    setWhoFor('');
    setName('');
    setUnitCost(0.00);
  }


  return (
    <Modal animationType={"slide"} presentationStyle="pageSheet" visible={props.isVisible} onRequestClose={() => props.close()} onDismiss={() => props.close()} style={{ backgroundColor: adColors.background }}>

      <View style={[{ minHeight: 100, backgroundColor: "#F59810", width: "100%", paddingTop: RFValue(25), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10), flexDirection: 'row', justifyContent: 'space-between' }]}>
        <Text style={[styles.title, { paddingBottom: RFValue(8), marginTop: RFValue(25), color: 'white' }]}>Add Grocery Item</Text>
        <Text style={{ fontSize: RFValue(75) }}>{emoji}</Text>
      </View>


      <View style={{ padding: 10 }}>
        <Text style={styles.inputTitle}>Item Name</Text>
        <OSIInput clickFunc={setName} value={name} placeholder="Grocery Name"/>
        <Text style={styles.inputTitle}>Item For</Text>
        <View style={styles.input}>
          <RNPickerSelect
            onValueChange={(value) => setWhoFor(value)}
            items={[
              { label: 'Me', value:  currentUser.id}, // Don't let us create items for other users
              { label: 'For the House', value:  currentUser.homeId},
            ]}
            style={{ inputIOS: { marginTop: RFValue(7) } }} />
        </View>

        <Text style={styles.inputTitle}>Icon</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🧽' />
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🚘' />
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='👖' />
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🛒' />
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🖥️' />
          <EmojiButton clickFunc={setEmoji} currentEmoji={emoji} emoji='🛠️' />
        </View>
        <Text style={styles.inputTitle}>Quantity</Text>
        <OSIInput clickFunc={setQuantity} value={quantity} placeholder="Quantity"/>
        <Text style={styles.inputTitle}>Unit Cost</Text>
        <OSIInput clickFunc={setUnitCost} value={unitCost} placeholder="Unit Cost"/>
      </View>
      <OSIButton value={"Add Item"} color={adColors.primaryColor} onPress={addChoreButtonPress}/>
      <OSIButton value={"Cancel"} color={adColors.systemRed} onPress={closeScreen}/></Modal>
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

