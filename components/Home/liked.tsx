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
        <Text>No liked wallpapers</Text>
      )}
    </View>
  );
}
