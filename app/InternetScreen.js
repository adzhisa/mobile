import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InternetScreen = () => {
  const [isLoading, setIsLoading] = useState(false); 
  const navigation = useNavigation();

  const checkInternetConnection = async () => {
    setIsLoading(true); 
    try {
      const response = await fetch('https://www.google.com');
      if (response.ok) {
        navigation.navigate('Welcome'); 
      }
    } catch (error) {
      console.error('Error checking internet connection:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  const retryCheckConnection = () => {
    checkInternetConnection(); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      {isLoading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#007BFF" />
      ) : (
        <View style={styles.content}>
          <Text style={styles.emoji}>😞</Text>
          <Text style={styles.text}>No internet connection</Text>
          <TouchableOpacity style={styles.button} onPress={retryCheckConnection}>
            <Text style={styles.buttonText}>Check again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#410FA3',
    height: 80,
  },
  loader: {
    marginVertical: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 140,
    marginBottom: 20,
    fontFamily: 'fredoka',
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'fredoka',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    height: '8%',
    backgroundColor: '#5B7BFE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'fredoka',
  },
});

export default InternetScreen;
