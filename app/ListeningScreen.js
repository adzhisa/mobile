import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListeningScreen = () => {
  const navigation = useNavigation();
  const [speechResult, setSpeechResult] = useState('');
  const [buttonText, setButtonText] = useState('Check my speech');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCheckSpeech = () => {
    if (buttonText === 'Check my speech') {
      setButtonText('Try again');
      setSpeechResult('pupumber');
    } else if (buttonText === 'Try again') {
      setButtonText('Yay! Go next');
      setSpeechResult('cucumber');
    } else {
      setButtonText('Check my speech');
      setSpeechResult('');
    }
  };

  const renderTextField = () => {
    if (speechResult === '') {
      return (
        <TextInput
          style={[styles.input, { width: '90%', fontFamily: 'fredoka' }]}
          placeholder="Start talking"
          placeholderTextColor="black"
          editable={false}
        />
      );
    } else {
      return (
        <TextInput
          style={[styles.input, speechResult === 'pupumber' ? styles.redText : styles.greenText, { width: '90%', fontFamily: 'fredoka' }]}
          value={speechResult}
          editable={false}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image source={require('./src/drawable/back_button.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { fontFamily: 'fredoka' }]}>Listening</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.word}>cucumber</Text>
        <Text style={styles.transcription}>[ 'kju:kʌmbə ]</Text>
        <Text style={styles.instruction}>Please press button and say this word. Our service will check your pronunciation</Text>
        <Image source={require('./src/drawable/voice_2.png')} style={styles.voiceIcon} />
        <View style={styles.textFieldContainer}>
          <Text style={styles.resultText}>Your result</Text>
          <View style={[styles.textFieldInnerContainer, { width: '90%' }]}>
            {renderTextField()}
          </View>
        </View>
      </View>
      <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={handleCheckSpeech}>
        <Text style={[styles.buttonText, styles.whiteText, { fontFamily: 'fredoka' }]}>{buttonText}</Text>
      </TouchableOpacity>
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
  content: {
    alignItems: 'center',
    marginTop: 30,
  },
  word: {
    fontSize: 24,
    fontFamily: 'fredoka',
  },
  transcription: {
    fontSize: 18,
    marginTop: 10,
  },
  instruction: {
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'fredoka',
  },
  voiceIcon: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
  textFieldContainer: {
    width: '100%',
    marginTop: 100,
    alignItems: 'center',
  },
  textFieldInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  resultText: {
    fontFamily: 'fredoka',
    fontSize: 14,
    color: '#333',
    alignSelf: 'flex-start',
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 10,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 17,
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
  },
  button: {
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
  },
  whiteText: {
    color: '#FFF',
  },
  blueButton: {
    backgroundColor: '#5B7BFE',
  },
});

export default ListeningScreen;
