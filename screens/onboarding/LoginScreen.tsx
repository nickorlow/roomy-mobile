import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../types';
import Card, { FeatureCard, TitledCard } from '../../components/Card';
import Colors from '../../constants/Colors';
import { AsyncStorage } from "react-native";
import * as AppleAuthentication from 'expo-apple-authentication';
import useColorScheme from '../../hooks/useColorScheme';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { State } from 'react-native-gesture-handler';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {


  const [isIos, setIsIOS] = useState(false);

  const toggleBuyPremium = async () => {
    setIsIOS(await AppleAuthentication.isAvailableAsync());

  };

  useEffect(() => {
    const onFocus = () => {
      toggleBuyPremium();
    }
    const focusListener = navigation.addListener('focus', onFocus)!


  }, []) // empty array of dependencies


  const adColors = useColorScheme() == "dark" ? Colors.dark : Colors.light;
  const isDark = useColorScheme() == "dark";
  return (
    <View style={styles.container}>
      <View style={{ marginTop: RFValue(200), paddingBottom: RFValue(350), height: "100%" }}>
        <Text style={[styles.title, { color: adColors.text, textAlign: 'center', marginBottom: 100 }]}>Let's get you logged in</Text>
        <View style={{ justifyContent: 'center', flex: 1, height: "100%" }}>
          <FeatureCard title="Secure" content="Roomy uses Sign in with Apple, guaranting your safety." icon="lock-closed" iconcolor={adColors.text} />
          <FeatureCard title="Private" content="Roomy will never share your personal information with third parties." icon="eye-off" iconcolor={adColors.text} />
        </View>
      </View>

      { isIos ? <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={isDark ? AppleAuthentication.AppleAuthenticationButtonStyle.WHITE : AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={15}
        style={styles.linkApple}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            await AsyncStorage.setItem('credential.apple', JSON.stringify(credential));

            
            navigation.replace('Location');
          } catch (e) {
            Alert.alert("Error", "Sign in with Apple failed.");
            if (e.code === 'ERR_CANCELED') {
              navigation.replace('Location')
              // handle that the user canceled the sign-in flow
            } else {
              navigation.replace('Location')
              // handle other errors
            }
          }
        }} />
        :
        <TouchableOpacity onPress={() => navigation.replace('Location')} onLongPress={() => navigation.replace('Root')} style={styles.link}>
          <Card color={adColors.systemBlue} style={{ height: "100%", }}>
            <Text style={[styles.subcontent, { textAlign: 'center', marginTop: 3 }]}>Continue</Text>
          </Card>
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20
  },
  subcontent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  linkApple: {
    height: 60,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "90%",
    position: 'absolute',
    bottom: 50,
  },
  link: {
    height: 90,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "100%",
    position: 'absolute',
    bottom: 50,
  },
});
