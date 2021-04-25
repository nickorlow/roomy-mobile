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

export default function JoinCreateHouseScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'JoinCreateHouse'>) {

  const [create, setSentNotifs] = useState(true);

  const setCreate = (setWhat : boolean) => {
    setSentNotifs(setWhat);
  };

  const continueButtonPress = () => {
    if(!create)
    {
      navigation.replace('JoinHouse');
    }
    else
    {
      navigation.replace('CreateHouse');
    }
  };

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={54} color={adColors.primaryColor} />
      <Text style={[styles.title, { color: adColors.text }]}>House</Text>

      <Card color={adColors.cardColor} style={{ width: "90%",maxHeight: RFValue(175), borderColor: create ? adColors.primaryColor : adColors.background, borderWidth:  1.5}}>
      <TouchableOpacity onPress={() => { setCreate(true) }} ><View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View>
            <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>Create a House</Text>
            <Text style={{color: adColors.text}}>Create a house for your roommates to join!</Text>
          </View>

            <Ionicons name={!create ? 'md-radio-button-off' : 'md-radio-button-on'} size={24} color={create ? adColors.primaryColor : adColors.text} />

        </View></View>
        </TouchableOpacity>
      </Card>

      <Card color={adColors.cardColor} style={[{ width: "90%",maxHeight: RFValue(175), borderColor: !create ? adColors.primaryColor : adColors.background, borderWidth:1.5 }]}>
      <TouchableOpacity onPress={() => { setCreate(false) }}><View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View>
            <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>Join a House</Text>
            <Text style={{color: adColors.text}}>Join a house that has already been created</Text>
          </View>
            <Ionicons name={create ? 'md-radio-button-off' : 'md-radio-button-on'} size={24} color={!create ? adColors.primaryColor : adColors.text} />

        </View>
</View>
        </TouchableOpacity>
      </Card>

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
});
