import { Image, SafeAreaView, View } from "react-native";
import { SplitView } from "@/components/SplitView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpaper } from "@/hooks/UseImageCard";
import { ThemedText } from "@/components/ThemedText";

export default function favorite() {
  const wallpaper = useWallpaper();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "#333", light: "#fff" }}
        headerImage={
          <>
          <Image
            style={{ flex: 1 }}
            source={{
              uri: wallpaper[wallpaper.length - 1].url,
            }}
          />
        </>
        }
      >
        <SplitView wallpaper={wallpaper} />
        </ParallaxScrollView>
    </SafeAreaView>
  );
}
