import { FlatList, Image, SafeAreaView, View } from "react-native";
import ParallaxScrollView from "./ParallaxScrollView";
import { ImageCard } from "./ImageCard";
import { useWallpaper } from "@/hooks/UseImageCard";
import { useState } from "react";
import { DownloadImage } from "./BottomSheet";

export const SplitView = ({wallpaper}: any) => {
  const [bottomSlide, setBottomSlide] = useState<any>(null);
  return (
    <>
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
      {bottomSlide && (
        <DownloadImage
          item={bottomSlide}
          onClose={() => setBottomSlide(null)}
        />
      )}
      </>
  );
};
