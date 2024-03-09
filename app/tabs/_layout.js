import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'Blog Posts',
          tabBarIcon: ({ size, color }) => <Ionicons name="list" size={size} color={color} />,
          tabBarBadge: 9,
          headerRight: () => (
            <Link href={'/'} replace>
              <Ionicons name="log-out-outline" size={28} color={'#fff'} />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="[id]"
        options={{
          title: '',
          href: null,
        }}
      />
    </Tabs>
  );
}
