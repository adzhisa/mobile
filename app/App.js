import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { loadFonts } from './fonts'; 
import WelcomeScreen from './WelcomeScreen';
import ChooseLanguageScreen from './ChooseLanguageScreen';
import LoadingScreen from './LoadingScreen';
import InternetScreen from './InternetScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
import AnimalScreen from './AnimalScreen'; 
import WordScreen from './WordScreen';
import ListeningScreen from './ListeningScreen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    async function loadAppResources() {
      await loadFonts(); 
    }
    loadAppResources();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Internet" component={InternetScreen} /> 
        <Stack.Screen name="ChooseLanguage" component={ChooseLanguageScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="AnimalScreen" component={AnimalScreen} /> 
        <Stack.Screen name="WordScreen" component={WordScreen} />
        <Stack.Screen name="ListeningScreen" component={ListeningScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
