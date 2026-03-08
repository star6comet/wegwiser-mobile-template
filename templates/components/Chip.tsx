import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ChipProps {
  label: string;
  selected?: boolean;
  onSelect?: () => void;
  variant?: 'default' | 'outlined';
  size?: 'small' | 'medium' | 'large';
}

export default function Chip({
  label,
  selected = false,
  onSelect,
  variant = 'default',
  size = 'medium',
}: ChipProps) {
  const getSizeStyle = () => {
    const sizes = {
      small: { paddingHorizontal: 8, paddingVertical: 4, fontSize: 12, height: 24 },
      medium: { paddingHorizontal: 12, paddingVertical: 6, fontSize: 14, height: 32 },
      large: { paddingHorizontal: 16, paddingVertical: 8, fontSize: 16, height: 40 },
    };
    return sizes[size];
  };

  const sizeStyle = getSizeStyle();

  const getChipStyle = () => {
    const baseStyle: any = {
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
    };

    const variantStyles: any = {
      default: {
        backgroundColor: selected ? '#007AFF' : '#f5f5f5',
      },
      outlined: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: selected ? '#007AFF' : '#e5e5e5',
      },
    };

    return {
      ...baseStyle,
      ...variantStyles[variant],
      paddingHorizontal: sizeStyle.paddingHorizontal,
      paddingVertical: sizeStyle.paddingVertical,
      height: sizeStyle.height,
    };
  };

  const getTextStyle = () => {
    return {
      color: variant === 'default' && selected ? '#fff' : '#000',
      fontSize: sizeStyle.fontSize,
      fontWeight: '600' as const,
    };
  };

  return (
    <TouchableOpacity
      style={getChipStyle()}
      onPress={onSelect}
      activeOpacity={0.7}
    >
      <Text style={getTextStyle()}>{label}</Text>
    </TouchableOpacity>
  );
}
