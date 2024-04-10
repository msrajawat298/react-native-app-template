import React from 'react';
import { List } from 'react-native-paper';
import PropTypes from 'prop-types';
import RenderAvatar from './RenderAvatar';

const Contact = React.memo(({ userData }) => {
  if (!userData) return null;

  const { name, phoneNumbers } = userData;

  if (!name || !phoneNumbers || phoneNumbers.length === 0) {
    return null;
  }

  const phoneNumber = phoneNumbers[0].number;

  return (
    <List.Item
      title={name}
      description={`Mobile Number : ${phoneNumber}`}
      left={() => RenderAvatar()}
    />
  );
});
Contact.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    phoneNumbers: PropTypes.array,
  }).isRequired,
};

export default Contact;
