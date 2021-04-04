import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Card, { FeatureCard, TitledCard } from '../components/Card';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import useColorScheme from '../hooks/useColorScheme';

import { RootStackParamList } from '../types';

export default function TabTwoScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Debug'>) {
  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Debug Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity onPress={() => navigation.replace('Welcome')} onLongPress={() => navigation.replace('Root')} style={styles.link}>
          <Card color={adColors.systemBlue} >
            <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Reset Roomy</Text>
          </Card>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subcontent: {
    fontSize: 20,
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
