import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text, Button } from 'react-native-elements';

const WelcomeScreen = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const screenWidth = Dimensions.get('window').width;

  const handleSkip = () => {
    navigation.navigate('ChooseLanguage');
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Image source={require('./src/drawable/start_icon1.png')} style={styles.image} />
            <View style={styles.pageIndicator}>
              <View style={[styles.dot, step === 1 && styles.activeDot]} />
              <View style={[styles.dot, step === 2 && styles.activeDot]} />
              <View style={[styles.dot, step === 3 && styles.activeDot]} />
            </View>
            <Text style={styles.title}>Confidence in your words</Text>
            <Text style={styles.subtitle}>With conversation-based learning, you'll be talking from lesson one</Text>
            <View style={[styles.buttonContainer, { width: screenWidth }]}>
              <Button title="Next" onPress={() => setStep(step + 1)} buttonStyle={styles.button} titleStyle={styles.buttonText} />
            </View>
          </>
        );
      case 2:
        return (
          <>
            <Image source={require('./src/drawable/start_icon2.png')} style={styles.image} />
            <View style={styles.pageIndicator}>
              <View style={[styles.dot, step === 1 && styles.activeDot]} />
              <View style={[styles.dot, step === 2 && styles.activeDot]} />
              <View style={[styles.dot, step === 3 && styles.activeDot]} />
            </View>
            <Text style={styles.title}>Take your time to learn</Text>
            <Text style={styles.subtitle}>Develop a habit of learning and make it a part of your daily routine</Text>
            <View style={[styles.buttonContainer, { width: screenWidth }]}>
              <Button title="More" onPress={() => setStep(step + 1)} buttonStyle={styles.button} titleStyle={styles.buttonText} />
            </View>
          </>
        );
      case 3:
        return (
          <>
            <Image source={require('./src/drawable/start_icon3.png')} style={styles.image} />
            <View style={styles.pageIndicator}>
              <View style={[styles.dot, step === 1 && styles.activeDot]} />
              <View style={[styles.dot, step === 2 && styles.activeDot]} />
              <View style={[styles.dot, step === 3 && styles.activeDot]} />
            </View>
            <Text style={styles.title}>The lessons you need to learn</Text>
            <Text style={styles.subtitle}>Using a variety of learning styles to learn and retain</Text>
            <View style={[styles.buttonContainer, { width: screenWidth }]}>
              <Button title="Choose a language" onPress={() => navigation.navigate('ChooseLanguage')} buttonStyle={styles.button} titleStyle={styles.buttonText} />
            </View>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      <TouchableOpacity onPress={handleSkip}>
        <Text style={styles.skip}>Skip onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  pageIndicator: {
    flexDirection: 'row',
    marginTop: 120,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C4C4C4',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#f76400',
  },
  title: {
    marginTop: 40,
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'fredoka',
  },
  subtitle: {
    width: '100%',
    marginTop: 40,
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    fontFamily: 'fredoka',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 60,
  },
  button: {
    borderRadius: 12,
    backgroundColor: 'rgba(91, 123, 254, 1)',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'fredoka',
  },
  skip: {
    marginTop: 15,
    fontSize: 12,
    color: '#555',
    fontFamily: 'fredoka',
  },
});

export default WelcomeScreen;
