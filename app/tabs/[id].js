import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, useWindowDimensions, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
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
export default function SinglePost() {
  const { id } = useLocalSearchParams({ id: '' });
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    console.log('id :: ' + id);
    fetch(`https://blog.vitabletech.in/wp-json/wp/v2/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPostDetails(data))
      .catch((error) => console.error(error));
  }, [id]);

  const { width } = useWindowDimensions();
  const filteredContent = postDetails?.content?.rendered.replace(/<iframe.*?<\/iframe>/gi, '');
  
  return (
      <ScrollView>
        {!postDetails && <ActivityIndicator />}
        {postDetails && (
          <ScrollView style={styles.container}>
            <Stack.Screen  options={{ title: `${postDetails?.title?.rendered}` } }  />
            <Text style={styles.title}>{postDetails?.title?.rendered}</Text>
            <RenderHtml 
              contentWidth={width}
              source={{ html: filteredContent }}
              baseStyle={styles.content} 
            />
          </ScrollView>)}
      </ScrollView>
      
  );
}
