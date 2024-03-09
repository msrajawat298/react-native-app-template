import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { List, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { API_URL } from '../constants/constants';

const Page = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = () => {
    setLoading(true);
    fetch(`${API_URL}users?skip=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, ...data?.users]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage(users?.length);
      fetchData();
    }
  };

  const ListData = ({userData}) => (
    <List.Item
      title={`${userData?.firstName} ${userData?.lastName}`}
      description={`Username : ${userData?.username} \nPassword : ${userData?.password}`}
      left={props => <Avatar.Image {...props} source={{ uri: userData?.image }} />}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={users}
        keyExtractor={(users) => users?.item?.id?.toString()}
        renderItem={(item) =>  <ListData userData={item?.item} />}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => loading && <ActivityIndicator />}
      />
    </View>
  );
};
export default Page;
