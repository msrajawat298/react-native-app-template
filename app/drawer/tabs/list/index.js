import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Card from '../../../components/Card';

const Page = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://blog.vitabletech.in/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={post}
        keyExtractor={(post) => post?.id?.toString()}
        renderItem={(post) =>  <Card post={post} router={"/tabs/list/"}/>}
        ListEmptyComponent={() => <ActivityIndicator />}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}
      />
    </View>
  );
};
export default Page;
