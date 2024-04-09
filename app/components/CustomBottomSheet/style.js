import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';

const getStyles = () => {
  const theme = useTheme();
  const screen = Dimensions.get('window');
  const Height = screen.height;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.onPrimaryContainer,
      justifyContent: 'flex-end',
    },
    imageContainer: {
      height: Height * 0.2,
    },
    image: {
      height: Height * 0.2,
      alignSelf: 'center',
    },
    bottomSheet: {
      backgroundColor: theme.colors.surface,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
export default getStyles;
