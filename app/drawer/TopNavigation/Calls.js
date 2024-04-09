import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import * as Contacts from 'expo-contacts';
import Contact from '../../components/ContactList';

export default function App() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContactList(data);
        }
      }
    })();
  }, []);

  return (
    <>
      {contactList && (
        <View>
          <FlatList
            data={contactList}
            keyExtractor={(contactList) => contactList?.id?.toString()}
            renderItem={(contactList) => <Contact userData={contactList?.item} />}
          />
        </View>
      )}
    </>
  );
}
