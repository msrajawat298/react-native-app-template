import {
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

const TabLayout = () => (
  <MaterialTopTabs
    screenOptions={{
      tabBarActiveTintColor: '#131620',
      tabBarLabelStyle: {
        fontSize: 14, textTransform: 'capitalize', fontWeight: 'bold', width: '100',
      },
      tabBarIndicatorStyle: { backgroundColor: '#1C87ED', height: 3 },
    }}
  >
    <MaterialTopTabs.Screen name="index" options={{ title: 'Chats' }} />
    <MaterialTopTabs.Screen name="Updates" options={{ title: 'Updates' }} />
    <MaterialTopTabs.Screen name="Calls" options={{ title: 'Calls' }} />
  </MaterialTopTabs>
);

export default TabLayout;
