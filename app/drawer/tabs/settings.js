import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { View, Image } from 'react-native';
import { Button, Paragraph, Text } from 'react-native-paper';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Link } from 'expo-router';
import getStyles from '../../styles/settings.style';
import Login from '../../components/login/Login';

const App = () => {
  const styles = getStyles();
  const [toggle, setToggle] = useState(true);
  // ref
  const bottomSheetRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  // callbacks
  const handleOpenPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
    if (index !== -1) setToggle(true);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
    setToggle(false);
  }, []);
  const image = require('../../assets/Logo.png');
  // renders
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="contain"
      />
      {!toggle && <Button title="Snap To 90%" mode="contained" onPress={() => handleOpenPress(1)}> Open Sheet</Button>}
      {toggle && <Button title="Close Sheet" mode="contained" onPress={handleClosePress}> Close Sheet</Button>}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleOpenPress}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          <Paragraph><Link href="https://ui.gorhom.dev/components/bottom-sheet">Learn More about Bottom Sheet:</Link></Paragraph>
          <Login />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default App;
