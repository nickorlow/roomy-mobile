import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { LongCard, TransparentCard } from "../components/Card";
import { Text, View } from "../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../constants/Colors";
import OSIButton from "../components/OSIButton";
import AddRuleScreen from "../screens/AddRuleScreen";

export default function RulesScreen(rules) {
    const [isVisible, setVisible] = useState(false);
    const oadColors = useColorScheme() != "dark" ? Colors.dark : Colors.light;
    const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
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
          <LongCard color={adColors.cardColor}>
          <AddRuleScreen isVisible={isVisible} close={() => setVisible(false)}/>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                justifyContent: "space-between",
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                flexShrink: 1,
              }}
              lightColor="#eee"
              darkColor="#1D1D1D"
            >
              <Text style={{ fontSize: RFValue(35) }}>{"1️⃣"}</Text>
              <TransparentCard style={{ paddingLeft: 5, flex: 1 }}>
                <Text style={[styles.listItemTitle, { color: adColors.text }]}>
                  No Loud Music
                </Text>
                <Text style={[{ color: "grey", fontWeight: "bold" }]}>
                  Do not play music higher than 3 decibels(idk if that is
                  actually the right measurement lol, just demonstrating long
                  description)
                </Text>
              </TransparentCard>
            </View>
          </LongCard>
          <LongCard color={adColors.cardColor}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                justifyContent: "space-between",
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                flexShrink: 1,
              }}
              lightColor="#eee"
              darkColor="#1D1D1D"
            >
              <Text style={{ fontSize: RFValue(35) }}>{"2️⃣"}</Text>
              <TransparentCard style={{ paddingLeft: 5, flex: 1 }}>
                <Text style={[styles.listItemTitle, { color: adColors.text }]}>
                  No Loud Music
                </Text>
                <Text style={[{ color: "grey", fontWeight: "bold" }]}>
                  Do not play music higher than 3 decibels(idk if that is
                  actually the right measurement lol, just demonstrating long
                  description)
                </Text>
              </TransparentCard>
            </View>
          </LongCard>
          <LongCard color={adColors.cardColor}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                justifyContent: "space-between",
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                flexShrink: 1,
              }}
              lightColor="#eee"
              darkColor="#1D1D1D"
            >
              <Text style={{ fontSize: RFValue(35) }}>{"3️⃣"}</Text>
              <TransparentCard style={{ paddingLeft: 5, flex: 1 }}>
                <Text style={[styles.listItemTitle, { color: adColors.text }]}>
                  No Loud Music
                </Text>
                <Text style={[{ color: "grey", fontWeight: "bold" }]}>
                  Do not play music higher than 3 decibels(idk if that is
                  actually the right measurement lol, just demonstrating long
                  description)
                </Text>
              </TransparentCard>
            </View>
          </LongCard>
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
