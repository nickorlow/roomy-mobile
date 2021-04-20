import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../types';
import Card, { FeatureCard, TitledCard } from '../../components/Card';
import Colors from '../../constants/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import useColorScheme from '../../hooks/useColorScheme';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function JoinHouseScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'JoinHouse'>) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
      <View style={{ marginTop: RFValue(200), paddingBottom: RFValue(250), height: "100%" }}>
        <Text style={[styles.title, { color: adColors.text, textAlign: 'center', marginBottom: RFValue(30) }]}>Scan the Roomy House Code</Text>
          {<QRCodeScanner />}
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.link}>

<Text style={[{ textAlign: 'center', marginTop: 3, color: adColors.primaryColor }]}>Enter Code Manually</Text>

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
    width: "100%",
    position: 'absolute',
    bottom: RFValue(50),
  },
});
