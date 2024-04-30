import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const ChooseLanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const navigation = useNavigation();

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleChoose = () => {
    if (selectedLanguage === 'English') {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, { fontFamily: 'fredoka' }]}>Language Select</Text>
      </View>
      <Text style={[styles.subHeader, { fontFamily: 'fredoka' }]}>What is your mother language?</Text>
      <View style={styles.languageButtonsContainer}>
        <TouchableOpacity onPress={() => handleLanguageSelect('Russian')} style={[styles.languageButton, selectedLanguage === 'Russian' && styles.selectedLanguageButton]}>
          <Text style={[styles.languageButtonText, selectedLanguage === 'Russian' && styles.selectedLanguageButtonText, { fontFamily: 'fredoka' }]}>Russian</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLanguageSelect('English')} style={[styles.languageButton, selectedLanguage === 'English' && styles.selectedLanguageButton]}>
          <Text style={[styles.languageButtonText, selectedLanguage === 'English' && styles.selectedLanguageButtonText, { fontFamily: 'fredoka' }]}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLanguageSelect('Chinese')} style={[styles.languageButton, selectedLanguage === 'Chinese' && styles.selectedLanguageButton]}>
          <Text style={[styles.languageButtonText, selectedLanguage === 'Chinese' && styles.selectedLanguageButtonText, { fontFamily: 'fredoka' }]}>Chinese</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLanguageSelect('Belarus')} style={[styles.languageButton, selectedLanguage === 'Belarus' && styles.selectedLanguageButton]}>
          <Text style={[styles.languageButtonText, selectedLanguage === 'Belarus' && styles.selectedLanguageButtonText, { fontFamily: 'fredoka' }]}>Belarus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLanguageSelect('Kazakh')} style={[styles.languageButton, selectedLanguage === 'Kazakh' && styles.selectedLanguageButton]}>
          <Text style={[styles.languageButtonText, selectedLanguage === 'Kazakh' && styles.selectedLanguageButtonText, { fontFamily: 'fredoka' }]}>Kazakh</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.chooseButtonContainer}>
        <Button title="Choose" onPress={handleChoose} buttonStyle={[styles.chooseButton, selectedLanguage === 'English' ? styles.chooseButtonEnabled : styles.chooseButtonDisabled]} titleStyle={styles.chooseButtonText} />
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
  headerContainer: {
    backgroundColor: '#410FA3',
    width: '100%',
    alignItems: 'center',
  },
  header: {
    paddingTop: 50,
    paddingVertical: 10,
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'fredoka',
  },
  subHeader: {
    fontSize: 22,
    marginBottom: 20,
    marginTop: 50,
  },
  languageButtonsContainer: {
    paddingTop: 30,
    alignItems: 'center',
    width: '100%',
    height: '68%',
  },
  languageButton: {
    backgroundColor: 'rgba(247, 100, 0, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 5,
    width: '90%',
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  selectedLanguageButton: {
    backgroundColor: 'rgba(247, 100, 0, 1)',
  },
  languageButtonText: {
    fontSize: 22,
    fontFamily: 'fredoka',
    textAlign: 'center',
    lineHeight: 26,
  },
  selectedLanguageButtonText: {
    color: '#FFF',
  },
  chooseButtonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  chooseButton: {
    width: '100%',
    height: '40%',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  chooseButtonEnabled: {
    backgroundColor: 'rgba(91, 123, 254, 1)',
  },
  chooseButtonDisabled: {
    backgroundColor: 'rgba(91, 123, 254, 0.4)',
  },
  chooseButtonText: {
    fontSize: 20,
    fontFamily: 'fredoka',
  },
});

export default ChooseLanguageScreen;
