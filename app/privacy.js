import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Page = () => {
  return <WebView style={styles.container} source={{ uri: 'https://vitabletech.in/privacy_policy' }} />;
};

export default Page;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});