import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Card = ({post}) => {
  console.clear();
  console.table(post);
  return (post?.item && (
      <Link href={`/tabs/${post?.item?.id?.toString()}`} asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.title}>{post?.item?.title?.rendered}</Text>
        </TouchableOpacity>
    </Link>)
  );
}