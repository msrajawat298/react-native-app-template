import React from 'react';
import { Avatar } from 'react-native-paper';

export default renderAvatar = (props, imageUri) => <Avatar.Image {...props} source={{ uri: imageUri }} />;
