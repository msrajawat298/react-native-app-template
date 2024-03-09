import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

{/* Know more about Drawer:: https://docs.expo.dev/router/advanced/drawer/ */}
const screens = [
  {
    name: "Home",
    drawerLabel: 'Home',
    headerTitle: 'Home',
    icon: { lib: 'Ionicons', name: 'home' },
    uri: 'https://msrajawat298.blogspot.com/'
  },
  {
    name: "Fb",
    drawerLabel: 'Facebook',
    headerTitle: 'Facebook',
    icon: { lib: 'FontAwesome5', name: 'facebook' },
    uri: 'https://www.facebook.com/msrajawat298'
  },
  {
    name: "Insta",
    drawerLabel: 'Instagram',
    headerTitle: 'Instagram',
    icon: { lib: 'FontAwesome5', name: 'instagram' },
    uri: 'https://www.instagram.com/msrajawat298'
  },
  {
    name: "profile",
    drawerLabel: 'Profile',
    headerTitle: 'My Profile',
    icon: { lib: 'Ionicons', name: 'person-outline' },
  }
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
            <Link href={'/'} replace>
              <Ionicons name="log-out-outline" size={28} color={'#fff'} />
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