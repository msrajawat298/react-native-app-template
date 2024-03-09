import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CustomWebView = ({ uri }) => {
  return <WebView style={styles.container} source={{ uri }} />;
};

