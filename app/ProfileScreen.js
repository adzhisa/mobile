import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleChangeLanguage = () => {
    navigation.navigate('ChooseLanguage');
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleGoBack = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image source={require('./src/drawable/back_button.png')} style={styles.backButton} />
        </TouchableOpacity>
        <View style={styles.profileHeader}>
          <Image source={require('./src/drawable/avatarka.png')} style={styles.avatar} />
          <Text style={[styles.profileText, { fontFamily: 'fredoka' }]}>Your profile, adzhisa</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.blueButton]}>
          <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Switch theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={handleChangeLanguage}>
          <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Change mother language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blueButton]}>
          <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Change your image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.redButton]} onPress={handleLogout}>
          <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#410FA3',
    paddingLeft: 20,
    paddingRight: 30,
    marginBottom: 24,
  },
  backButton: {
    width: 10,
    height: 20,
    marginTop: 40,
  },
  profileHeader: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 40,
  },
  profileText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    color: '#FFF',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '70%',
  },
  button: {
    width: '90%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
  blueButton: {
    backgroundColor: '#5B7BFE',
  },
  redButton: {
    backgroundColor: '#ff4133',
  },
});

export default ProfileScreen;
