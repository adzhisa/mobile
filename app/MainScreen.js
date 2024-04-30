import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const MainScreen = () => {
  const navigation = useNavigation(); 

  const goToSettings = () => {
    navigation.navigate('ProfileScreen');
  };

  const goToAnimalScreen = () => {
    navigation.navigate('AnimalScreen');
  };

  const goToWordScreen = () => {
    navigation.navigate('WordScreen');
  };

  const goToListeningScreen = () => { 
    navigation.navigate('ListeningScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./src/drawable/avatarka.png')} style={styles.avatar} />
        <Text style={[styles.greeting, { color: '#FFF', fontFamily: 'fredoka' }]}>Hello, adzhisa</Text>
        <Text style={[styles.subtitle, { color: '#FFF', fontFamily: 'fredoka' }]}>Are you ready to learning today?</Text>
      </View>
      <TouchableOpacity style={styles.settingsButton} onPress={goToSettings}>
        <Text style={[styles.settingsButtonText, { fontFamily: 'fredoka' }]}>Settings ⚙️</Text>
      </TouchableOpacity>
      <Text style={[styles.topUsers, { fontFamily: 'fredoka' }]}>Top users</Text>
      <View style={styles.usersInfoContainer}>
        <TouchableOpacity style={styles.usersInfoButton} disabled={true}>
          <Text style={[styles.usersInfoText, { fontFamily: 'fredoka' }]}>*here will be users with the highest rating*</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.availableExercises, { fontFamily: 'fredoka' }]}>Available exercises</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={goToAnimalScreen}>
          <Image source={require('./src/drawable/parrot_2.png')} style={styles.buttonImage} />
          <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Guess the animal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.pinkButton]} onPress={goToWordScreen}>
          <Image source={require('./src/drawable/notepad.png')} style={styles.buttonImage} />
          <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Word practice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={goToListeningScreen}>
          <Image source={require('./src/drawable/speaker.png')} style={styles.buttonImage} />
          <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Audition</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.greenButton]}>
          <Image source={require('./src/drawable/game_3.png')} style={styles.buttonImage} />
          <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Game</Text>
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
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#410FA3',
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 40,
  },
  greeting: {
    fontSize: 24,
    marginTop: 20,
    color: '#FFF',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    color: '#FFF',
  },
  settingsButton: {
    backgroundColor: '#E5E5E5',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  settingsButtonText: {
    color: '#000',
    fontSize: 18,
  },
  topUsers: {
    fontSize: 20,
    marginBottom: 10,
    paddingTop: 20,
  },
  usersInfoContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  usersInfoButton: {
    backgroundColor: '#E5E5E5',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    height: 60,
  },
  usersInfoText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  availableExercises: {
    fontSize: 20,
    marginBottom: 20,
    paddingTop: 30,
  },
  buttonsContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    height: '35%',
    marginBottom: '4%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
  blueButton: {
    backgroundColor: '#5B7BFE',
  },
  pinkButton: {
    backgroundColor: '#D6185D',
  },
  orangeButton: {
    backgroundColor: '#F76400',
  },
  greenButton: {
    backgroundColor: '#5BA890',
  },
  buttonImage: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
});

export default MainScreen;
