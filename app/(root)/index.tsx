import Library from "@/components/Home/library";
import Liked from "@/components/Home/liked";
import Suggested from "@/components/Home/suggested";
import { useWallpaper } from "@/hooks/UseImageCard";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useState } from "react";
import { SafeAreaView, View} from "react-native";
const Tab = createMaterialTopTabNavigator();

export default function index() {
  const wallpaper = useWallpaper();
  const [wallpaperData, setWallpaperData] = useState<any>(wallpaper);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Suggested"
          children={() => <Suggested data={wallpaperData} setWallpaperData={setWallpaperData} />}
        />
        <Tab.Screen
          name="Liked"
          children={() => <Liked data={wallpaperData} setWallpaperData={setWallpaperData} />}
        />
        <Tab.Screen
          name="Library"
          children={() => <Library data={wallpaperData} setWallpaperData={setWallpaperData} />}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
