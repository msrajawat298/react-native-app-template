import React from 'react';
import { List } from 'react-native-paper';
import PropTypes from 'prop-types';
import renderAvatar from './renderAvatar';

const UserDataList = React.memo(({userData}) => (
    <List.Item
        title={`${userData?.firstName} ${userData?.lastName}`}
        description={`Username : ${userData?.username} \nPassword : ${userData?.password}`}
        left={props => renderAvatar(props, userData?.image)}
    />
));
UserDataList.propTypes = {
    userData: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        username: PropTypes.string,
        password: PropTypes.string,
        image: PropTypes.string
    }).isRequired
};

export default UserDataList;