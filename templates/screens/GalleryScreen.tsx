import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

interface GalleryItem {
  id: string;
  uri: string;
  title?: string;
}

interface GalleryScreenProps {
  items?: GalleryItem[];
  onItemPress?: (item: GalleryItem) => void;
  columns?: number;
}

const { width: screenWidth } = Dimensions.get('window');

export default function GalleryScreen({
  items: propItems,
  onItemPress,
  columns = 3,
}: GalleryScreenProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const defaultItems: GalleryItem[] = [
    { id: '1', uri: 'https://via.placeholder.com/300', title: 'Image 1' },
    { id: '2', uri: 'https://via.placeholder.com/300', title: 'Image 2' },
    { id: '3', uri: 'https://via.placeholder.com/300', title: 'Image 3' },
    { id: '4', uri: 'https://via.placeholder.com/300', title: 'Image 4' },
    { id: '5', uri: 'https://via.placeholder.com/300', title: 'Image 5' },
    { id: '6', uri: 'https://via.placeholder.com/300', title: 'Image 6' },
  ];

  const items = propItems || defaultItems;
  const itemWidth = (screenWidth - 32 - (columns - 1) * 8) / columns;

  const renderGalleryItem = ({ item }: { item: GalleryItem }) => (
    <TouchableOpacity
      style={[styles.galleryItem, { width: itemWidth, height: itemWidth }]}
      onPress={() => {
        setSelectedItem(item);
        onItemPress?.(item);
      }}
      activeOpacity={0.7}
    >
      <Image source={{ uri: item.uri }} style={styles.galleryImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderGalleryItem}
        keyExtractor={item => item.id}
        numColumns={columns}
        contentContainerStyle={styles.galleryList}
        columnWrapperStyle={styles.galleryRow}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  galleryList: {
    padding: 16,
  },
  galleryRow: {
    gap: 8,
  },
  galleryItem: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
