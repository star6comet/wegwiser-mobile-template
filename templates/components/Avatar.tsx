import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';

interface AvatarProps {
  name?: string;
  imageUrl?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  style?: ViewStyle;
}

export default function Avatar({ name, imageUrl, size = 'medium', style }: AvatarProps) {
  const getAvatarSize = () => {
    const sizes = {
      small: 32,
      medium: 48,
      large: 64,
      xlarge: 96,
    };
    return sizes[size];
  };

  const avatarSize = getAvatarSize();
  const fontSize = avatarSize * 0.4;

  if (imageUrl) {
    return (
      <Image
        source={{ uri: imageUrl }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          } as any,
          style,
        ]}
      />
    );
  }

  if (name) {
    const initials = name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');

    return (
      <View
        style={[
          styles.avatarPlaceholder,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          } as any,
          style,
        ]}
      >
        <Text style={[styles.avatarText, { fontSize }]}>{initials}</Text>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.avatarPlaceholder,
        {
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
        } as any,
        style,
      ]}
    >
      <Text style={[styles.avatarText, { fontSize }]}>?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#f5f5f5',
  },
  avatarPlaceholder: {
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '600',
  },
});
