import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../types';
import Card, { FeatureCard, TitledCard } from '../../components/Card';
import Colors from '../../constants/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import useColorScheme from '../../hooks/useColorScheme';

export default function JoinCreateHouseScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'JoinCreateHouse'>) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
      <View style={{ marginTop: RFValue(200), }}>
        <Text style={[styles.title, { color: adColors.text, textAlign: 'center', marginBottom: RFValue(30) }]}>Create a house or join?</Text>
      
      </View>
     <TouchableOpacity onPress={() => navigation.replace('JoinHouse')} onLongPress={() => navigation.replace('Root')} style={[styles.link]}>
        <Card color={adColors.primaryColor} style={{ height: "100%", }}>
          <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Join a House</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Login')} onLongPress={() => navigation.replace('Root')} style={styles.link}>
        <Card color={adColors.primaryColor} style={{ height: "100%", }}>
          <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Create a House</Text>
        </Card>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
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
    width: "100%"
  },
});
