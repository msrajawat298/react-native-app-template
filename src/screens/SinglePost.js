import React from 'react';
import { ScrollView, Text, StyleSheet, useWindowDimensions } from 'react-native';
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
    const { width } = useWindowDimensions();
    const filteredContent = post.content.rendered.replace(/<iframe.*?<\/iframe>/gi, '');
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{post.title.rendered}</Text>
            <RenderHtml 
                contentWidth={width}
                source={{ html: filteredContent }}
                baseStyle={styles.content} 
            />
        </ScrollView>
    );
}