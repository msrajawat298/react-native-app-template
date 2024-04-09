import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const getStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      color: '#999',
      marginBottom: 30,
      textAlign: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#999',
      paddingBottom: 5,
      marginBottom: 20,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    forgotPasswordContainer: {
      alignItems: 'flex-end',
      marginBottom: 20,
    },
    forgotPasswordText: {
      color: '#999',
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    googleLoginButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.onTertiaryContainer,
      borderRadius: 5,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    googleIcon: {
      marginRight: 10,
    },
    googleLoginText: {
      color: theme.colors.background,
    },
    facebookLoginButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#4267b2',
      borderRadius: 500,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    facebookIcon: {
      marginRight: 10,
    },
    facebookLoginText: {
      color: '#fff',
    },
  });
};
export default getStyles;
