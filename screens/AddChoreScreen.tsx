import * as React from 'react';
import { StyleSheet, FlatList, VirtualizedList, Button, Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


const getItemCount = (data) => data.length;
const Item = ({ product, req }) => (
  <View style={styles.item} lightColor="#eee" darkColor="#1D1D1D">
    <Text style={styles.listItemTitle}>{product}</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }} lightColor="#eee" darkColor="#1D1D1D">
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
const Chore = ({ name, date, isPastDue, isDone }) => (
  <View style={styles.item} lightColor="#eee" darkColor="#1D1D1D">
    <Text style={[styles.listItemTitle, { textDecorationLine: isDone ? "line-through" : "none" }]}>{name}</Text>
    <Text style={{ color: isPastDue ? "rgb(255,69,58)" : "white", textDecorationLine: isDone ? "line-through" : "none" }}>{date}</Text>
  </View>
);
const getChore = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  name: data[index].name,
  date: data[index].date,
  isPastDue: data[index].isPastDue,
  isDone: data[index].isDone
});


export default function AddChoreScreen() {

  return (
    <View style={styles.container}>
      <View lightColor="#eee" darkColor="#1D1D1D" style={{ borderRadius: 15, width: "90%", padding: 10, marginTop: 30 }}>
        <Text style={styles.subheader}>Chores</Text>
        <View style={styles.separator} lightColor="lightgrey" darkColor="rgba(255,255,255,0.1)" />
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
            { name: "Finish Roomy App", date: "Friday", isDone: true },
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
      </View>
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
    backgroundColor: "linear-gradient(0deg, rgba(255,150,51,1) 0%, rgba(255,128,5,0.4) 100%)"
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
