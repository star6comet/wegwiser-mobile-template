import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, RefreshControl, Text } from 'react-native';

interface Item {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

interface ListScreenProps {
  items?: Item[];
  onItemPress?: (item: Item) => void;
}

export default function ListScreen({ items: propItems, onItemPress }: ListScreenProps) {
  const [refreshing, setRefreshing] = useState(false);
  const [items, setItems] = useState<Item[]>(propItems || [
    { id: '1', title: 'Item 1', description: 'Description for item 1' },
    { id: '2', title: 'Item 2', description: 'Description for item 2' },
    { id: '3', title: 'Item 3', description: 'Description for item 3' },
    { id: '4', title: 'Item 4', description: 'Description for item 4' },
    { id: '5', title: 'Item 5', description: 'Description for item 5' },
  ]);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate data refresh
    setTimeout(() => setRefreshing(false), 2000);
  };

  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onItemPress?.(item)}
      activeOpacity={0.7}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
      {item.description && (
        <Text style={styles.itemDescription}>{item.description}</Text>
      )}
    </TouchableOpacity>
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No items found</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
  },
  item: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    opacity: 0.7,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 48,
  },
  emptyText: {
    fontSize: 16,
    opacity: 0.5,
  },
});
