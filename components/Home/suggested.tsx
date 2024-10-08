import { Text, View } from "react-native";
import { SplitView } from "../SplitView";
import { useWallpaper } from "@/hooks/UseImageCard";

export default function Suggested({ data, setWallpaperData }: any) {
  return (
    <View style={{ flex: 1 }}>
      <SplitView wallpaper={data} setWallpaperData={setWallpaperData} />
    </View>
  );
}
