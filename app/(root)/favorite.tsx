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
import { ThemedText } from "@/components/ThemedText";
import { ImageCard } from "@/components/ImageCard";
export default function favorite() {
  const [bottomSlide, setBottomSlide] = useState(false);
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
               <ImageCard item={item}/>
              )}
              keyExtractor={(item) => item.title}
              numColumns={2} // This is important to define number of columns
            />
          </View>
        </ParallaxScrollView>
      </View>
    </SafeAreaView>
  );
}

{
  /* <Text>Favorite Page</Text>
            <Button title="Toggle Bottom Slide" onPress={() => setBottomSlide(true)} />
            {bottomSlide && <DownloadImage onClose={()=>setBottomSlide(false)}/>}
       */
}
