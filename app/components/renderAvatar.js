import React from 'react';
import { Avatar } from 'react-native-paper';
import { PLACEHOLDER_IMAGE } from '../constants/constants';

export default renderAvatar = (props, imageUri) => <Avatar.Image {...props} source={{ uri: imageUri ?? PLACEHOLDER_IMAGE }} />;
