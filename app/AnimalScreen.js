import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AnimalScreen = () => {
  const navigation = useNavigation();
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const handleGoBack = () => {
    navigation.navigate('MainScreen');
  };

  const handleCheckAnswer = () => {
    if (answer.toLowerCase() === 'cat') {
      setIsCorrect(true);
      setIsWrong(false);
    } else {
      setIsCorrect(false);
      setIsWrong(true);
    }
  };

  const handleNext = () => {
    setAnswer('');
    setIsCorrect(false);
    setIsWrong(false);
  };

  const handleTryAgain = () => {
    setAnswer('');
    setIsCorrect(false);
    setIsWrong(false);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, isCorrect && { backgroundColor: '#5BA890' }, isWrong && { backgroundColor: '#D6185D' }]}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image source={require('./src/drawable/back_button.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Guess the animal</Text>
      </View>
      {!isCorrect && !isWrong && (
        <>
          <Image source={require('./src/drawable/cat.png')} style={styles.animalImage} />
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Write who is on image:</Text>
            <TextInput
              style={styles.input}
              placeholder="Your answer"
              value={answer}
              onChangeText={text => setAnswer(text)}
            />
          </View>
          <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={handleCheckAnswer}>
            <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Check</Text>
          </TouchableOpacity>
        </>
      )}
      {isCorrect && (
        <View style={styles.correctContainer}>
          <Image source={require('./src/drawable/party.png')} style={styles.partyImage} />
          <Text style={[styles.correctText, { fontFamily: 'fredoka' }]}>Holy Molly! That is Right!</Text>
          <TouchableOpacity style={[styles.button, styles.blueButton, { width: '90%' }]} onPress={handleNext}>
            <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
      {isWrong && (
        <View style={styles.correctContainer}>
          <Image source={require('./src/drawable/sad.png')} style={styles.partyImage} />
          <Text style={[styles.wrongText, { fontFamily: 'fredoka' }]}>Eh? Wrong answer :(</Text>
          <Text style={[styles.wrongExplanation, { fontFamily: 'fredoka' }]}>That is: Cat</Text>
          <TouchableOpacity style={[styles.button, styles.blueButton, { width: '90%' }]} onPress={handleNext}>
            <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.blueButton, { width: '90%' }]} onPress={handleTryAgain}>
            <Text style={[styles.buttonText, { fontFamily: 'fredoka' }]}>Try again</Text>
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
    paddingVertical: 20,
  },
  backButton: {
    width: 10,
    height: 20,
    marginTop: 40,
  },
  headerText: {
    fontSize: 18,
    paddingTop: 40,
    color: '#FFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'fredoka',
  },
  animalImage: {
    width: 300,
    height: 250,
    marginVertical: 50,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'fredoka',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    fontSize: 16,
    fontFamily: 'fredoka',
  },
  button: {
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
  blueButton: {
    backgroundColor: '#5B7BFE',
    width: '90%',
    marginTop: 10,
  },
  correctContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  partyImage: {
    width: 200,
    height: 200,
    marginTop: 80,
    marginBottom: 20,
  },
  correctText: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 50,
    fontFamily: 'fredoka',
  },
  wrongText: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 20,
    fontFamily: 'fredoka',
  },
  wrongExplanation: {
    fontSize: 16,
    marginBottom: 30,
    fontFamily: 'fredoka',
  },
});

export default AnimalScreen;
