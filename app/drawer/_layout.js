import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';

{/* Know more about Drawer:: https://docs.expo.dev/router/advanced/drawer/ */}
const screens = [
  {
    name: "tabs",
    drawerLabel: 'Home',
    headerTitle: 'Home',
    icon: { lib: 'Ionicons', name: 'home' },
    headerShown: false,
  },
  {
    name: "Home",
    drawerLabel: 'Blogger',
    headerTitle: 'Blogger',
    icon: { lib: 'FontAwesome5', name: 'blogger' },
    uri: 'https://msrajawat298.blogspot.com/'
  },
  {
    name: "Github",
    drawerLabel: 'Github',
    headerTitle: 'Github',
    icon: { lib: 'FontAwesome5', name: 'github' },
    uri: 'https://msrajawat298.github.io/'
  },
  {
    name: "Insta",
    drawerLabel: 'Instagram',
    headerTitle: 'Instagram',
    icon: { lib: 'FontAwesome5', name: 'instagram' },
    uri: 'https://www.instagram.com/msrajawat298'
  },
  {
    name: "Chat",
    drawerLabel: 'Know More',
    headerTitle: 'Know More',
    icon: { lib: 'Ionicons', name: 'chatbubble' },
    uri: 'https://llmbymsrajawat298.streamlit.app/'
  },
  {
    name: "profile",
    drawerLabel: 'Profile',
    headerTitle: 'My Profile',
    icon: { lib: 'Ionicons', name: 'person-outline' },
  },
  {
    name: "TopNavigation",
    drawerLabel: 'TopNavigation',
    headerTitle: 'TopNavigation',
    icon: { lib: 'Ionicons', name: 'person-outline' },
  },
];

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  const { onLogout } = useAuth();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#171630',
          },
          headerTintColor: '#fff',
          drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: '#171630',
          drawerActiveTintColor: '#fff',
          drawerLabelStyle: { marginLeft: -20 },
          headerRight: () => (
            <Link href={'/'} replace asChild>
              <TouchableOpacity onPress={onLogout}>
                <Ionicons name="log-out-outline" size={28} color={'#fff'} />
              </TouchableOpacity>
            </Link>
          ),
        }}>
        {screens.map((screen, index) => {
          const IconComponent = screen.icon.lib === 'Ionicons' ? Ionicons : FontAwesome5;
          return (
            <Drawer.Screen
              key={index}
              name={screen.name}
              initialParams={screen.uri ? { uri: screen.uri } : null}
              options={{
                drawerLabel: screen.drawerLabel,
                headerTitle: screen.headerTitle,
                headerShown: screen.headerShown,
                drawerIcon: ({ size, color }) => (
                  <IconComponent name={screen.icon.name} size={size} color={color} />
                ),
              }}
            />
          );
        })}
      </Drawer>
    </GestureHandlerRootView>
  );
};
export default DrawerLayout;