import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const getStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: theme.colors.onPrimaryContainer,
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
      alignSelf: 'center',
    },
  });
};
export default getStyles;
