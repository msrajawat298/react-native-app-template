import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import RenderHtml from 'react-native-render-html';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 16,
    },
});

export default function SinglePost({ route }) {
    const { post } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{post.title.rendered}</Text>
            <RenderHtml 
                source={{ html: post.content.rendered }} 
                baseStyle={styles.content} 
            />
        </ScrollView>
    );
}