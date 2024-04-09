import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import BottomSheet from '../../components/CustomBottomSheet/CustomBottomSheet';
import Login from '../../components/login/Login';

const LoginScreen = () => (
  <View>
    <Text>Tab s[Home]</Text>
    <BottomSheet content={<Login />} />
  </View>
);

export default LoginScreen;
