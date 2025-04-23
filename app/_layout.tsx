import { Stack } from "expo-router";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { requireAuth } from "./utils/routeGuards";

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // Authentication check on mount
  React.useEffect(() => {
    const checkAuth = async () => {
      const authResult = await requireAuth();
      setIsAuthenticated(authResult);
    };
    checkAuth();
  }, []);

  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen
            name="(auth)/login"
            options={{
              title: "Login",
              animation: "fade",
            }}
          />
        ) : (
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack>
    </PaperProvider>
  );
}
