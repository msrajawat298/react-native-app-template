import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import UserDataList from '../components/UserDataList';
import { API_URL } from '../constants/constants';

const Page = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = useCallback(() => {
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
  }, [page]);


  const handleLoadMore = useCallback(() => {
    if (!loading) {
      setPage(users?.length);
    }
  }, [loading]);


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {users.length!==0 && <FlatList
        data={users}
        keyExtractor={(users) => `${users?.item?.id?.toString()}-${Math.random()}`}
        renderItem={(item) =>  <UserDataList userData={item?.item} />}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}
        onEndReached={(handleLoadMore)}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => loading && <ActivityIndicator />}
      />}
    </View>
  );
};
export default Page;
