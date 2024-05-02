import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { loadFonts } from './app/fonts'; 
import WelcomeScreen from './app/WelcomeScreen';
import ChooseLanguageScreen from './app/ChooseLanguageScreen';
import LoadingScreen from './app/LoadingScreen';
import InternetScreen from './app/InternetScreen';
import LoginScreen from './app/LoginScreen';
import SignupScreen from './app/SignupScreen';
import MainScreen from './app/MainScreen';
import ProfileScreen from './app/ProfileScreen';
import AnimalScreen from './app/AnimalScreen'; 
import WordScreen from './app/WordScreen';
import ListeningScreen from './app/ListeningScreen';

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
