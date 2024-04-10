import React from 'react';
import { View } from 'react-native';
import {
  Card, Text, Surface, Avatar,
} from 'react-native-paper';
import RenderAvatar from '../components/RenderAvatar';
import getStyles from '../styles/profile.style';

export const CardComponent = ({ title, count }) => {
  const styles = getStyles();
  return (
    <Card style={styles.borderRadius}>
      <Card.Content style={styles.content}>
        <Text style={styles.welcome}>
          <Avatar.Icon size={24} icon="folder" />
        </Text>
        <Text style={styles.name}>{title}</Text>
        <Text>{count}</Text>
      </Card.Content>
    </Card>
  );
};

const HomeScreen = () => {
  const styles = getStyles();
  const dashboardDataCount = [{ title: 'Total event', value: 5 },
    { title: 'Received Invitation', value: 5 },
    { title: 'Total Gifts', value: 5 },
    { title: 'Total Event Group', value: 54 }];
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Card.Title
          title="Welcome Mayank"
          titleStyle={{ color: 'white', top: 50 }}
          right={() => <RenderAvatar />}
          rightStyle={{ top: 50, right: 40 }}
        />
        <Surface style={[styles.surface]}>
          <View style={{ borderRadius: 26, overflow: 'hidden' }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {dashboardDataCount.map((data) => (
                <View key={data.title} style={{ flex: 1, flexBasis: '50%' }}>
                  <CardComponent title={data.title} count={data.value} />
                </View>
              ))}
            </View>
          </View>
        </Surface>
      </View>
    </View>
  );
};

export default HomeScreen;
