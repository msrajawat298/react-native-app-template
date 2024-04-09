import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Link, useNavigation } from 'expo-router';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';

const TabLayout = () => {
  const { onLogout } = useAuth();
  const navigation = useNavigation();
  const DrawerToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  // Define the tab screens data
  const tabScreens = [
    {
      name: 'index',
      title: 'Home',
      icon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
    },
    {
      name: 'list',
      title: 'Blog Posts',
      icon: ({ size, color }) => <Ionicons name="list" size={size} color={color} />,
      badge: 9,
    },
    {
      name: 'settings',
      title: 'Settings',
      icon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
    },
    {
      name: 'action',
      title: 'Action',
      icon: ({ size, color }) => <Ionicons name="alert-circle-outline" size={size} color={color} />,
      onPress: () => alert('Action Performed!'),
    },
    {
      name: 'LoginScreen',
      title: 'Login',
      icon: ({ size, color }) => <FontAwesome name="users" size={size} color={color} />,
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#171630',
        },
        headerTintColor: '#fff',
        headerLeft: () => (
          <TouchableOpacity onPress={DrawerToggle} style={{ marginLeft: 18, marginRight: 18 }}>
            <FontAwesome5 name="bars" size={20} color="#fff" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <Link href="/" replace asChild>
            <TouchableOpacity onPress={onLogout}>
              <Ionicons name="log-out-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </Link>
        ),
      }}

    >
      {tabScreens.map((screen, index) => (
        <Tabs.Screen
          key={index}
          name={screen.name}
          options={{
            title: screen.title,
            tabBarIcon: screen.icon,
            tabBarBadge: screen.badge,
            headerShown: screen.headerShown,
          }}
          listeners={screen.onPress ? () => ({ tabPress: (e) => { e.preventDefault(); screen.onPress(); } }) : undefined}
        />
      ))}
    </Tabs>
  );
}
export default TabLayout;