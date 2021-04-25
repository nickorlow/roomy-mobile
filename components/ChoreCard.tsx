import {LongCard, TransparentCard} from "./Card";
import {Text, View} from "./Themed";
import {Alert, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {getMyChores} from "../screens/Constants";
import * as React from "react";
import {useEffect, useState} from "react";
import ChoreItem from "../screens/ChoreListItem";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import {useIsFocused} from "@react-navigation/native";

export default function ChoreCard() {

    const isFocused = useIsFocused();
    const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
    const [list, setList] = useState([]);
    const [value, setValue] = useState(0); // integer state
    function useForceUpdate(){
        setValue(value+1); // update the state to force render
    }

    useEffect(() => {
        var locList = [];
        for (var item of getMyChores().slice(0,3)) {
            locList.push(<ChoreItem chore={item} closeFunc={useForceUpdate}/>);
        }
        setList(locList);
    }, [value, isFocused]);

    return (
        <LongCard color={adColors.cardColor}>
            <View style={{ flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-between'}} >
                <TransparentCard>
                    <Text style={[styles.title, {maxWidth: 250, color:adColors.text }]}>Chores</Text>
                </TransparentCard>

                <TouchableOpacity onPress={() => {Alert.alert('Not Implemented!')}}>
                    <Ionicons name="add-circle" color="#F59810" size={36}/>
                </TouchableOpacity>
            </View>

            {list}

            { (getMyChores().length-3 > 0) &&
            <Text style={{textAlign: 'center', color: "#F59810", fontWeight: 'bold', fontSize: 25, }}>{getMyChores().length-3} More Today</Text>}
        </LongCard>
    )

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
        fontSize: 35,
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

