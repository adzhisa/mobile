import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleForgotPassword = () => {
    console.log('forgot password');
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter email and password');
    } else {
      navigation.navigate('MainScreen');
    }
  };

  const handleSignup = () => {
    navigation.navigate('SignupScreen');
  };

  const handleGoogleSignIn = () => {
    console.log('google');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./src/drawable/back_button.png')} style={styles.backButton} />
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={[styles.headerText, { fontFamily: 'fredoka', fontWeight: 'normal' }]}>Login</Text>
        </View>
      </View>
      <Image source={require('./src/drawable/learn_at_home.png')} style={styles.image} />
      <Text style={[styles.description, { fontFamily: 'fredoka', fontWeight: 'normal' }]}>For free,{'\n'}join now and start learning</Text>
      <View style={styles.inputContainer}>
        <Text style={[styles.inputLabel, { fontFamily: 'fredoka', fontWeight: 'normal' }]}>Email Address</Text>
        <TextInput
          style={[styles.input, { fontFamily: 'fredoka', fontWeight: 'normal' }]}
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.inputLabel, { fontFamily: 'fredoka', fontWeight: 'normal' }]}>Password</Text>
        <TextInput
          style={[styles.input, { fontFamily: 'fredoka', fontWeight: 'normal' }]}
          placeholder="********"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Image source={require('./src/drawable/eye_icon.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordContainer}>
        <Text style={[styles.forgotPassword, { fontFamily: 'fredoka', fontWeight: 'normal' }]}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.loginButton, (email !== '' && password !== '') && styles.enabledButton]} onPress={handleLogin} disabled={email === '' || password === ''}>
        <Text style={[styles.loginButtonText, { fontFamily: 'fredoka', fontWeight: 'normal' }]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignup}>
        <Text style={[styles.signup, { fontFamily: 'fredoka', fontWeight: 'normal' }]}>Not your member? <Text style={styles.signupLink}>Signup</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoogleSignIn}>
        <Text style={[styles.googleSignIn, { fontFamily: 'fredoka', fontWeight: 'normal' }]}>You can use <Text style={styles.googleLink}>Google</Text> for sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    backgroundColor: '#410FA3',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 90,
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
    fontSize: 18,
    fontWeight: 'normal',
    color: '#FFF',
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 40,
  },
  description: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 80,
    fontWeight: 'normal',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 0,
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 35,
  },
  loginButton: {
    backgroundColor: '#5B7BFE',
    width: '90%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
    borderRadius: 20,
    opacity: 0.4,
  },
  enabledButton: {
    opacity: 1,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'normal',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
  forgotPassword: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  signup: {
    fontSize: 16,
    marginTop: 20,
  },
  signupLink: {
    color: 'blue',
  },
  googleSignIn: {
    color: 'black',
    fontSize: 16,
    marginTop: 20,
  },
  googleLink: {
    color: 'blue',
  },
});

export default LoginScreen;
