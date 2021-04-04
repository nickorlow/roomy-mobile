import * as React from 'react';
import { StyleSheet, FlatList, VirtualizedList, Button, Alert, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Card, { TitledCard, LongTitledCard } from '../components/Card';
import { Text, View } from '../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const getItemCount = (data) => data.length;
const Item = ({ product, req }) => (
  <View style={[styles.item, {backgroundColor: 'transparent'}]}>
    <Text style={styles.listItemTitle}>{product}</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent'}} >
      <Text>{req}</Text><Text >$4.20</Text>
    </View>
  </View>
);
const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  product: data[index].product,
  req: data[index].req
});

const getChoreCount = (data) => data.length;
const Chore = ({ name, date, isDone, isDoneSoon }) => (
  
  <View style={[styles.item, {backgroundColor: 'transparent'}]}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent'}} lightColor="#eee" darkColor="#1D1D1D">
      <View style={{backgroundColor: 'transparent'}}>
        <Text style={[ { color: isDone ? "rgb(100,100,100)" : (isDoneSoon ? "rgb(255,59,48)" : "rgb(10,132,255)") }, styles.listItemTitle, { textDecorationLine: isDone ? "line-through" : "none" }]}>{name}</Text>
        <Text style={[  { color: isDone ? "rgb(100,100,100)" : (isDoneSoon ? "rgb(255,59,48)" : "rgb(10,132,255)") }, { textDecorationLine: isDone ? "line-through" : "none" }]}>{date}</Text>
      </View>
    </View>
  </View>
);
const getChore = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  name: data[index].name,
  date: data[index].date,
  isDone: data[index].isDone,
  isDoneSoon: data[index].isDoneSoon
});


export default function HomeScreen() {

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

            <LongTitledCard title="Notice" color={adColors.cardColor} titleColor={adColors.text}>
              <Text style={{ paddingHorizontal: 10 }}>It is currently Quiet Hours. Keep noise to a minimum and avoid bothering your roomates. Quiet hours will end at 8:00AM.</Text>
            </LongTitledCard>

            <LongTitledCard title="Today at a Glance" color={adColors.cardColor} titleColor={adColors.text}>
              <VirtualizedList
                data={[
                  { name: "Get a new Frontend", date: "Today by 5:00 PM", isDone: true, isDoneSoon: false},
                  { name: "Serve Dinner", date: "Today at 5:30 PM", isDone: false, isDoneSoon: true  },
                  { name: "Finish Roomy App", date: "Friday", isDone: false, isDoneSoon: false  },
                  { name: "Carson's Girlfriend Guest", date: "Arriving at 5:00, Leaving tomorrow", isDone: false, isDoneSoon: false},
                ]}
                getItemCount={getChoreCount}
                getItem={getChore}
                scrollEnabled={false}
                renderItem={({ item }) => <Chore name={item.name} date={item.date} isDone={item.isDone} isDoneSoon={item.isDoneSoon}/>}
              />
            </LongTitledCard>

            <LongTitledCard title="Grocerey List" color={adColors.cardColor} titleColor={adColors.text}>
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
                getItemCount={getItemCount}
                getItem={getItem}
                style={{maxHeight:305}}
                scrollEnabled={false}
                renderItem={({ item }) => <Item product={item.product} req={item.req} />}
              />
              <View style={styles.separator} lightColor="lightgrey" darkColor="rgba(255,255,255,0.1)" />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent'}} >
                <Button onPress={() => Alert.alert('Error!', "This doesn't exist (yet)")} title="View Full List" />
                <Button onPress={() => Alert.alert('Error!')} title="Add" />
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
