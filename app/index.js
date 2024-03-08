import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      {/* See This to know more about Link :: https://docs.expo.dev/router/navigating-pages/#buttons */}
      <Link href={'/about'} asChild>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
          }}>
          <Text style={{ fontSize: 18 }}>Open about</Text>
          <Ionicons name="arrow-forward" size={18} />
        </TouchableOpacity>
      </Link>

      <Link href={'/nested_page/nested_page'} asChild>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
          }}>
          <Text style={{ fontSize: 18 }}>Open Details</Text>
          <Ionicons name="arrow-forward" size={18} />
        </TouchableOpacity>
      </Link>
      <Link href={'/(tabs)'} asChild>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
          }}>
          <Text style={{ fontSize: 18 }}>Open Tabs</Text>
          <Ionicons name="arrow-forward" size={18} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
export default Page;