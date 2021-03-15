import * as React from 'react';
import { StyleSheet, FlatList, VirtualizedList, Button, Alert, DynamicColorIOS } from 'react-native';
import Card, { TitledCard, TransparentCard } from '../components/Card';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import AddChoreScreen from './AddChoreScreen'
import { Checkbox } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';


const getChoreCount = (data) => data.length;
const Chore = ({ name, date, isPastDue, isDone }) => (
  <View style={styles.item} lightColor="#eee" darkColor="#1D1D1D">
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }} lightColor="#eee" darkColor="#1D1D1D">
      <View lightColor="#eee" darkColor="#1D1D1D">
        <Text style={[styles.listItemTitle, { textDecorationLine: isDone ? "line-through" : "none" }]}>{name}</Text>
        <Text style={[isPastDue && { color: "rgb(255,69,58)" }, { textDecorationLine: isDone ? "line-through" : "none" }]}>{date}</Text>
      </View>
      <View lightColor="#eee" darkColor="#1D1D1D">
        <Checkbox
          status={isDone ? 'checked' : 'unchecked'}
          onPress={() => { }}
          disabled={false}
          color={"rgba(255,150,51,1)"}
        />
      </View>
    </View>
  </View>
);
const getChore = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  name: data[index].name,
  date: data[index].date,
  isPastDue: data[index].isPastDue,
  isDone: data[index].isDone
});


export default function ChoresScreen() {

  return (
    <View style={styles.container}>

      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(252,212,166,1)', 'rgba(248,159,55,1)']}
        style={[{ width: "100%", height: "100%" }, styles.container]}
      >
        <ScrollView style={[{ width: "100%", height: "100%" }]}>
          <View style={styles.container}>

            <TitledCard title="House Chores">
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} lightColor="#eee" darkColor="#1D1D1D">
                <TransparentCard>
                  <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>5</Text>
                  <Text>Chores Left</Text>
                </TransparentCard>
                <TransparentCard>
                  <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>5</Text>
                  <Text>Completed</Text>
                </TransparentCard>
                <TransparentCard>
                  <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>50%</Text>
                  <Text>Completed</Text>
                </TransparentCard>
              </View>
              <View style={styles.separator} lightColor="lightgrey" darkColor="rgba(255,255,255,0.1)" />
              <Button onPress={() => Alert.alert('Error!')} title="View House Chores" />
            </TitledCard>


            <TitledCard title="My Chores" style={{ maxHeight: 500 }}>
              <VirtualizedList
                data={[
                  { name: "Get a new Frontend", date: "Today by 5:00 PM" },
                  { name: "Serve Dinner", date: "Today at 5:30 PM" },
                  { name: "Finish Roomy App", date: "Friday" },
                  { name: "Get a new Frontend", date: "Today by 5:00 PM" },
                  { name: "Serve Dinner", date: "Today at 5:30 PM" },
                  { name: "Finish Roomy App", date: "Friday" },
                  { name: "Get a new Frontend", date: "Today by 5:00 PM" },
                  { name: "This one is late!", date: "Today at 5:30 PM", isPastDue: true },
                  { name: "This one is finished!", date: "Friday", isDone: true },
                ]}
                getItemCount={getChoreCount}
                getItem={getChore}
                renderItem={({ item }) => <Chore name={item.name} date={item.date} isPastDue={item.isPastDue} isDone={item.isDone} />}
              />
              <View style={styles.separator} lightColor="lightgrey" darkColor="rgba(255,255,255,0.1)" />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }} lightColor="#eee" darkColor="#1D1D1D">
                <Button onPress={() => Alert.alert('Error!')} title="Edit List" />
                <Button onPress={() => Alert.alert('Error!')} title="Add Chore" />
              </View>
            </TitledCard>
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
