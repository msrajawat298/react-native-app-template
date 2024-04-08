import { View, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import {useTheme, Text, TextInput, ActivityIndicator} from 'react-native-paper';
import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { Link } from 'expo-router';

const Login = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.colors.onPrimaryContainer,
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
    button: {
      marginTop: 20,
      alignItems: 'center',
      backgroundColor: theme.colors.background,
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
      borderColor: theme.colors.onPrimaryContainer,
    },
  });
  const [username, setUsername] = useState('atuny0');
  const [password, setPassword] = useState('9uQFF1Lh');
  const [loading, setLoading] = useState(false);

  const { onLogin } = useAuth();

  const login = async () => {
    setLoading(true);
    if (!username || !password) {
      alert("Field is required");
      setLoading(false);
      return false;
    }
    const result = await onLogin(username, password);
    if (result && result.error) {
      alert(result.msg);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwCuIIMBRkkp6nsAjT-U-m2kohkyxhRP1vDcPkoRlXkwtiFqGnFphvaSHDD8eYwQE8zU&usqp=CAU' }}
        style={styles.image}
      />
      <Text style={styles.subheader}>The app to be.</Text>
      
      <TextInput
        autoCapitalize="none"
        label="Enter you Username"
        value={username}
        onChangeText={setUsername}
      />
      <View style={{ height: 10 }} />
      <TextInput
        label="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={{ color: theme.colors.primary }}>Sign in</Text>
      </TouchableOpacity>

      <Link href={'/register'} asChild>
        <TouchableOpacity style={styles.outlineButton}>
          <Text style={{ color: '#fff' }}>Create Account</Text>
        </TouchableOpacity>
      </Link>

      <Link href={'/privacy'} asChild>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={{ color: theme.colors.background}} >Privacy Policy</Text>
        </TouchableOpacity>
      </Link>
      <Link href={'/userslist'} asChild>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={{ color: theme.colors.background }}>User List</Text>
        </TouchableOpacity>
      </Link>

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

export default Login;