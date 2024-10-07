import { Image, View } from "react-native"
import { ThemedText } from "./ThemedText"
import { WallpaerProps } from "@/hooks/UseImageCard"

export const ImageCard = ({item}: { item: WallpaerProps }) => {
    return (
        <View style={{ width: "50%", padding: 4 }}>
        {" "}
        {/* 50% width for 2 columns */}
        <Image
          className="rounded-md "
          style={{ width: "100%", height: 200 }} // Make image responsive
          source={{
            uri: item.url,
          }}
        />
        <ThemedText className="font-semibold text-md absolute bottom-0 bg-black w-full bg-opacity-50 text-center ">
          {item.title}
        </ThemedText>
      </View>
    )
}