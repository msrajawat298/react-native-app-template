import React, { useEffect, useState } from 'react';
import { Platform, useColorScheme } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider, useAuth } from './context/AuthContext';
import { themes } from './theme/themes';
import loadFonts from './theme/loadFonts';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? themes.dark : themes.light;

  const stackScreens = [
    {
      name: 'index',
      options: { title: 'Home', headerShown: false },
    },
    {
      name: 'drawer',
      options: { headerShown: false },
    },
    {
      name: 'register',
      options: { title: 'Create Account', headerLeft: null },
    },
    {
      name: 'userslist',
      options: { title: 'User List', headerBackTitle: 'Go Back' },
    },
    {
      name: 'privacy',
      options: {
        presentation: 'modal',
        title: 'Privacy',
        headerStyle: { backgroundColor: theme.colors.onPrimaryContainer },
        headerTintColor: '#fff',
        headerShown: Platform.OS !== 'ios',
        headerLeft: null,
      },
    },
  ];

  const InitialLayout = () => {
    const [isReady, setIsReady] = useState(false);
    const { token, initialized } = useAuth();
    const router = useRouter();
    useEffect(() => {
      const handleNavigation = () => {
        if (!initialized || !isReady) return;

        if (token !== '') {
          router.replace('/drawer');
        } else if (!token) {
          router.replace('/');
        }
      };

      handleNavigation();
    }, [token, initialized, isReady, router]);

    useEffect(() => {
      const prepare = async () => {
        await loadFonts();
        setIsReady(true);
      };
      prepare();
    }, []);

    if (!initialized || !isReady) return <ActivityIndicator size={'large'} style={{ flex: 1 }} />;

    return (
      <>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.onPrimaryContainer,
            },
            headerTintColor: '#fff',
          }}>
          {stackScreens.map((screen, index) => (
            <Stack.Screen key={index} name={screen.name} options={screen.options} />
          ))}
        </Stack>
      </>
    );
  };

  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <InitialLayout />
      </AuthProvider>
    </PaperProvider>
  );
}
