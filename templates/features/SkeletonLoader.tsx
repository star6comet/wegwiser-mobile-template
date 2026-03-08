import React from 'react';
import { View, StyleSheet } from 'react-native';

interface SkeletonLoaderProps {
  width?: number | string;
  height?: number;
  variant?: 'text' | 'circle' | 'rect';
  style?: any;
}

export default function SkeletonLoader({
  width = '100%',
  height = 20,
  variant = 'rect',
  style,
}: SkeletonLoaderProps) {
  const getSkeletonStyle = () => {
    const baseStyle = {
      backgroundColor: '#e5e5e5',
    };

    const variantStyles = {
      text: {
        borderRadius: 4,
      },
      circle: {
        borderRadius: 999,
      },
      rect: {
        borderRadius: 8,
      },
    };

    return {
      ...baseStyle,
      ...variantStyles[variant],
      width,
      height,
    };
  };

  return <View style={[styles.skeleton, getSkeletonStyle(), style]} />;
}

const styles = StyleSheet.create({
  skeleton: {
    opacity: 0.7,
  },
});
