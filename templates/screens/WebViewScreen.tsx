import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface WebViewScreenProps {
  url: string;
  title?: string;
}

export default function WebViewScreen({ url, title }: WebViewScreenProps) {
  // Note: This is a template. In a real app, you would use react-native-webview
  // or expo-web-browser to display web content. This template shows the structure.

  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>🌐</Text>
        <Text style={styles.placeholderTitle}>WebView Screen</Text>
        <Text style={styles.placeholderDescription}>
          Install react-native-webview to display web content
        </Text>
        <View style={styles.urlContainer}>
          <Text style={styles.urlLabel}>URL:</Text>
          <Text style={styles.urlText} numberOfLines={1}>
            {url}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  placeholderText: {
    fontSize: 64,
    marginBottom: 16,
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  placeholderDescription: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 24,
  },
  urlContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: '100%',
  },
  urlLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
  },
  urlText: {
    fontSize: 14,
    color: '#007AFF',
  },
});
