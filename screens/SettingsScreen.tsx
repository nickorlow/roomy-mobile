import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../types';
import Card, { MicroFeatureCard, TitledCard, FeatureCard } from '../components/Card';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default function SettingsScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Settings'>) {

  const [buyPremium, setBuyPremium] = useState(true);

  const toggleBuyPremium = (setWhat : boolean) => {
    setBuyPremium(setWhat);
  };

  const continueButtonPress = () => {
    if(!buyPremium)
    {
      Alert.alert("Are you sure?", "You can try a 1 week trial of ProtoNews premium");
    }
    else
    {
      navigation.replace('Home')
    }
  };

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
      <Card color={adColors.cardColor} style={{ width: "90%",maxHeight: RFValue(175)}}>
      <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>Nicholas Orlowsky</Text>
        <Text style={{color: adColors.text}}>Member since March 29th, 2021</Text>
      </Card>


      <Card color={adColors.cardColor} style={[{ width: "90%",maxHeight: RFValue(175) }]}>
      <TouchableOpacity onPress={() => { toggleBuyPremium(true) }}><View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View>
            <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>Premium</Text>
            <Text style={{color: adColors.text}}>Renews on April 29th, 2021</Text>
          </View>
        </View></View>
        </TouchableOpacity>
      </Card>

      <Card color={adColors.cardColor} style={[{ width: "90%",maxHeight: RFValue(175) }]}>
      <TouchableOpacity onPress={() => { toggleBuyPremium(true) }}><View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View>
            <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>Location</Text>
            <Text style={{color: adColors.text}}>Austin, Texas</Text>
          </View>
        </View></View>
        </TouchableOpacity>
      </Card>
      <View style={{marginTop:RFValue(10), alignItems: 'center', flex: 1}}>
        <Text style={{color: adColors.text}}>ProtoNews (Prototype News App) v1.0</Text>
        <Text style={{color: adColors.text}}>Copyright © Nicholas Orlowsky</Text>
      </View>
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
});
