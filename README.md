# Wegwiser Mobile Template

This is a template Expo React Native app that gets customized for each client project.

## Structure

This template uses Expo Router for file-based navigation and NativeWind (TailwindCSS) for styling.

## Features

- ✅ Expo Router for file-based navigation
- ✅ NativeWind (TailwindCSS) for styling
- ✅ React Query (@tanstack/react-query) for API state management
- ✅ TypeScript support
- ✅ Tab-based navigation layout
- ✅ Authentication context with React Query
- ✅ iOS/Android/Web support
- ✅ Dark mode support

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on web
npm run web
```

## Project Structure

```
app/
├── _layout.jsx          # Root layout with AuthProvider
├── index.jsx            # Home screen
└── (tabs)/
    ├── _layout.tsx      # Tab layout
    ├── index.jsx        # Home tab
    └── explore.jsx      # Explore tab

components/
├── ui/
│   ├── IconSymbol.tsx   # Icon component
│   └── TabBarBackground.tsx  # Tab bar background
├── HapticTab.tsx        # Haptic feedback for tabs
├── HelloWave.tsx        # Animated wave component
└── ExternalLink.tsx     # External link wrapper

Context/
└── AuthProvider.jsx     # Authentication context with React Query

constants/
└── Colors.ts            # Theme colors (light/dark mode)
```

## Configuration

### API Client

Configure the API client with your project-specific base URL:

```javascript
// Context/AuthProvider.jsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
```

### Environment Variables

Add project-specific environment variables in `.env`:

```
EXPO_PUBLIC_API_URL=https://your-project-api.com
EXPO_PUBLIC_PROJECT_ID=your-project-id
```

### Brand Tokens

Inject brand tokens for customization:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-brand-color',
        secondary: '#your-accent-color',
      },
    },
  },
};
```

## Customization

When generating a client project, the following files are customized:

1. **app.json** - Update app name, slug, and icons
2. **package.json** - Update package name and description
3. **README.md** - Add project-specific information
4. **tailwind.config.js** - Inject brand tokens
5. **Context/AuthProvider.jsx** - Configure API client with project URL
6. **app/index.jsx** - Customize home screen content

## Authentication

The template includes an AuthProvider with React Query for managing authentication state:

```javascript
import { useAuth } from '../Context/AuthProvider';

function MyComponent() {
  const { user, login, logout } = useAuth();
  // ...
}
```

## API Integration

Use React Query hooks for API calls:

```javascript
import { useQuery } from '@tanstack/react-query';

function useItems() {
  return useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const response = await fetch('/api/items');
      return response.json();
    },
  });
}
```

## Deployment

### Expo Application Services (EAS)

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Submit to app stores
eas submit --platform ios
eas submit --platform android
```

### Web Deployment

```bash
# Build for web
npx expo export:web

# Deploy to your hosting provider
```

## Development

### Linting

```bash
npm run lint
```

### Testing

```bash
npm test
```
