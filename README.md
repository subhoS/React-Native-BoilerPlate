# Example Expo Application

A modern React Native application built with Expo, featuring authentication, tab navigation, and Material Design components.

## 🚀 Features

- Authentication flow with login screen
- Tab-based navigation
- Material Design using React Native Paper
- TypeScript support
- Expo Router for navigation
- Theme support with dark/light mode

## 📁 Project Structure

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## 📝 Project Stracture Notes

### Authentication (auth)/

- Purpose : Handles user authentication and authorization
- Navigation : Stack-based navigation for login flow
- Access Control : Guards protected routes
- Key Features :
  - Login screen
  - Authentication state management
  - Token handling
  - Protected route redirection

### Pages (pages)/

- Purpose : Contains standalone screens accessible via drawer menu
- Navigation : Independent stack navigation
- Access Pattern : Modal-style presentation
- Key Features :
  - Settings screen
  - Support screen
  - Custom back navigation
  - Independent of tab navigation
  - Accessible from any tab via drawer

### Tabs (tabs)/

- Purpose : Main application screens with persistent bottom navigation
- Navigation : Tab-based navigation with bottom bar
- Access Pattern : Direct switching between tabs
- Key Features :
  - Home screen
  - Favorites
  - Albums
  - Recents
  - Notifications
  - Persistent navigation state
  - Bottom tab bar with icons

### Key Differences:

1. Navigation Pattern :

   - Auth: Linear stack navigation for authentication flow
   - Pages: Modal stack navigation for settings/support
   - Tabs: Bottom tab bar for main app sections

2. Access Method :

   - Auth: Initial app entry point and logout
   - Pages: Through drawer menu from any screen
   - Tabs: Direct access via bottom tab bar

3. State Persistence :

   - Auth: Temporary until authenticated
   - Pages: Reset on exit
   - Tabs: Maintains state between switches

4. UI Layer :
   - Auth: Top layer (guards other routes)
   - Pages: Overlay layer (modal presentation)
   - Tabs: Base layer (main app interface)
     This structure provides a clear separation of concerns and intuitive navigation patterns for different types of content and functionality in your application.
