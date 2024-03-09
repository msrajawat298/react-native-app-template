import {
    View,
    Image,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
    Text,
  } from 'react-native';
  import React, { useState, useRef } from 'react';
  import { useAuth } from './context/AuthContext';
  import { useRouter } from 'expo-router';
  import Colors from './constants/Colors';
  
  const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const { onRegister } = useAuth();
    const router = useRouter();
  
    const register = async () => {
      setLoading(true);
      if (!email || !password || !username) {
        alert("Field is required");
        setLoading(false);
        return;
      }
      const result = await onRegister(username, email, password);
      setLoading(false);
      if (result && result.error) {
        alert(result.msg);
        return false;
      } 
      alert("Registration successful");
      setEmail('');
      setUsername('');
      setPassword('');
      router.push('/');
    };
  
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwCuIIMBRkkp6nsAjT-U-m2kohkyxhRP1vDcPkoRlXkwtiFqGnFphvaSHDD8eYwQE8zU&usqp=CAU' }}
          style={styles.image}
        />
        <TextInput
          ref={usernameRef}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          autoCapitalize="none"
          placeholder="Enter your Username"
          value={username}
          onChangeText={setUsername}
          style={styles.inputField}
          placeholderTextColor={'#fff'}
        />
        <TextInput
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          autoCapitalize="none"
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
          style={styles.inputField}
          placeholderTextColor={'#fff'}
        />
        <TextInput
          ref={passwordRef}
          returnKeyType="next"
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.inputField}
          placeholderTextColor={'#fff'}
        />
  
        <TouchableOpacity onPress={register} style={styles.button}>
          <Text style={{ color: '#fff' }}>Sign up</Text>
        </TouchableOpacity>
  
        {loading && (
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1, justifyContent: 'center' },
            ]}>
            <ActivityIndicator color="#fff" size="large" />
          </View>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: Colors.background,
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: 100,
      resizeMode: 'contain',
    },
    header: {
      fontSize: 40,
      textAlign: 'center',
      marginBottom: 10,
      color: '#fff',
    },
    subheader: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 40,
      color: '#fff',
    },
    inputField: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderColor: Colors.primary,
      borderRadius: 4,
      padding: 10,
      color: '#fff',
      backgroundColor: Colors.input,
    },
    button: {
      marginTop: 20,
      alignItems: 'center',
      backgroundColor: Colors.primary,
      padding: 12,
      borderRadius: 4,
    },
    outlineButton: {
      marginVertical: 8,
      alignItems: 'center',
      backgroundColor: 'transparent',
      padding: 12,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: Colors.primary,
    },
  });
  
  export default Register;