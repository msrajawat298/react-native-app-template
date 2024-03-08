import React from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider, MD3DarkTheme, MD3LightTheme, Button} from 'react-native-paper';
import AppContent from './src/AppContent';

export default function App() {
  const colorScheme = useColorScheme();
  const paperTheme = colorScheme === 'dark' ? { ...MD3DarkTheme, color: 'red'} : { ...MD3LightTheme };
  return (
    <PaperProvider theme={paperTheme}>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <AppContent/>
    </PaperProvider>
  );
}