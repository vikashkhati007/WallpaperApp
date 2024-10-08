import { Image, Pressable, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { WallpaerProps } from "@/hooks/UseImageCard";
import { Ionicons } from "@expo/vector-icons";

export const ImageCard = ({ item, onClick }: { item: WallpaerProps, onClick: any }) => {
  return (
    <Pressable
    onPress={onClick}
      style={{
        flex: 1, // This will ensure it takes up space equally in each row
        margin: 8, // Added margin for gap between items
        position: "relative", // Important for absolute positioning inside
      }}
    >
      <Image
        style={{ width: "100%", height: 250, borderRadius: 20 }} // Image takes full width of the container
        source={{
          uri: item.url,
        }}
      />
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "absolute",
          width: "100%", // Ensures text view takes full width of image
          bottom: 0,
          flexDirection: "row", // Flex direction horizontal
          justifyContent: "space-between", // Space between the items
          alignItems: "center", // Aligns items vertically centered
          paddingHorizontal: 10, // Horizontal padding for space between text
          paddingVertical: 5, // Vertical padding for better spacing
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
      >
        <ThemedText style={{ color: "white" }}>
          {item.title.split(" ").slice(0, 2).join(" ")}...
        </ThemedText>
        <Ionicons  name="heart-outline" size={20} color={"white"}/>
      </View>
    </Pressable>
  );
};
