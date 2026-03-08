import React, { useState } from 'react';
import { View, ScrollView, Switch, StyleSheet, Text } from 'react-native';

interface SettingItem {
  id: string;
  title: string;
  type: 'toggle' | 'navigation';
  value?: boolean;
  onPress?: () => void;
}

export default function SettingsScreen() {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: false,
    darkMode: false,
    locationServices: true,
    biometricAuth: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const settingsItems: SettingItem[] = [
    {
      id: 'push',
      title: 'Push Notifications',
      type: 'toggle',
      value: settings.pushNotifications,
      onPress: () => toggleSetting('pushNotifications'),
    },
    {
      id: 'email',
      title: 'Email Notifications',
      type: 'toggle',
      value: settings.emailNotifications,
      onPress: () => toggleSetting('emailNotifications'),
    },
    {
      id: 'dark',
      title: 'Dark Mode',
      type: 'toggle',
      value: settings.darkMode,
      onPress: () => toggleSetting('darkMode'),
    },
    {
      id: 'location',
      title: 'Location Services',
      type: 'toggle',
      value: settings.locationServices,
      onPress: () => toggleSetting('locationServices'),
    },
    {
      id: 'biometric',
      title: 'Biometric Authentication',
      type: 'toggle',
      value: settings.biometricAuth,
      onPress: () => toggleSetting('biometricAuth'),
    },
  ];

  const renderSettingItem = (item: SettingItem) => (
    <View key={item.id} style={styles.settingItem}>
      <Text style={styles.settingTitle}>{item.title}</Text>
      {item.type === 'toggle' && (
        <Switch
          value={item.value}
          onValueChange={item.onPress}
          trackColor={{ false: '#767577', true: '#007AFF' }}
          thumbColor={item.value ? '#fff' : '#f4f3f4'}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.section}>
          {settingsItems.slice(0, 2).map(renderSettingItem)}
        </View>

        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.section}>
          {settingsItems.slice(2, 3).map(renderSettingItem)}
        </View>

        <Text style={styles.sectionTitle}>Privacy & Security</Text>
        <View style={styles.section}>
          {settingsItems.slice(3).map(renderSettingItem)}
        </View>

        <View style={styles.section}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
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
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 8,
    opacity: 0.6,
  },
  section: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  settingTitle: {
    fontSize: 16,
  },
  versionText: {
    fontSize: 14,
    opacity: 0.5,
    textAlign: 'center',
    padding: 16,
  },
});
