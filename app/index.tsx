import { View } from "react-native";
import { Text, useTheme, Button, Surface } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Index() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Surface
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
        padding: 24,
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 48 }}>
        <Text 
          variant="displaySmall" 
          style={{ 
            marginBottom: 16,
            textAlign: 'center',
            color: theme.colors.primary,
          }}
        >
          Welcome to App
        </Text>
        <Text 
          variant="bodyLarge" 
          style={{ 
            marginBottom: 24,
            textAlign: 'center',
            opacity: 0.7,
          }}
        >
          Your one-stop solution for everything
        </Text>
      </View>

      <Button 
        mode="contained"
        onPress={() => router.push("/(auth)/login")}
        style={{ 
          width: '100%',
          paddingVertical: 8,
        }}
        contentStyle={{ height: 48 }}
      >
        Get Started
      </Button>
    </Surface>
  );
}
