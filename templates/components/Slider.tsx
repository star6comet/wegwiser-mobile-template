import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface SliderProps {
  value: number;
  minimumValue: number;
  maximumValue: number;
  onValueChange: (value: number) => void;
  step?: number;
  label?: string;
  showValue?: boolean;
}

export default function SliderComponent({
  value,
  minimumValue,
  maximumValue,
  onValueChange,
  step = 1,
  label,
  showValue = false,
}: SliderProps) {
  // Note: This is a template. In a real app, you would use @react-native-community/slider
  // or a similar library. This template shows the structure.

  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          {showValue && <Text style={styles.value}>{value}</Text>}
        </View>
      )}
      <View style={styles.sliderPlaceholder}>
        <Text style={styles.placeholderText}>Install @react-native-community/slider</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  value: {
    fontSize: 14,
    color: '#007AFF',
  },
  sliderPlaceholder: {
    height: 40,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 12,
    color: '#999',
  },
});
