import React from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';

interface PullToRefreshProps {
  refreshing: boolean;
  onRefresh: () => void;
  children: React.ReactNode;
}

export default function PullToRefresh({ refreshing, onRefresh, children }: PullToRefreshProps) {
  return (
    <FlatList
      data={[{ key: 'content' }]}
      renderItem={() => <View style={styles.content}>{children}</View>}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    minHeight: '100%',
  },
});
