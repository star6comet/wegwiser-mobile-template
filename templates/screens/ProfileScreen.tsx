import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';

interface ProfileScreenProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
    bio?: string;
  };
}

export default function ProfileScreen({ user }: ProfileScreenProps) {
  const defaultUser = {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Software developer passionate about building great mobile apps',
  };

  const currentUser = user || defaultUser;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            {'avatar' in currentUser && currentUser.avatar ? (
              <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatar, styles.avatarPlaceholder]}>
                <Text style={styles.avatarText}>
                  {currentUser.name.charAt(0).toUpperCase()}
                </Text>
              </View>
            )}
          </View>

          <Text style={styles.name}>{currentUser.name}</Text>
          <Text style={styles.email}>{currentUser.email}</Text>
          {'bio' in currentUser && currentUser.bio && (
            <Text style={styles.bio}>{currentUser.bio}</Text>
          )}
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Account Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Privacy & Security</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
            <Text style={[styles.menuItemText, styles.logoutText]}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    opacity: 0.8,
    textAlign: 'center',
    maxWidth: 300,
  },
  section: {
    gap: 8,
  },
  menuItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
  },
  menuItemText: {
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 16,
  },
  logoutText: {
    color: '#FF3B30',
    fontWeight: '600',
  },
});
