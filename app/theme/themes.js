import { MD2LightTheme, MD2DarkTheme, configureFonts } from 'react-native-paper';
import { LIGHT_THEME_COLORS, DARK_THEME_COLORS } from './Colors';
import fontConfig from './Fonts';
export const themes = {
  light: {
    ...MD2LightTheme,
    ...LIGHT_THEME_COLORS,
    fonts: configureFonts({config: fontConfig, isV3: false}),
  },
  dark: {
    ...MD2DarkTheme,
    ...DARK_THEME_COLORS,
    fonts: configureFonts({config: fontConfig, isV3: false}),
  },
};