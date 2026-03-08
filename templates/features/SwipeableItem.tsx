import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  TouchableOpacity,
} from 'react-native';

interface SwipeableItemProps {
  children: React.ReactNode;
  leftActions?: React.ReactNode[];
  rightActions?: React.ReactNode[];
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export default function SwipeableItem({
  children,
  leftActions,
  rightActions,
  onSwipeLeft,
  onSwipeRight,
}: SwipeableItemProps) {
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 10;
      },
      onPanResponderMove: (_, gestureState) => {
        translateX.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        const threshold = 100;

        if (gestureState.dx > threshold && onSwipeRight) {
          Animated.spring(translateX, {
            toValue: 200,
            useNativeDriver: true,
          }).start();
          onSwipeRight();
        } else if (gestureState.dx < -threshold && onSwipeLeft) {
          Animated.spring(translateX, {
            toValue: -200,
            useNativeDriver: true,
          }).start();
          onSwipeLeft();
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      {leftActions && (
        <View style={styles.actionsLeft}>{leftActions}</View>
      )}
      {rightActions && (
        <View style={styles.actionsRight}>{rightActions}</View>
      )}

      <Animated.View
        style={[
          styles.content,
          {
            transform: [{ translateX }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
  actionsLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  actionsRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row-reverse',
  },
  content: {
    backgroundColor: '#fff',
  },
});
