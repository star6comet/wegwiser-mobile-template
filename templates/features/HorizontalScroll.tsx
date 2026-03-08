import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ViewStyle,
} from 'react-native';

interface HorizontalScrollProps {
  children: React.ReactNode;
  showsHorizontalScrollIndicator?: boolean;
  contentContainerStyle?: ViewStyle;
}

export default function HorizontalScroll({
  children,
  showsHorizontalScrollIndicator = false,
  contentContainerStyle,
}: HorizontalScrollProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      contentContainerStyle={[styles.content, contentContainerStyle]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    gap: 12,
  },
});
