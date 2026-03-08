import React, { useState } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert, Text } from 'react-native';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea';
  placeholder?: string;
  required?: boolean;
}

interface FormScreenProps {
  fields?: FormField[];
  onSubmit?: (data: Record<string, string>) => void;
  submitButtonText?: string;
}

export default function FormScreen({
  fields: propFields,
  onSubmit,
  submitButtonText = 'Submit',
}: FormScreenProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const defaultFields: FormField[] = propFields || [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', required: true },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Enter your message' },
  ];

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    defaultFields.forEach(field => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Invalid email format';
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      await onSubmit?.(formData);
      Alert.alert('Success', 'Form submitted successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field: FormField) => (
    <View key={field.name} style={styles.field}>
      <Text style={styles.label}>
        {field.label}
        {field.required && <Text style={styles.required}> *</Text>}
      </Text>
      <TextInput
        style={[
          styles.input,
          field.type === 'textarea' && styles.textarea,
          errors[field.name] && styles.inputError,
        ]}
        placeholder={field.placeholder}
        value={formData[field.name] || ''}
        onChangeText={value => handleChange(field.name, value)}
        keyboardType={field.type === 'email' ? 'email-address' : 'default'}
        secureTextEntry={field.type === 'password'}
        multiline={field.type === 'textarea'}
        numberOfLines={field.type === 'textarea' ? 4 : 1}
      />
      {errors[field.name] && (
        <Text style={styles.error}>{errors[field.name]}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {defaultFields.map(renderField)}

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Submitting...' : submitButtonText}
          </Text>
        </TouchableOpacity>
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
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  required: {
    color: '#FF3B30',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textarea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  error: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
