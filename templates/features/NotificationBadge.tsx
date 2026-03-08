import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface NotificationBadgeProps {
  count: number;
  maxCount?: number;
  size?: 'small' | 'medium' | 'large';
}

export default function NotificationBadge({
  count,
  maxCount = 99,
  size = 'medium',
}: NotificationBadgeProps) {
  if (count === 0) return null;

  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  const getSizeStyle = () => {
    const sizes = {
      small: { width: 16, height: 16, fontSize: 10 },
      medium: { width: 20, height: 20, fontSize: 12 },
      large: { width: 24, height: 24, fontSize: 14 },
    };
    return sizes[size];
  };

  const sizeStyle = getSizeStyle();

  return (
    <View style={[styles.badge, { width: sizeStyle.width, height: sizeStyle.height }]}>
      <Text style={[styles.text, { fontSize: sizeStyle.fontSize }]}>{displayCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -4,
    right: -4,
    minWidth: 20,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});
