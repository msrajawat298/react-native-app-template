import { Stack } from 'expo-router';

const Layout = () => (
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#171630',
      },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen
      name="index"
      options={{
        title: 'Blog Posts',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="[id]"
      options={{
        title: '',
      }}
    />
  </Stack>
);
export default Layout;
