import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BlogList from './src/components/BlogList';
import SinglePost from './src/screens/SinglePost';

const Stack = createStackNavigator();

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://blog.vitabletech.in/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BlogList">
          {(props) => <BlogList {...props} posts={posts} />}
        </Stack.Screen>
        <Stack.Screen name="SinglePost" component={SinglePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}