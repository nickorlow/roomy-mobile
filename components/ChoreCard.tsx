import {LongCard, TransparentCard} from "./Card";
import {Text, View} from "./Themed";
import {Alert, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";
import {useEffect, useState} from "react";
import ChoreItem from "./ChoreListItem";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import {useIsFocused} from "@react-navigation/native";
import AddChoreScreen from "../screens/AddChoreScreen";
import {chores} from "../roomy-api/ApiFunctions";
import {Chore, User} from "../roomy-api/Types";
import {useDispatch, useSelector} from "react-redux";
import {UserState} from "../reducers/userReducer";
import {ChoreState, getChores} from "../reducers/choreReducer";
import ChoreDetailScreen from "../screens/ChoreDetailScreen";
import AllChoresScreen from "../screens/AllChoresScreen";

export default function ChoreCard(props: {title: string, user: string | null | undefined, filterType: boolean}) {

    const chores: Chore[] | null = useSelector<any, ChoreState["chores"]>((state) => state.chores.chores);
    const dispatch = useDispatch()
    const isFocused = useIsFocused();
    const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
    const [isVisible, setVisible] = useState(false);
    const [iscVisible, setcVisible] = useState(false);
    const [value, setValue] = useState(0); // integer state
    var count = 0;

    function useForceUpdate(){
        setValue(value+1); // update the state to force render
    }

    useEffect(() => {
        count = 0;
        dispatch(getChores());
    }, [value, isFocused]);

    return (
        <LongCard style={{minHeight: 500}} color={adColors.cardColor}>
            <AllChoresScreen isVisible={iscVisible} close={() => {setcVisible(false);}}/>

            <AddChoreScreen isVisible={isVisible} close={() => {setVisible(false); useForceUpdate();}}/>
            <View style={{ flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'space-between'}} >
                <TransparentCard>
                    <Text style={[styles.title, {maxWidth: 250, color:adColors.text }]}>{props.title}</Text>
                </TransparentCard>

                <TouchableOpacity onPress={() => {useForceUpdate(); setVisible(true);}}>
                    <Ionicons name="add-circle" color="#F59810" size={36}/>
                </TouchableOpacity>
            </View>

            {Array.isArray(chores) && chores.map((chore, i)=>{
                if(i<3 && (props.filterType ?  props.user == chore.userId : props.user != chore.userId))
                {
                    count++;
                    return <ChoreItem closeFunc={useForceUpdate} chore={chore} key={i} />
                } else if (props.filterType ?  props.user == chore.userId : props.user != chore.userId) {
                    i++;
                    count++;
                } else
                {
                    i++;
                }
            })}
            {count - 3 > 0 &&
                <TouchableOpacity onPress={() => {setcVisible(true); console.log("hi");}}>
                    <Text style={{textAlign: 'center', color: "#F59810", fontWeight: 'bold', fontSize: 25, }}>{count-3} More</Text>
                </TouchableOpacity>
            }
            {count == 0 && <Text style={{textAlign: 'center', fontSize: 25, }}>Nothing Here!</Text>}
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

