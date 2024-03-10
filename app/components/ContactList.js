import React from 'react';
import { List } from 'react-native-paper';
import PropTypes from 'prop-types';
import renderAvatar from './renderAvatar';

const Contact = React.memo(({userData}) => (
    <List.Item
        title={`${userData?.name}`}
        description={`Mobile Number : ${userData?.phoneNumbers[0]?.number}`}
        left={() => renderAvatar()}
    />
));
Contact.propTypes = {
        userData: PropTypes.shape({
        name: PropTypes.string,
        phoneNumbers: PropTypes.array,
    }).isRequired
};

export default Contact;