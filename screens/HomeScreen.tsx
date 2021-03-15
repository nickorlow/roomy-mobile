import * as React from 'react';
import { StyleSheet, FlatList, VirtualizedList, Button, Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


const getItemCount = (data) => data.length;
const Item = ({ product, req  }) => (
  <View style={styles.item} lightColor="#eee" darkColor="#1D1D1D">
    <Text style={styles.listItemTitle}>{product}</Text>
    <View style={{flexDirection: 'row',justifyContent: 'space-between',}} lightColor="#eee" darkColor="#1D1D1D">
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
const Chore = ({ name, date  }) => (
  <View style={styles.item} lightColor="#eee" darkColor="#1D1D1D">
    <Text style={styles.listItemTitle}>{name}</Text>
    <Text>{date}</Text>
  </View>
);
const getChore = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  name: data[index].name,
  date: data[index].date
});


export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
      <View  style={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15, width: "100%", backgroundColor: "linear-gradient(0deg, rgba(255,150,51,1) 0%, rgba(255,128,5,0.4) 100%)", padding: 10,  alignItems: 'center'}}>
        <Text style={[styles.title, {paddingTop:0}]}>March 14th, 2021</Text>
        <View lightColor="#eee" darkColor="#1D1D1D" style={{borderRadius: 15, width: "90%", padding: 10, marginTop: 10}}>
        <Text style={styles.subheader}>Chores</Text>
        <View style={styles.separator} lightColor="lightgrey" darkColor="rgba(255,255,255,0.1)" />
        <VirtualizedList
        data={[
          {name: "Get a new Frontend", date: "Today by 5:00 PM"},
          {name: "Serve Dinner", date: "Today at 5:30 PM"},
          {name: "Finish Roomy App", date: "Friday"},
        ]}
        getItemCount={getChoreCount}
        getItem={getChore}
        renderItem={({ item }) => <Chore name={item.name} date={item.date}/>}
         />
      </View>
      </View>
      
     


      <View lightColor="#eee" darkColor="#1D1D1D" style={{borderRadius: 15, width: "85%", padding: 10, marginTop: 25, maxHeight: 500}}>
        <Text style={styles.subheader}>Grocerey List</Text> 
        <View style={styles.separator} lightColor="lightgrey" darkColor="rgba(255,255,255,0.1)" />
        <VirtualizedList
        data={[
          {product: 'Eggs', req: "House"},
          {product: 'Salad', req: "Tyler McArty"},
          {product: 'Beans', req: 'House'},
          {product: 'Texas Native Hardwood Mulch', req: 'Nicholas Orlowsky'},
          {product: 'Texas Native Hardwood Mulch', req: 'Nicholas Orlowsky'},
          {product: 'Texas Native Hardwood Mulch', req: 'Nicholas Orlowsky'},
          
          {product: 'Space Exploration Technologies, Inc Falcon 9 Reusable Rocket', req: 'Nicholas Orlowsky'},
        ]}
        getItemCount={getItemCount}
        getItem={getItem}
        renderItem={({ item }) => <Item product={item.product} req={item.req}/>}
         />
        <View style={styles.separator} lightColor="lightgrey" darkColor="rgba(255,255,255,0.1)" />
        <View style={{flexDirection: 'row',justifyContent: 'space-between',}} lightColor="#eee" darkColor="#1D1D1D">
    
        <Button onPress={() => Alert.alert('Error!')} title="View Full List"/>
        <Button onPress={() => Alert.alert('Error!')} title="Add"/>
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
