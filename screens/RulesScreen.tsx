import React, {useEffect, useState} from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { LongCard, TransparentCard } from "../components/Card";
import { Text, View } from "../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../constants/Colors";
import OSIButton from "../components/OSIButton";
import AddRuleScreen from "../screens/AddRuleScreen";
import {useIsFocused} from "@react-navigation/native";
import ChoreItem from "../components/ChoreListItem";
import {getRules} from "../roomy-api/ApiFunctions";
import RuleCard from "../components/RuleCard";

export default function RulesScreen() {
    const [isVisible, setVisible] = useState(false);
    const oadColors = useColorScheme() != "dark" ? Colors.dark : Colors.light;
    const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;


  const isFocused = useIsFocused();
  const [list, setList] = useState([]);
  const [value, setValue] = useState(0); // integer state
  function useForceUpdate(){
    setValue(value+1); // update the state to force render
  }

  useEffect(() => {
    var locList = [];
    for (var rule of getRules()) {
      locList.push(<RuleCard rule={rule}/>);
    }
    setList(locList);
  }, [value, isFocused]);


  return (
    <View style={styles.container}>
      <View
        style={[
          {
            minHeight: 200,
            backgroundColor: "#F59810",
            width: "100%",
            paddingTop: RFValue(50),
            paddingHorizontal: RFValue(10),
            paddingBottom: RFValue(10),
          },
        ]}
      >
        <TransparentCard
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <TransparentCard>
            <Text style={[styles.title, { paddingBottom: RFValue(8), color: oadColors.text}]}>
              House Rules
            </Text>
            <Text style={[styles.subheader,{color: oadColors.text}]}>
              These are the agreed upon rules of the house.
            </Text>
          </TransparentCard>
        </TransparentCard>
      </View>
      <ScrollView style={[{ width: "100%", height: "100%" }]}>
        <View style={styles.container}>
          <AddRuleScreen isVisible={isVisible} close={() => setVisible(false)}/>
          {list}
        </View>
        <OSIButton value={"Add Rule"} color={adColors.primaryColor} onPress={() => {setVisible(true)}}/>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    fontSize: 18,
    marginVertical: 2,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    // paddingTop: 30
    // justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 20,
    color: "white",
  },
  listItemTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "100%",
  },
});
