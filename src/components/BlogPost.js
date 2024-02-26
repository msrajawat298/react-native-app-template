// components/BlogPost.js
import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
});

export default function BlogPost({ post }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{post.title.rendered}</Text>
      <RenderHtml 
        source={{ html: post.content.rendered }} 
        baseStyle={styles.content} 
      />
    </ScrollView>
  );
}