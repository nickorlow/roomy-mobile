import {LongCard, TransparentCard} from "./Card";
import {Text, View} from "./Themed";
import {Alert, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {getItemsToBuy, groceryItems} from "../roomy-api/ApiFunctions";
import * as React from "react";
import {useEffect, useState} from "react";
import ChoreItem from "./ChoreListItem";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import {useIsFocused} from "@react-navigation/native";
import GroceryListItem from "./GroceryListItem";
import AddGroceryScreen from "../screens/AddGroceryScreen";
import {GroceryItem} from "../roomy-api/Types";
import {useDispatch, useSelector} from "react-redux";
import {ChoreState} from "../reducers/choreReducer";
import {getGroceries, GroceryState} from "../reducers/groceryReducer";

export default function GroceryCard() {

    const [isVisible, setVisible] = useState(false);
    const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
    const isFocused = useIsFocused();
    const [value, setValue] = useState(0);
    const [list, setList] = useState([]);
    const groceries: GroceryItem[] | null = useSelector<any, GroceryState["groceries"]>((state) => state.groceries.groceries);
    const dispatch = useDispatch();

    function useForceUpdate(){
        setValue(value+1); // update the state to force render
    }

    useEffect(() => {
        dispatch(getGroceries());
    }, [value, isFocused]);

    return (
        <LongCard color={adColors.cardColor}>
            <AddGroceryScreen isVisible={isVisible} close={() => {setVisible(false); useForceUpdate();}}/>
            <View style={{ flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-between'}} >
                <TransparentCard>
                    <Text style={[styles.title, {maxWidth: 250, color:adColors.text }]}>Items to Buy</Text>
                </TransparentCard>

                <TouchableOpacity onPress={() => {setVisible(true)}}>
                    <Ionicons name="add-circle" color="#F59810" size={36}/>
                </TouchableOpacity>
            </View>

            {Array.isArray(groceries) && groceries?.map((groc, i) => {<GroceryListItem item={groc} key={i} />})}

            <Text style={{textAlign: 'center', color: "#F59810", fontWeight: 'bold', fontSize: 25}}>See All</Text>
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

