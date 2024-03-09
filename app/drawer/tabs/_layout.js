import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  // Define the tab screens data
const tabScreens = [
  {
    name: "index",
    title: 'Home',
    icon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
  },
  {
    name: "list",
    title: 'Blog Posts',
    icon: ({ size, color }) => <Ionicons name="list" size={size} color={color} />,
    badge: 9,
    headerShown: false,
  },
  {
    name: "settings",
    title: 'Settings',
    icon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
  },
  {
    name: "action",
    title: 'Action',
    icon: ({ size, color }) => <Ionicons name="alert-circle-outline" size={size} color={color} />,
    onPress: () => alert('Action Performed!')
  },
];

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
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
