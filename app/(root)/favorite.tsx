import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { useWallpaper } from "@/hooks/UseImageCard";
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';



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
                uri: "https://ideogram.ai/assets/progressive-image/balanced/response/EFka7R2vQcmdAbEeHsmO_w",
              }}
            />
          }
          headerBackgroundColor={{ dark: "white", light: "black" }}
        >
          <View
          
          >
            <FlatList
            style={style.CardStyle}
              data={wallpaper}
              renderItem={({item}) => 
                <Image
                style={{ width: 200, height: 200 }}
                source={{
                  uri: item.url,
                }}
              />
              }
              keyExtractor={item => item.title}
            />
          </View>
        </ParallaxScrollView>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  CardStyle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});



{
  /* <Text>Favorite Page</Text>
            <Button title="Toggle Bottom Slide" onPress={() => setBottomSlide(true)} />
            {bottomSlide && <DownloadImage onClose={()=>setBottomSlide(false)}/>}
       */
}
