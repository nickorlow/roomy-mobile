import React, { useState} from 'react';
import {StyleSheet, Alert, Modal, useColorScheme, ScrollView} from 'react-native';
import {LongCard, TransparentCard} from '../components/Card'
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RFValue } from "react-native-responsive-fontsize";
import {Chore, Home} from "../roomy-api/Types";
import {useDispatch, useSelector} from "react-redux";
import {HomeState} from "../reducers/homeReducer";
import {UserState} from "../reducers/userReducer";
import {ChoreState} from "../reducers/choreReducer";
import ChoreItem from "../components/ChoreListItem";
import OSIButton from "../components/OSIButton";

export default function AllChoresScreen(props: { isVisible: boolean, close: Function}) {

  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  const dispatch = useDispatch();
  const home: Home | null = useSelector<any, HomeState["home"]>((state) => state.home.home);
  const ustate: UserState | null = useSelector<any, UserState["user"]>((state) => state.user);
  const chores: Chore[] | null = useSelector<any, ChoreState["chores"]>((state) => state.chores.chores);
  const [value, setValue] = useState(0); // integer state


  function useForceUpdate(){
    setValue(value+1); // update the state to force render
  }

  React.useEffect(() => {

  }, [value]);

  return (

    <Modal animationType={"slide"} presentationStyle="pageSheet" visible={props.isVisible} onRequestClose={() => props.close()} onDismiss={() => props.close()} style={{ backgroundColor: adColors.background }}>
      <View style={[{ minHeight: 100, backgroundColor: "#F59810", width: "100%", paddingTop: RFValue(25), paddingHorizontal: RFValue(10), paddingBottom: RFValue(10), flexDirection: 'row', justifyContent: 'space-between' }]}>
        <TransparentCard>
          <Text style={[styles.title, { marginTop: RFValue(25), color: 'white' }]}>All Chores</Text>
          <Text style={{color: 'white'}}>{chores?.length} Chores in the next 2 Weeks</Text>
          </TransparentCard>


      </View>
      <ScrollView>
        {Array.isArray(chores) && chores.map((chore, i)=>{return <ChoreItem closeFunc={useForceUpdate} chore={chore} key={i} />})}
      </ScrollView>
      <OSIButton style={{marginBottom: 15}} onPress={props.close} value={"Close"} color={"red"}/>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 5,
    backgroundColor: 'rgba(225,225,225,.75)',
    padding: 5,
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  inputTitle: {
    fontWeight: 'bold',
    fontSize: RFValue(15),
    paddingTop: 10
  },
});

