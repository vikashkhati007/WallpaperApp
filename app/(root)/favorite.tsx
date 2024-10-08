import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useWallpaper } from "@/hooks/UseImageCard";
import { ImageCard } from "@/components/ImageCard";
import { DownloadImage } from "@/components/BottomSheet";
export default function favorite() {
  const [bottomSlide, setBottomSlide] = useState<any>(null);
  const wallpaper = useWallpaper();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ParallaxScrollView
          headerImage={
            <Image
              style={{ flex: 1 }}
              source={{
                uri: wallpaper[wallpaper.length - 1].url,
              }}
            />
          }
          headerBackgroundColor={{ dark: "white", light: "black" }}
        >
          <View style={{ flex: 1 }}>
            <FlatList
              data={wallpaper}
              renderItem={({ item }) => (
                <ImageCard
                  onClick={() => {
                    setBottomSlide(item);
                  }}
                  item={item}
                />
              )}
              keyExtractor={(item) => item.title}
              numColumns={2} // Defines number of columns
              columnWrapperStyle={{
                justifyContent: "space-between",
              }} // Adds gap between columns
            />
          </View>
        </ParallaxScrollView>
      </View>
      {bottomSlide && <DownloadImage item={bottomSlide} onClose={() => setBottomSlide(null)} />}
    </SafeAreaView>
  );
}
