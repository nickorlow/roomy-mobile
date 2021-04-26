import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../types';
import Colors from '../../constants/Colors';
import { RFValue } from "react-native-responsive-fontsize";
import useColorScheme from '../../hooks/useColorScheme';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useEffect, useState} from "react";

export default function JoinHouseScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'JoinHouse'>) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);


  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.replace('Root');
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={{ marginTop: RFValue(200), paddingBottom: RFValue(250), height: "100%" }}>
        <Text style={[styles.title, { color: adColors.text, textAlign: 'center', marginBottom: RFValue(30) }]}>Scan the Roomy House Code</Text>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{height: RFValue(350)}}
        />
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
