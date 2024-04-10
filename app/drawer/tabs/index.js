import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { useNavigation } from 'expo-router';
import HomeScreen from '../profile';

const Tab = () => {
  const navigation = useNavigation();
  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <HomeScreen />
    // <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    //   <Text>Tab [Home]</Text>
    //   <Button title="Open Drawer" onPress={onToggle} />
    // </View>
  );
};

export default Tab;
