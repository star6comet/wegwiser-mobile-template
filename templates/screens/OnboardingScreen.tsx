import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface OnboardingStep {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

interface OnboardingScreenProps {
  steps?: OnboardingStep[];
  onComplete: () => void;
  onSkip?: () => void;
}

export default function OnboardingScreen({
  steps,
  onComplete,
  onSkip,
}: OnboardingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const defaultSteps: OnboardingStep[] = [
    {
      title: 'Welcome to Our App',
      description: 'Get started with the best experience for managing your tasks efficiently.',
      icon: '👋',
    },
    {
      title: 'Stay Organized',
      description: 'Organize your tasks and projects with ease using our intuitive interface.',
      icon: '📋',
    },
    {
      title: 'Collaborate Seamlessly',
      description: 'Work together with your team in real-time and achieve more together.',
      icon: '🤝',
    },
  ];

  const currentSteps = steps || defaultSteps;

  const handleNext = () => {
    if (currentStep < currentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onSkip?.();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {currentSteps[currentStep].image ? (
          <Image
            source={{ uri: currentSteps[currentStep].image }}
            style={styles.image}
          />
        ) : (
          <Text style={styles.icon}>{currentSteps[currentStep].icon}</Text>
        )}

        <Text style={styles.title}>{currentSteps[currentStep].title}</Text>
        <Text style={styles.description}>{currentSteps[currentStep].description}</Text>

        <View style={styles.pagination}>
          {currentSteps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentStep && styles.dotActive,
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        {currentStep < currentSteps.length - 1 && onSkip && (
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <Text style={styles.nextText}>
            {currentStep === currentSteps.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 32,
  },
  icon: {
    fontSize: 80,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 48,
  },
  pagination: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e5e5e5',
  },
  dotActive: {
    backgroundColor: '#007AFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  skipButton: {
    padding: 12,
  },
  skipText: {
    fontSize: 16,
    color: '#007AFF',
  },
  nextButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
