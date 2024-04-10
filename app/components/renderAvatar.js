import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-paper';
import { PLACEHOLDER_IMAGE } from '../constants/constants';

const RenderAvatar = ({ imageUri, ...props }) => (
  <Avatar.Image {...props} source={{ uri: imageUri }} />
);

RenderAvatar.defaultProps = {
  imageUri: PLACEHOLDER_IMAGE,
};

RenderAvatar.propTypes = {
  imageUri: PropTypes.string,
};

export default RenderAvatar;
