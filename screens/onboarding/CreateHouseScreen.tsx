import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RootStackParamList } from '../../types';
import Card from '../../components/Card';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import OSIInput from '../../components/OSIInput';

export default function JoinCreateHouseScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'CreateHouse'>) {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  

  const continueButtonPress = () => {
    navigation.replace('Root');
  };

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={54} color={adColors.primaryColor} />
      <Text style={[styles.title, { color: adColors.text }]}>Create a House</Text>

      <View style={{ padding: 10, width: '90%' }}>
        <Text style={[styles.inputTitle, { color: adColors.text }]}>House Name</Text>
        <OSIInput clickFunc={setName} value={name} placeholder="House Name"/>

        <Text style={[styles.inputTitle, { color: adColors.text }]}>Address</Text>
        <OSIInput clickFunc={setAddress} value={name} placeholder="Address"/>

        <Text style={[styles.inputTitle, { color: adColors.text }]}>ZIP Code</Text>
        <OSIInput clickFunc={setZip} value={name} placeholder="ZIP Code"/>
      </View>

      <TouchableOpacity onPress={() => continueButtonPress()} style={styles.link}>
        <Card color={adColors.primaryColor} style={{ height: "100%", }}>
          <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Continue</Text>
        </Card>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  appleButton: {
    width: '100%',
    height: 45,
    shadowColor: '#555',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3
    },
    marginVertical: 15,
  },
  separator: {
    marginVertical: RFValue(10),
    height: 1,
    width: '100%',
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
    marginBottom: RFValue(5)
  },
  subcontent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  subtitle: {
    fontSize: RFValue(22),
    fontWeight: 'bold',
    marginBottom: 20
  },
  link: {
    height: 90,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "100%"
  },
  inputTitle: {
    fontWeight: 'bold',
    fontSize: RFValue(15),
    marginTop: 10,
    paddingTop: 10
  },
});
