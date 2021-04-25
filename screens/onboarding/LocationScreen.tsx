import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RootStackParamList } from '../../types';
import Card, { FeatureCard } from '../../components/Card';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export default function SubscriptionScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Location'>) {


  const continueButtonPress = () => {

    navigation.replace('Notification');
  };

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
      <View style={{ marginTop: RFValue(20), paddingBottom: RFValue(300), height: "100%", flex:1, alignItems:'center' }}>
        <Ionicons name="md-location-sharp" size={54} color={adColors.primaryColor} />
        <Text style={[styles.title, { color: adColors.text, marginBottom: RFValue(50) }]}>Location</Text>

        <View style={{ justifyContent: 'center', flex: 1, height: "100%" }}>


          {/*<Text style={[{ color: adColors.text }]}>Enjoy news stories, summarized to save you time without bias.</Text>*/}

          <FeatureCard title="Stay Safe" content="Roomy can share your location with your roomates so they know you're safe at alll times." icon="heart" iconcolor={adColors.text} />
          <FeatureCard title="Private" content="Roomy will never share your location with third parties." icon="eye-off" iconcolor={adColors.text} />
          <FeatureCard title="Opt Out" content="You can opt out of location sharing at any time." icon="hand-right" iconcolor={adColors.text} />

        </View></View>
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => continueButtonPress()} style={styles.link}>
          <Card color={adColors.primaryColor} style={{ height: "100%", }}>
            <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Continue</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => continueButtonPress()} style={styles.link}>

          <Text style={[{ textAlign: 'center', marginTop: 3, color: adColors.primaryColor }]}>No Thanks</Text>

        </TouchableOpacity>
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

    marginTop: RFValue(100)
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: RFValue(5)
  },
  subcontent: {
    fontSize: 20,
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
  linkContainer: {
    width: "100%",
    position: 'absolute',
    bottom: RFValue(0),
  },
});
