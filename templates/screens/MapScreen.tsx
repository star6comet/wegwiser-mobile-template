import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Marker {
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  description?: string;
}

interface MapScreenProps {
  markers?: Marker[];
  onMarkerPress?: (marker: Marker) => void;
  initialRegion?: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

export default function MapScreen({
  markers,
  onMarkerPress,
  initialRegion,
}: MapScreenProps) {
  // Note: This is a template. In a real app, you would use react-native-maps
  // or expo-location to display an actual map. This template shows the structure.

  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>🗺️</Text>
        <Text style={styles.placeholderTitle}>Map Screen</Text>
        <Text style={styles.placeholderDescription}>
          Install react-native-maps to display an actual map
        </Text>
        {markers && (
          <Text style={styles.markerCount}>
            {markers.length} marker{markers.length !== 1 ? 's' : ''}
          </Text>
        )}
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
    marginBottom: 16,
  },
  markerCount: {
    fontSize: 16,
    color: '#007AFF',
  },
});
