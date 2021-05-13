import {Text, View} from "./Themed";
import {RFValue} from "react-native-responsive-fontsize";
import {LongCard, TransparentCard} from "./Card";
import React, {useState} from "react";
import {Rule} from "../roomy-api/Types";
import {StyleSheet, useColorScheme} from "react-native";
import Colors from "../constants/Colors";

export default function RuleCard(props: {rule: Rule}) {

    const [isVisible, setVisible] = useState(false);
    const oadColors = useColorScheme() != "dark" ? Colors.dark : Colors.light;
    const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;

    return (
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
        <TransparentCard style={{ paddingLeft: 5, flex: 1 }}>
        <Text style={[styles.listItemTitle, { color: adColors.text }]}>
            {props.rule.title}
        </Text>
        <Text style={[{ color: "grey", fontWeight: "bold" }]}>
            {props.rule.description}
        </Text>
        </TransparentCard>
        </View>
        </LongCard>
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
