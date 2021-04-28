import React, { useState } from 'react';
import { StyleSheet, Modal, useColorScheme, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import EmojiButton from '../components/EmojiButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import OSIChooser from '../components/OSIChooser';
import RNPickerSelect from 'react-native-picker-select';
import OSIInput from "../components/OSIInput";
import OSIButton from "../components/OSIButton";

export default function AddGroceryScreen(props: { isVisible: boolean, close: Function }) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;

  const [days, setDays] = useState(['Monday']);
  const [name, setName] = useState('');
  return (
    <Modal animationType={"slide"} presentationStyle="pageSheet" visible={props.isVisible} onRequestClose={() => props.close()} onDismiss={() => props.close()} style={{ backgroundColor: adColors.background }}>

      <View style={[{ minHeight: 100, backgroundColor: "#F59810", width: "100%", paddingTop: RFValue(25), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10), flexDirection: 'row', justifyContent: 'space-between' }]}>
        <Text style={[styles.title, { paddingBottom: RFValue(8), marginTop: RFValue(25), color: 'white' }]}>Add Rule</Text>
        <Text style={{ fontSize: RFValue(75) }}>📝</Text>
      </View>


      <View style={{ padding: 10 }}>
        <Text style={styles.inputTitle}>Rule Name</Text>
        <OSIInput clickFunc={setName} value={name} placeholder="Rule Name"/>
        <Text style={styles.inputTitle}>Rule Description</Text>
        <TextInput multiline numberOfLines={4} style={styles.input} />
      </View>
     <OSIButton value={"Add Rule"} color={adColors.primaryColor} onPress={props.close}/>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 100,
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

