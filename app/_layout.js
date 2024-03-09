import { Stack } from 'expo-router';

{/*
    Learn more about stack :: https://docs.expo.dev/router/advanced/stack/
    Learn More about Stack option :: https://reactnavigation.org/docs/native-stack-navigator/#options
*/}

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#171630',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: true }} />
      <Stack.Screen name="about" options={{ title: 'About', headerBackTitle: 'Go Back' }} />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      <Stack.Screen name="drawer" options={{ headerShown: false }} />

      <Stack.Screen
        name="nested_page/nested_page"
        options={{ presentation: 'transparentModal', title: 'Details' }}
      />
    </Stack>
  );
};

export default RootLayout;