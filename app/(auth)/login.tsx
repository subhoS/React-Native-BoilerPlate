import React, { useState, useRef } from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { Text, TextInput, Button, useTheme, Surface } from "react-native-paper";
import { useRouter } from "expo-router";
import { setAuth } from "../utils/routeGuards";

export default function LoginScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef(null);
  const screenWidth = Dimensions.get("window").width;

  const splashData = [
    {
      title: "Welcome to Our App",
      description: "Your one-stop solution for everything you need",
      icon: "🚀",
    },
    {
      title: "Secure & Fast",
      description: "We ensure your data is protected and accessible",
      icon: "🔒",
    },
    {
      title: "Get Started",
      description: "Join our community of amazing users",
      icon: "✨",
    },
  ];

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const page = Math.round(contentOffset.x / screenWidth);
    setCurrentPage(page);
  };

  const renderSplashSlides = () => {
    return splashData.map((slide, index) => (
      <View
        key={index}
        style={{
          width: screenWidth,
          padding: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 48, marginBottom: 20 }}>{slide.icon}</Text>
        <Text
          variant="headlineMedium"
          style={{
            marginBottom: 12,
            textAlign: "center",
            color: theme.colors.primary,
          }}
        >
          {slide.title}
        </Text>
        <Text
          variant="bodyLarge"
          style={{
            marginBottom: 24,
            textAlign: "center",
            opacity: 0.7,
          }}
        >
          {slide.description}
        </Text>
      </View>
    ));
  };

  const renderDots = () => {
    return (
      <View style={{ flexDirection: "row", marginBottom: 24 }}>
        {splashData.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor:
                currentPage === index
                  ? theme.colors.primary
                  : theme.colors.surfaceVariant,
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <Surface style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={{ flex: 1 }}
        >
          {renderSplashSlides()}
        </ScrollView>

        <View style={{ alignItems: "center", marginBottom: 24 }}>
          {renderDots()}
        </View>

        <View style={{ padding: 24 }}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={{ marginBottom: 16 }}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            style={{ marginBottom: 24 }}
            secureTextEntry
          />

          <Button
            mode="contained"
            onPress={async () => {
              if (email && password) {
                // Add basic validation
                if (!email.includes("@")) {
                  alert("Please enter a valid email");
                  return;
                }
                if (password.length < 6) {
                  alert("Password must be at least 6 characters");
                  return;
                }

                // Simulate authentication
                await setAuth("dummy-token");
                router.replace("/(tabs)/home"); // Changed from /(tabs) to /(tabs)/home
              } else {
                alert("Please fill in all fields");
              }
            }}
            style={{ marginBottom: 16 }}
            contentStyle={{ height: 48 }}
          >
            Login
          </Button>

          <Button mode="text" onPress={() => console.log("Register pressed")}>
            Don't have an account? Register
          </Button>
        </View>
      </View>
    </Surface>
  );
}
