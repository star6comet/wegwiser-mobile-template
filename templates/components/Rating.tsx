import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface RatingProps {
  value: number; // 0 to 5
  max?: number;
  size?: number;
  color?: string;
  inactiveColor?: string;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

export default function Rating({
  value,
  max = 5,
  size = 24,
  color = '#FFD700',
  inactiveColor = '#e5e5e5',
  onChange,
  readonly = false,
}: RatingProps) {
  const renderStar = (index: number) => {
    const starValue = index + 1;
    const isActive = value >= starValue;
    const isHalfActive = value >= starValue - 0.5 && value < starValue;

    return (
      <TouchableOpacity
        key={index}
        onPress={() => !readonly && onChange?.(starValue)}
        disabled={readonly}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.star,
            {
              fontSize: size,
              color: isActive ? color : inactiveColor,
            },
          ]}
        >
          {isHalfActive ? '★' : '☆'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: max }).map((_, index) => renderStar(index))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
  },
  star: {
    lineHeight: 24,
  },
});
