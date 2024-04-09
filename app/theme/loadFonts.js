import * as Font from 'expo-font';

export default loadFonts = async () => {
  try {
    await Font.loadAsync({
      'Gilroy-Regular': require('../assets/fonts/Gilroy-Regular.ttf'),
      'Gilroy-Medium': require('../assets/fonts/Gilroy-Medium.ttf'),
      'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
      'Gilroy-Thin': require('../assets/fonts/Gilroy-Thin.ttf'),
    });
  } catch (error) {
    console.log('Error loading fonts', error);
  }
};
