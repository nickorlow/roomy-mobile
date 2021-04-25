import {LongCard, TransparentCard} from "./Card";
import {Text, View} from "./Themed";
import {Alert, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";
import {useEffect, useState} from "react";
import ChoreItem from "../screens/ChoreListItem";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import {useIsFocused} from "@react-navigation/native";
import AddChoreScreen from "../screens/AddChoreScreen";

export default function ChoreCard(props: {listFunction: Function, title: string}) {

    const isFocused = useIsFocused();
    const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
    const [list, setList] = useState([]);
    const [isVisible, setVisible] = useState(false);
    const [value, setValue] = useState(0); // integer state
    function useForceUpdate(){
        setValue(value+1); // update the state to force render
    }

    useEffect(() => {
        var locList = [];
        for (var item of props.listFunction().slice(0,3)) {
            locList.push(<ChoreItem chore={item} closeFunc={useForceUpdate}/>);
        }
        setList(locList);
    }, [value, isFocused]);

    return (
        <LongCard color={adColors.cardColor}>
            <AddChoreScreen isVisible={isVisible} close={() => setVisible(false)}/>
            <View style={{ flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-between'}} >
                <TransparentCard>
                    <Text style={[styles.title, {maxWidth: 250, color:adColors.text }]}>{props.title}</Text>
                </TransparentCard>

                <TouchableOpacity onPress={() => {setVisible(true)}}>
                    <Ionicons name="add-circle" color="#F59810" size={36}/>
                </TouchableOpacity>
            </View>

            {list}

            { ( props.listFunction().length-3 > 0) &&
            <Text style={{textAlign: 'center', color: "#F59810", fontWeight: 'bold', fontSize: 25, }}>{ props.listFunction().length-3} More Today</Text>}
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

