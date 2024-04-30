import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Internet');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./src/drawable/hello_icon.png')} style={styles.image} />
      <Text style={[styles.text, { fontFamily: 'fredoka' }]}>Language App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#410FA3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    color: '#FFF',
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'fredoka',
  },
});

export default LoadingScreen;
