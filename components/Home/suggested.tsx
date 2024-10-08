import { Text, View } from "react-native";
import { SplitView } from "../SplitView";
import { useWallpaper } from "@/hooks/UseImageCard";

export default function Suggested() {
  const wallpaper = useWallpaper();
  return (
    <View style={{ flex: 1 }}>
      <SplitView wallpaper={wallpaper} />
    </View>
  );
}
