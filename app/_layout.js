import Colors from './constants/Colors';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
{/*
    Learn more about stack :: https://docs.expo.dev/router/advanced/stack/
    Learn More about Stack option :: https://reactnavigation.org/docs/native-stack-navigator/#options
*/}

const InitialLayout = () => {
  const { token, initialized } = useAuth();
  const router = useRouter();
  const segments = useSegments();
  
  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === 'tabs';
    if (token && !inAuthGroup) {
      router.replace('/drawer');
    } else if (!token && inAuthGroup) {
      router.replace('/');
    }
  }, [token, initialized]);

  if (!initialized) return <ActivityIndicator size={'large'} style={{ flex: 1 }} />;

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name="tabs" options={{ headerShown: false }} />
        <Stack.Screen name="drawer" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ title: 'Create Account' }} />
        <Stack.Screen name="userslist" options={{ title: 'User List', headerBackTitle: 'Go Back' }} />
        <Stack.Screen
          name="privacy"
          options={{
            presentation: 'modal',
            title: 'Privacy',
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerTintColor: '#fff',
            headerShown: Platform.OS !== 'ios'
          }}
        />
      </Stack>
    </>
  );
};
export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}