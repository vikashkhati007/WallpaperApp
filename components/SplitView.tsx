import { FlatList, Image, Pressable, SafeAreaView, View } from "react-native";
import ParallaxScrollView from "./ParallaxScrollView";
import { ImageCard } from "./ImageCard";
import { useWallpaper } from "@/hooks/UseImageCard";
import { useState } from "react";
import { DownloadImage } from "./BottomSheet";
import { Ionicons } from "@expo/vector-icons";

export const SplitView = ({name, wallpaper, setWallpaperData}: any) => {
  const [bottomSlide, setBottomSlide] = useState<any>(null);

  return (
    <>
      <View style={{ flex: 1 }}>
        {wallpaper.length > 1 ? 
          <FlatList
          data={wallpaper}
          renderItem={({ item }) => (
            <ImageCard
            pagename={name}
            wallpaper={wallpaper}
            setWallpaperData={setWallpaperData}
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
        />: null
      }
      
      </View>
      {bottomSlide && (
        <DownloadImage
        pagename={name}
          item={bottomSlide}
          onClose={() => setBottomSlide(null)}
        />
      )}
      </>
  );
};
