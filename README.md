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

templates/
├── screens/             # Screen templates
│   ├── LoginScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── SettingsScreen.tsx
│   ├── ListScreen.tsx
│   ├── DetailScreen.tsx
│   ├── FormScreen.tsx
│   ├── OnboardingScreen.tsx
│   ├── ChatScreen.tsx
│   ├── MapScreen.tsx
│   ├── GalleryScreen.tsx
│   └── WebViewScreen.tsx
├── components/          # UI component templates
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   ├── Badge.tsx
│   ├── Avatar.tsx
│   ├── Chip.tsx
│   ├── Tabs.tsx
│   ├── Carousel.tsx
│   ├── ProgressBar.tsx
│   ├── Rating.tsx
│   ├── Toggle.tsx
│   ├── Slider.tsx
│   └── Dropdown.tsx
└── features/            # Feature templates
    ├── SearchBar.tsx
    ├── EmptyState.tsx
    ├── LoadingState.tsx
    ├── NotificationBadge.tsx
    ├── PullToRefresh.tsx
    ├── InfiniteScroll.tsx
    ├── BottomSheet.tsx
    ├── SwipeableItem.tsx
    ├── SkeletonLoader.tsx
    ├── Toast.tsx
    ├── PullToLoadMore.tsx
    └── HorizontalScroll.tsx

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

## Templates

The template includes a comprehensive set of pre-built templates for rapid development:

### Screen Templates

Located in `templates/screens/`:

- **LoginScreen.tsx** - Authentication screen with email/password form
- **ProfileScreen.tsx** - User profile display with avatar and menu options
- **SettingsScreen.tsx** - App settings with toggle switches
- **ListScreen.tsx** - Scrollable list with pull-to-refresh
- **DetailScreen.tsx** - Item detail view with metadata
- **FormScreen.tsx** - Generic form with validation
- **OnboardingScreen.tsx** - Multi-step onboarding flow
- **ChatScreen.tsx** - Messaging interface with keyboard handling
- **MapScreen.tsx** - Map view placeholder (requires react-native-maps)
- **GalleryScreen.tsx** - Image gallery with grid layout
- **WebViewScreen.tsx** - Embedded web browser placeholder

### Component Templates

Located in `templates/components/`:

- **Button.tsx** - Multi-variant button (primary, secondary, danger, ghost)
- **Input.tsx** - Text input with labels, errors, and icons
- **Card.tsx** - Card container with variants (default, elevated, outlined)
- **Modal.tsx** - Animated modal with backdrop
- **Badge.tsx** - Status badges with variants
- **Avatar.tsx** - User avatar with image or initials
- **Chip.tsx** - Selectable chips/tags with variants
- **Tabs.tsx** - Tab navigation component
- **Carousel.tsx** - Image slider with auto-play
- **ProgressBar.tsx** - Progress indicator
- **Rating.tsx** - Star rating component
- **Toggle.tsx** - Switch toggle component
- **Slider.tsx** - Range slider placeholder
- **Dropdown.tsx** - Select dropdown with modal

### Feature Templates

Located in `templates/features/`:

- **SearchBar.tsx** - Search input with debouncing
- **EmptyState.tsx** - Empty state with icon and action button
- **LoadingState.tsx** - Loading indicator with message
- **NotificationBadge.tsx** - Notification count badge
- **PullToRefresh.tsx** - Pull-to-refresh wrapper
- **InfiniteScroll.tsx** - Infinite scroll list with loading states
- **BottomSheet.tsx** - Bottom sheet with swipe-to-dismiss
- **SwipeableItem.tsx** - Swipe actions on list items
- **SkeletonLoader.tsx** - Loading skeleton placeholders
- **Toast.tsx** - Notification toast messages
- **PullToLoadMore.tsx** - Pull to load more content
- **HorizontalScroll.tsx** - Horizontal scrolling container

### Using Templates

Copy templates from the `templates/` directory to your app structure and customize as needed:

```javascript
// Example: Using LoginScreen
import LoginScreen from '../templates/screens/LoginScreen';

export default function App() {
  return <LoginScreen />;
}
```
