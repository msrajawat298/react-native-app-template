import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#171630',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'User List',
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
};
export default Layout;