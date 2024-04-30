import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WordScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');
  const [correctOption, setCorrectOption] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCheck = () => {
    if (selectedOption) {
      setIsAnswered(true);
    }
  };

  const handleNext = () => {
    setSelectedOption('');
    setCorrectOption('');
    setIsAnswered(false);
  };

  const handleAnswer = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
    }
  };

  const options = ['Муха', 'Садовник', 'Гладиолус', 'Собака'];
  const correctIndex = options.indexOf('Садовник');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image source={require('./src/drawable/back_button.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { fontFamily: 'fredoka' }]}>Word practice</Text>
      </View>
      <View style={styles.wordContainer}>
        <Text style={styles.word}>gardener</Text>
        <Text style={styles.transcription}>[ 'gɑ:dnə ]</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.button,
              styles.greyButton,
              selectedOption === option && !isAnswered && styles.blueButton,
              (isAnswered && option === correctOption) && styles.greenButton,
              (isAnswered && option !== correctOption && option === selectedOption) && styles.wrongButton,
            ]}
            onPress={() => {
              handleAnswer(option);
              setCorrectOption(options[correctIndex]);
            }}
            disabled={isAnswered}
          >
            <Text style={[styles.buttonText, selectedOption === option && !isAnswered && styles.whiteText, { fontFamily: 'fredoka' }]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {isAnswered ? (
        <TouchableOpacity style={[styles.button, styles.blueButton, styles.nextButton]} onPress={handleNext}>
          <Text style={[styles.buttonText, styles.whiteText, styles.boldText, { fontFamily: 'fredoka' }]}>Next</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={[styles.button, styles.blueButton, styles.checkButton]} onPress={handleCheck} disabled={!selectedOption}>
          <Text style={[styles.buttonText, styles.whiteText, styles.boldText, { fontFamily: 'fredoka' }]}>Check</Text>
        </TouchableOpacity>
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
  },
  wordContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  word: {
    fontSize: 24,
    fontFamily: 'fredoka',
  },
  transcription: {
    fontSize: 18,
    marginTop: 10,
    
  },
  buttonsContainer: {
    width: '90%',
    marginTop: 50,
  },
  button: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'fredoka',
    fontWeight: 'bold',
  },
  whiteText: {
    color: '#FFF',
  },
  boldText: {
    fontWeight: 'normal',
  },
  greyButton: {
    backgroundColor: '#E5E5E5',
  },
  blueButton: {
    backgroundColor: '#5B7BFE',
  },
  greenButton: {
    backgroundColor: '#5BA890',
  },
  wrongButton: {
    backgroundColor: '#F76400',
  },
  checkButton: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
});

export default WordScreen;
