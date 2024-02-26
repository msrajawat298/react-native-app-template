import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from './Card';

export default function BlogList({ posts }) {
  const navigation = useNavigation();

  return (
    <FlatList
      data={posts}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => (
        <Card 
          post={item} 
          onPress={() => navigation.navigate('SinglePost', { post: item })}
        />
      )}
    />
  );
}