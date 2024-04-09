import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import getStyles from './style';

const Login = () => {
  const styles = getStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Please enter your account here</Text>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="envelope" size={20} color="#999" style={styles.icon} />
        <TextInput
          label="Email or phone number"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="lock" size={20} color="#999" style={styles.icon} />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.googleLoginButton}>
          <FontAwesome5 name="google" size={20} color="#fff" style={styles.googleIcon} />
          <Text style={styles.googleLoginText}>G FontAwesome5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookLoginButton}>
          <FontAwesome5 name="facebook" size={20} color="#fff" style={styles.facebookIcon} />
          <Text style={styles.facebookLoginText}>f FontAwesome5</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signUpContainer} onPress={handleLogin}>
        <Text style={styles.signUpText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>Don't have any account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
