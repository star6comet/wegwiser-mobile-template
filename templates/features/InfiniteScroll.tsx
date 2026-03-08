import React, { useState } from 'react';
import { FlatList, StyleSheet, ActivityIndicator, View } from 'react-native';

interface InfiniteScrollProps<T> {
  data: T[];
  renderItem: ({ item, index }: { item: T; index: number }) => React.ReactNode;
  keyExtractor: (item: T, index: number) => string;
  onLoadMore: () => Promise<void>;
  hasMore: boolean;
  loading?: boolean;
}

export default function InfiniteScroll<T>({
  data,
  renderItem,
  keyExtractor,
  onLoadMore,
  hasMore,
  loading = false,
}: InfiniteScrollProps<T>) {
  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = async () => {
    if (loadingMore || loading || !hasMore) return;

    setLoadingMore(true);
    try {
      await onLoadMore();
    } finally {
      setLoadingMore(false);
    }
  };

  const renderFooter = () => {
    if (!hasMore) return null;
    if (loadingMore) {
      return (
        <View style={styles.footer}>
          <ActivityIndicator size="small" color="#007AFF" />
        </View>
      );
    }
    return null;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem as any}
      keyExtractor={keyExtractor}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
});
