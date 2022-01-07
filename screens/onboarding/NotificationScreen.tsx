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
import {User} from "../../roomy-api/Types";
import {useSelector} from "react-redux";
import {UserState} from "../../reducers/userReducer";

export default function NotificationScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Notification'>) {


  const user: User | null = useSelector<any, UserState["user"]>((state) => state.user.user);
  const [sendNotifs, setSentNotifs] = useState(true);

  const setNotifs = (setWhat : boolean) => {
    setSentNotifs(setWhat);
  };

  const continueButtonPress = () => {
    if(!sendNotifs)
    {
      Alert.alert("Are you sure?", "You're less likely to continue to be informed if you aren't reminded");
    }
    else
    {
      if(user?.isPremium) {
        if(user?.homeId != "") {
          navigation.replace('Root');
        } else {
          navigation.replace('JoinCreateHouse');
        }
      } else {
        navigation.replace('Subscription')
      }
    }
  };

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
      <Ionicons name="notifications" size={54} color={adColors.primaryColor} />
      <Text style={[styles.title, { color: adColors.text }]}>Notifications</Text>

      {/*<Text style={[{ color: adColors.text }]}>Enjoy news stories, summarized to save you time without bias.</Text>*/}

      <Card color={adColors.cardColor} style={{ width: "90%",maxHeight: RFValue(175), borderColor: sendNotifs ? adColors.primaryColor : adColors.background, borderWidth:  1.5}}>
      <TouchableOpacity onPress={() => { setNotifs(true) }} ><View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View>
            <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>On</Text>
            <Text style={{color: adColors.text}}>Get reminded to do chores</Text>
          </View>

            <Ionicons name={!sendNotifs ? 'md-radio-button-off' : 'md-radio-button-on'} size={24} color={sendNotifs ? adColors.primaryColor : adColors.text} />

        </View>
        <View style={[styles.separator, { backgroundColor: adColors.text }]} />
        <MicroFeatureCard content="Make a habit of doing chores" iconcolor={adColors.text} icon="time" />
        <MicroFeatureCard content="We won't spam you with ads" iconcolor={adColors.text} icon="radio" />
        <MicroFeatureCard content="Turn off anytime" iconcolor={adColors.text} icon="md-notifications-off-circle" /></View>
        </TouchableOpacity>
      </Card>

      <Card color={adColors.cardColor} style={[{ width: "90%",maxHeight: RFValue(175), borderColor: !sendNotifs ? adColors.primaryColor : adColors.background, borderWidth:1.5 }]}>
      <TouchableOpacity onPress={() => { setNotifs(false) }}><View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View>
            <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>Off</Text>
            <Text style={{color: adColors.text}}>We'll leave you alone</Text>
            <Text style={{color: adColors.systemRed}}>Not Reccomended</Text>
          </View>
            <Ionicons name={sendNotifs ? 'md-radio-button-off' : 'md-radio-button-on'} size={24} color={!sendNotifs ? adColors.primaryColor : adColors.text} />

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
