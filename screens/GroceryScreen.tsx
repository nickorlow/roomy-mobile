import * as React from 'react';
import { StyleSheet, FlatList, VirtualizedList, Button, Alert, DynamicColorIOS } from 'react-native';
import Card, { TitledCard, TransparentCard, LongTitledCard } from '../components/Card';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import AddChoreScreen from './AddChoreScreen'
import { Checkbox } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';

import useColorScheme from '../hooks/useColorScheme';

const getListCount = (data) => data.length;
const Item = ({ itemName, date, addedBy, quantity, bought }) => (
  <View style={[styles.item, { backgroundColor: 'transparent'}]} >
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }} >
      <View style={{ backgroundColor: 'transparent'}}>
        <Text style={[styles.listItemTitle, { textDecorationLine: bought ? "line-through" : "none" }]}>{itemName} Quantity: {quantity}</Text>
        <Text style={[{ textDecorationLine: bought ? "line-through" : "none" }]}>{addedBy}</Text>
      </View>
      <View style={{ backgroundColor: 'transparent'}}>
        <Checkbox
          status={bought ? 'checked' : 'unchecked'}
          onPress={() => { }}
          disabled={false}
          color={"rgba(255,150,51,1)"}
        />
      </View>
    </View>
  </View>
);
const getGroceryList = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  itemName: data[index].itemName,
  date: data[index].date,
  addedBy: data[index].addedBy,
  quantity: data[index].quantity,
  bought: data[index].bought
});

export default function GroceryScreen() {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  return (
    <View style={styles.container}>

      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(252,212,166,1)', 'rgba(248,159,55,1)']}
        style={[{ width: "100%", height: "100%" }, styles.container]}
      >
        <ScrollView style={[{ width: "100%", height: "100%" }]}>
          <View style={styles.container}>

            <LongTitledCard title="Grocery List"  color={adColors.cardColor} titleColor={adColors.text}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'transparent' }} >
                <TransparentCard>
                  <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>5</Text>
                  <Text>Items Remaining</Text>
                </TransparentCard>
                <TransparentCard>
                  <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>5</Text>
                  <Text>Items Bought</Text>
                </TransparentCard>
              </View>
            </LongTitledCard>

            <LongTitledCard title="Grocery List Items" style={{ maxHeight: 500 }}  color={adColors.cardColor} titleColor={adColors.text}> 
                <VirtualizedList
                    data={[
                      { product: 'Eggs', req: "House" },
                      { product: 'Salad', req: "Carson Hammock" },
                      { product: 'Beans', req: 'House' },
                      { product: 'Texas Native Hardwood Mulch', req: 'Nicholas Orlowsky' },
                      { product: 'Texas Native Hardwood Mulch', req: 'Nicholas Orlowsky' },
                      { product: 'Texas Native Hardwood Mulch', req: 'Nicholas Orlowsky' },
                      { product: 'Space Exploration Technologies, Inc Falcon 9 Reusable Rocket', req: 'Nicholas Orlowsky' }, 
                    ]}
                getItemCount={getListCount}
                getItem={getGroceryList}
                style={{maxHeight:305}}
                scrollEnabled={false}
                renderItem={({ item }) => <Item itemName={item.itemName} addedBy={item.addedBy} />}
              />
              <View style={styles.separator} lightColor="lightgrey" darkColor="rgba(255,255,255,0.1)" />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between',  backgroundColor: 'transparent'}}>
                <Button onPress={() => Alert.alert('Error!')} title="Edit List" />
                <Button onPress={() => Alert.alert('Error!')} title="Add Item" />
              </View>
            </LongTitledCard>
 
          </View>
        </ScrollView>
      </LinearGradient>
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
    // paddingTop: 30
    // justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listItemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
});
