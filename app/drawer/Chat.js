import { useLocalSearchParams } from 'expo-router';
import CustomWebView from '../components/CustomWebView';

export default Page = () => {
  const { uri } = useLocalSearchParams({ uri: '' });
  return <CustomWebView uri={uri} />;
};
