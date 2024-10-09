import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Library({ data, setWallpaperData }: any) {
  return (
    <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text
        style={{
          fontWeight: 500,
          fontSize: 20,
          color: "grey",
        }}
      >
        You have not created any Library
      </Text>
    </View>
  );
}
