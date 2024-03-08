import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Main from './src/Main';
export default function App() {
  return (
    <PaperProvider>
      <Main/>
    </PaperProvider>
  );
}