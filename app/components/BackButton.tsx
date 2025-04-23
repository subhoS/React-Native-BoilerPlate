import React from "react";
import { IconButton } from "react-native-paper";
import { useRouter } from "expo-router";

export default function BackButton() {
  const router = useRouter();

  return <IconButton icon="arrow-left" onPress={() => router.back()} />;
}
