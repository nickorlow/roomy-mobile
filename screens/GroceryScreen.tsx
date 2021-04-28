import React from 'react';
import { StyleSheet } from 'react-native';
import { TransparentCard} from '../components/Card';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import GroceryCard from "../components/GroceryCard";
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';



export default function GroceryScreen() {
  const oadColors = useColorScheme() != "dark" ? Colors.dark : Colors.light;
  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>
     <View style={[{minHeight: 200, backgroundColor:"#F59810", width: "100%", paddingTop:RFValue(50), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10)}]}>
     <TransparentCard style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
       <TransparentCard>
       <Text style={[styles.title, { paddingBottom: RFValue(8), color: oadColors.text}]}>Grocery Items</Text>
       <Text style={[styles.subheader,{color: oadColors.text}]}>There are 3 items to buy.</Text>
       </TransparentCard>
     </TransparentCard>
     </View>
        <ScrollView style={[{ width: "100%", height: "100%" }]}>
          <View style={styles.container}>

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
    marginVertical: 2
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "transparent"
    // paddingTop: 30
    // justifyContent: 'center',
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
