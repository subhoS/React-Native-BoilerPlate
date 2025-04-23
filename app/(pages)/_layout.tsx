import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { IconButton } from "react-native-paper";

export default function PagesLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerLeft: () => (
          <IconButton 
            icon="arrow-left" 
            onPress={() => router.back()}
          />
        ),
        headerShown: true,
      }}
    />
  );
}
