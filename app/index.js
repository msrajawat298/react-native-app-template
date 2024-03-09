import {
  View,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { Link } from 'expo-router';
import Colors from './constants/Colors';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
      <Text style={styles.header}>Vitabletech</Text>
      <Text style={styles.subheader}>The app to be.</Text>

      <TextInput
        autoCapitalize="none"
        placeholder="Enter you Username"
        value={username}
        onChangeText={setUsername}
        style={styles.inputField}
        placeholderTextColor={'#fff'}
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputField}
        placeholderTextColor={'#fff'}
      />

      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={{ color: '#fff' }}>Sign in</Text>
      </TouchableOpacity>

      <Link href={'/register'} asChild>
        <TouchableOpacity style={styles.outlineButton}>
          <Text style={{ color: '#fff' }}>Create Account</Text>
        </TouchableOpacity>
      </Link>

      <Link href={'/privacy'} asChild>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={{ color: Colors.primary }}>Privacy Policy</Text>
        </TouchableOpacity>
      </Link>
      <Link href={'/userslist'} asChild>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={{ color: Colors.primary }}>User List</Text>
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

export default Login;