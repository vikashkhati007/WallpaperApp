import { Text, View } from "react-native";
import { SplitView } from "../SplitView";

export default function Liked({ data }: any) {
  // Filter liked wallpapers
  const likedWallpapers = data.filter((item: any) => item.liked);

  return (
    <View style={{ flex: 1 }}>
      {likedWallpapers.length > 0 ? (
          <View style={{ flex: 1 }}>
          <SplitView name="likedpage" wallpaper={likedWallpapers} />
        </View>
      ) : (
        // If no wallpapers are liked, show this message
        <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 20,
            color: "grey",
          }}
        >
          You have not liked any Wallpapers
        </Text>
      </View>)}
    </View>
  );
}
