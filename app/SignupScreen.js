import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();
  const [registrationStep, setRegistrationStep] = useState(1); 

  const handleContinue = () => {
    setRegistrationStep(2); 
  };

  const handleSignup = () => {
    navigation.navigate('MainScreen'); 
  };

  const isContinueEnabled = firstName !== '' && lastName !== '' && email !== '';
  const isSignupEnabled = password !== '' && confirmPassword !== '';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./src/drawable/back_button.png')} style={styles.backButton} />
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.headerText}>Signup</Text>
        </View>
      </View>
      <Text style={styles.title}>{registrationStep === 1 ? 'Create an Account' : 'Choose a Password'}</Text>
      {registrationStep === 1 ? (
        <>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your First Name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <TouchableOpacity
            style={[styles.continueButton, isContinueEnabled ? styles.enabledButton : null]}
            onPress={handleContinue}
            disabled={!isContinueEnabled}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Image source={require('./src/drawable/eye_icon.png')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
              <Image source={require('./src/drawable/eye_icon.png')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.signupButton, isSignupEnabled ? styles.enabledButton : null]}
            onPress={handleSignup}
            disabled={!isSignupEnabled}>
            <Text style={styles.signupButtonText}>Signup</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already your member? <Text style={styles.loginLink}>Login</Text></Text>
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
    backgroundColor: '#410FA3',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
    paddingLeft: 20,
    paddingRight: 36,
    marginBottom: 24,
  },
  backButton: {
    paddingVertical: 10,
    width: 10,
    height: 20,
    marginLeft: 10,
    marginTop: 40,
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'fredoka',
  },
  title: {
    fontSize: 22,
    marginVertical: 50,
    fontFamily: 'fredoka',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 5,
    fontFamily: 'fredoka',
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 0,
    fontSize: 16,
    fontFamily: 'fredoka',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 35,
  },
  continueButton: {
    backgroundColor: '#5B7BFE',
    width: '90%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 15,
    borderRadius: 20,
    opacity: 0.4,
  },
  enabledButton: {
    opacity: 1,
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'fredoka',
  },
  signupButton: {
    backgroundColor: '#5B7BFE',
    width: '90%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 15,
    borderRadius: 20,
    opacity: 0.4,
  },
  signupButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'fredoka',
  },
  loginText: {
    fontSize: 16,
    fontFamily: 'fredoka',
  },
  loginLink: {
    color: 'blue',
    fontFamily: 'fredoka',
  },
});

export default SignupScreen;
