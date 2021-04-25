import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { RootStackParamList } from '../../types';
import Card, { MicroFeatureCard } from '../../components/Card';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export default function SubscriptionScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Subscription'>) {

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
      navigation.replace('JoinCreateHouse');
    }
  };

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
      <Ionicons name="card-sharp" size={54} color={adColors.primaryColor} />
      <Text style={[styles.title, { color: adColors.text }]}>Subscription</Text>

      {/*<Text style={[{ color: adColors.text }]}>Enjoy news stories, summarized to save you time without bias.</Text>*/}

      <Card color={adColors.cardColor} style={{ width: "90%",maxHeight: RFValue(175), borderColor: !buyPremium ? adColors.primaryColor : adColors.background, borderWidth:  1.5}}>
      <TouchableOpacity onPress={() => { toggleBuyPremium(false) }} ><View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View>
            <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>Basic</Text>
            <Text style={{color: adColors.text}}>free forever</Text>
          </View>

            <Ionicons name={buyPremium ? 'md-radio-button-off' : 'md-radio-button-on'} size={24} color={!buyPremium ? adColors.primaryColor : adColors.text} />

        </View>
        <View style={[styles.separator, { backgroundColor: adColors.text }]} />
        <MicroFeatureCard content="No grocery bill splitting" iconcolor={adColors.text} icon="cart" />
        <MicroFeatureCard content="Limited to 2 chores per room mate" iconcolor={adColors.text} icon="list" />
        <MicroFeatureCard content="Upgrade anytime" iconcolor={adColors.text} icon="card" /></View>
        </TouchableOpacity>
      </Card>

      <Card color={adColors.cardColor} style={[{ width: "90%",maxHeight: RFValue(175), borderColor: buyPremium ? adColors.primaryColor : adColors.background, borderWidth:1.5 }]}>
      <TouchableOpacity onPress={() => { toggleBuyPremium(true) }}><View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View>
            <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>Premium</Text>
            <Text style={{color: adColors.text}}>3 months free, then $0.99/month</Text>
          </View>
            <Ionicons name={!buyPremium ? 'md-radio-button-off' : 'md-radio-button-on'} size={24} color={buyPremium ? adColors.primaryColor : adColors.text} />

        </View>
        <View style={[styles.separator, { backgroundColor: adColors.text }]} />
        <MicroFeatureCard content="Grocery bill splitting" iconcolor={adColors.text} icon="cart" />
        <MicroFeatureCard content="Unlimited chores" iconcolor={adColors.text} icon="infinite" />
        <MicroFeatureCard content="Cancel anytime" iconcolor={adColors.text} icon="calendar" /></View>
        </TouchableOpacity>
      </Card>

      <Card color={adColors.cardColor} style={[{ width: "90%",maxHeight: RFValue(175), borderColor: false ? adColors.primaryColor : adColors.background, borderWidth:1.5 }]}>
      <TouchableOpacity onPress={() => { toggleBuyPremium(true) }}><View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View>
            <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>Included in Rent</Text>
            <Text style={{color: adColors.text}}>Use this option if your rental includes a Roomy subscription</Text>
          </View>
            <Ionicons name={!false ? 'md-radio-button-off' : 'md-radio-button-on'} size={24} color={false ? adColors.primaryColor : adColors.text} />

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
