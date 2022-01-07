import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { TransparentCard } from '../components/Card';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import ChoreCard from "../components/ChoreCard";
import GroceryCard from "../components/GroceryCard";
import {useSelector} from "react-redux";
import {User} from "../roomy-api/Types";
import {UserState} from "../reducers/userReducer";


export default function HomeScreen() {

  const user: User | null = useSelector<any, UserState["user"]>((state) => state.user.user);
  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  const oadColors = useColorScheme() != "dark" ? Colors.dark : Colors.light;

  return (
    <View style={styles.container}>
     <View style={[{minHeight: 200, backgroundColor:"#F59810", width: "100%", paddingTop:RFValue(50), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10)}]}>
       <Text style={[styles.title, {paddingBottom: RFValue(8), color: oadColors.text}]}>Good Evening, {user?.firstName}</Text>
       <Text style={[styles.subheader,{color: oadColors.text}]}>Nobody is home.</Text>
       <Text style={[styles.subheader,{color: oadColors.text}]}>You have 5 chores left today.</Text>
       <Text style={[styles.subheader,{color: oadColors.text}]}>Carson's guest will arrive in 15 minutes.</Text>
       <TransparentCard style={{ flexDirection: 'row', paddingTop: 15}}>
         <Ionicons name="moon" color={oadColors.text} size={24}/>
        <Text style={[styles.subheader, {paddingTop:RFValue(3), paddingLeft: RFValue(10), color: oadColors.text}]}>It is currently quiet hours</Text>
       </TransparentCard>

     </View>
        <ScrollView style={[{ width: "100%", height: "100%" }]}>
          <View style={styles.container}>
            <ChoreCard title={"My Chores"}  user={user?.id} filterType={false}/>
            <GroceryCard/>
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    fontSize: 18,
    height: 44
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "transparent"
  },
  title: {
    fontSize: RFValue(30),
    color: 'white',
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 20,
    color: 'white'
  },
  listItemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
});
