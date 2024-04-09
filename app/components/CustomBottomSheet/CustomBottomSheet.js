import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, View, Dimensions, Image,
} from 'react-native';
import getStyles from './style';

const BottomSheet = ({ content }) => {
  const styles = getStyles();
  const screenHeight = Dimensions.get('window').height;
  const image = require('../../assets/Logo.png');

  return (
    <Modal transparent>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={[styles.bottomSheet, { height: screenHeight * 0.75 }]}>
          {/* Content of the bottom sheet */}
          <View style={styles.content}>
            {content}
          </View>
        </View>
      </View>
    </Modal>
  );
};

BottomSheet.propTypes = {
  content: PropTypes.node.isRequired,
};

export default BottomSheet;
