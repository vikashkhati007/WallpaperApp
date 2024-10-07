import { Image, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { WallpaerProps } from "@/hooks/UseImageCard";

export const ImageCard = ({ item }: { item: WallpaerProps }) => {
  return (
    <View
      style={{
        flex: 1, // This will ensure it takes up space equally in each row
        margin: 10, // Added margin for gap between items
        position: "relative", // Important for absolute positioning inside
      }}
    >
      <Image
        className="rounded-md"
        style={{ width: "100%", height: 300, borderRadius: 20 }} // Image takes full width of the container
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
          {item.title.slice(0, 10)}
        </ThemedText>
        <ThemedText style={{ color: "white" }}>❤️</ThemedText>
      </View>
    </View>
  );
};
