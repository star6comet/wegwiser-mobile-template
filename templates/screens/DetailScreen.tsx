import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

interface DetailItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  metadata?: {
    [key: string]: string;
  };
}

interface DetailScreenProps {
  item: DetailItem;
  onBack?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function DetailScreen({ item, onBack, onEdit, onDelete }: DetailScreenProps) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {item.imageUrl && (
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        )}

        <View style={styles.header}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        {item.metadata && (
          <View style={styles.metadataSection}>
            <Text style={styles.metadataTitle}>Details</Text>
            {Object.entries(item.metadata).map(([key, value]) => (
              <View key={key} style={styles.metadataItem}>
                <Text style={styles.metadataKey}>{key}</Text>
                <Text style={styles.metadataValue}>{value}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.actions}>
          {onEdit && (
            <TouchableOpacity style={[styles.button, styles.editButton]} onPress={onEdit}>
              <Text style={[styles.buttonText, styles.editButtonText]}>Edit</Text>
            </TouchableOpacity>
          )}
          {onDelete && (
            <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={onDelete}>
              <Text style={[styles.buttonText, styles.deleteButtonText]}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    opacity: 0.8,
    lineHeight: 24,
  },
  metadataSection: {
    marginBottom: 24,
  },
  metadataTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  metadataItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  metadataKey: {
    fontSize: 14,
    opacity: 0.6,
  },
  metadataValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  actions: {
    gap: 12,
  },
  button: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#007AFF',
  },
  editButtonText: {
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
  deleteButtonText: {
    color: '#fff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
