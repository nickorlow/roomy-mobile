import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../types';
import Card, { FeatureCard } from '../../components/Card';
import Colors from '../../constants/Colors';
import { RFValue } from "react-native-responsive-fontsize";

import useColorScheme from '../../hooks/useColorScheme';
import {resetVars} from "../../roomy-api/ApiFunctions";

export default function WelcomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Welcome'>) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
      <View style={{ marginTop: RFValue(200), paddingBottom: RFValue(250), height: "100%" }}>
        <Text style={[styles.title, { color: adColors.text, textAlign: 'center', marginBottom: RFValue(30) }]}>Welcome to <Text style={{color: "#F59810"}}>Roomy</Text></Text>
        <View style={{ justifyContent: 'center', flex: 1, height: "100%"}}>
          <FeatureCard title="Remember" content="Roomy remembers when to do the chores so you don't have to." icon="bookmarks" iconcolor={adColors.text} />
          <FeatureCard title="Communicate" content="Roomy lets you communicate with roomates in an effective manner to keep on the same page." icon="chatbubbles" iconcolor={adColors.text} />
          <FeatureCard title="Shop" content="Roomy makes shopping easier by allowing you to split shopping bills and have a shared shopping list." icon="cart" iconcolor={adColors.text} />
          <FeatureCard title="Pay" content="Roomy makes it easy for you and your roomates to pay for utilities and rent." icon="card" iconcolor={adColors.text} />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.replace('Login')} onLongPress={() => {resetVars(); navigation.replace('Root');}} style={styles.link}>
        <Card color={adColors.primaryColor} style={{ height: "100%", }}>
          <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Continue</Text>
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
    width: "100%",
    position: 'absolute',
    bottom: RFValue(50),
  },
});
