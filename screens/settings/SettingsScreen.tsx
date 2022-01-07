import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView} from 'react-native';
import { RootStackParamList } from '../../types';
import Card from '../../components/Card';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { RFValue } from "react-native-responsive-fontsize";
import OSIButton from "../../components/OSIButton";
import { resetVars} from "../../roomy-api/ApiFunctions";
import PremiumCard from "../../components/PremiumCard";
import {Home, User} from "../../roomy-api/Types";
import {useSelector} from "react-redux";
import {UserState} from "../../reducers/userReducer";
import {HomeState} from "../../reducers/homeReducer";


export default function SettingsScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Settings'>) {


  const home: Home | null = useSelector<any, HomeState["home"]>((state) => state.home.home);
  const user: User | null = useSelector<any, UserState["user"]>((state) => state.user.user);
  const [buyPremium, setBuyPremium] = useState(true);
  const [isDeveloper, setIsDeveloper] = useState(false);
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


  function showCode()
  {
    Alert.alert("Roomy Code", home?.id, [{text: "Ok"}]);
  }

  function requestApp()
  {
    Alert.alert("Are you sure?", "This will delete all roomy data!", [{text: "Yes", style:"destructive", onPress: resetApp}, {text: "Cancel",style: "cancel"}]);
  }

  function requestVar()
  {
    Alert.alert("Are you sure?", "This will delete all roomy data!", [{text: "Yes", style:"destructive", onPress: resetVars}, {text: "Cancel",style: "cancel"}]);
  }

  function resetApp()
  {
    resetVars();
    navigation.replace('Welcome');
  }

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (

      <ScrollView>
        <View style={styles.container}>
      <Card color={adColors.cardColor} style={{ width: "90%",paddingBottom: RFValue(15)}}>
      <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>{user?.firstName + " " + user?.lastName}</Text>
        <Text style={{color: adColors.text}}>Member since {user?.createdDate.toString()}</Text>
        <OSIButton onPress={requestApp} value={"Log Out"} color={adColors.systemRed} style={{marginTop: 0}}/>
      </Card>


      <Card color={adColors.cardColor} style={[{ width: "90%", maxHeight: RFValue(315), paddingBottom: RFValue(25)}]}><View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View style={{width: "90%"}}>
            <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>{user?.subscriptionExpirationDate > new Date() ? "Premium" : "Basic"}</Text>
            <Text style={{color: adColors.text}}>{user?.subscriptionExpirationDate > new Date() ? "Ends/Renews on " : "Premium expired on "}{user?.subscriptionExpirationDate.toString()}</Text>
            {user?.subscriptionExpirationDate > new Date() && <Text style={{color: adColors.text}}>You may cancel your subscription via the App Store</Text>}

          </View>
        </View></View>
      </Card>

          {user?.subscriptionExpirationDate > new Date() || <PremiumCard/>}

      <Card color={adColors.cardColor} style={[{ width: "90%", paddingBottom: RFValue(25) }]}>
      <TouchableOpacity onPress={() => { toggleBuyPremium(true) }}><View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View>
            <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>Home</Text>
            <Text style={{color: adColors.text}}>Member of {home?.name}</Text>
          </View>

        </View></View>
        {/*<OSIButton onPress={requestVar} value={"Change House Name"} color={adColors.primaryColor}/>*/}
        <OSIButton onPress={showCode} value={"Show Roomy Code"} color={adColors.primaryColor}/>
        <OSIButton onPress={requestVar} value={"Leave House"} color={adColors.systemRed}/>
        </TouchableOpacity>
      </Card>
      {isDeveloper &&
      <Card color={adColors.cardColor} style={[{ width: "90%", paddingBottom: RFValue(25)}]}>
    <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
            <View>
              <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: adColors.text }]}>Developer</Text>
              <Text style={{color: adColors.text}}>Settings used for Roomy developers.</Text>
            </View>
          </View></View>
        <OSIButton onPress={requestVar} value={"Reset Vars"} color={adColors.systemRed}/>
        <OSIButton onPress={requestApp} value={"Reset App"} color={adColors.systemRed}/>
      </Card>}

      <TouchableOpacity onLongPress={() => {setIsDeveloper(!isDeveloper)}} activeOpacity={1}>
      <View style={{marginTop:RFValue(10), alignItems: 'center', flex: 1}}>
        <Text style={{color: adColors.text}}>Roomy (Codename: Tres Amigos) v1.0</Text>
        <Text style={{color: adColors.text}}>Copyright © Orlow Software Inc</Text>
      </View>
      </TouchableOpacity>
        </View>
      </ScrollView>

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
    marginTop: 50
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
