import { Tabs } from "expo-router";
import React from "react";
import { useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.outline,
        tabBarStyle: { backgroundColor: theme.colors.surface },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "heart" : "heart-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="albums"
        options={{
          title: "Albums",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "album" : "album-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recents"
        options={{
          title: "Recents",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "history" : "history"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "bell" : "bell-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
