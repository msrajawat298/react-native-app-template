import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';

const getStyles = () => {
  const screen = Dimensions.get('window');
  const Height = screen.height;
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    welcomeContainer: {
      height: Height * 0.3,
      width: '100%',
      backgroundColor: theme.colors.onPrimaryContainer,
    },
    name: {
      fontSize: 14,
    },
    surface: {
      height: Height * 0.3,
      width: '100%',
      padding: 16,
      marginTop: '15%',
      backgroundColor: 'transparent',
    },
    borderRadius: {
      borderRadius: 0,
    },
    content: {
      marginLeft: 16,
    },
    footer: {
      alignItems: 'center',
      paddingVertical: 20,
    },
    containers: {
      flex: 1,
      padding: 16,
    },
    welcome: {
      fontSize: 16,
    },
    eventDetails: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16,
    },
    eventLabel: {
      width: '50%',
      fontSize: 14,
      fontWeight: 'bold',
    },
    eventValue: {
      width: '50%',
      fontSize: 14,
      textAlign: 'right',
    },
  });
};
export default getStyles;
