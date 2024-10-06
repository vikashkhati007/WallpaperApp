import { DownloadImage } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

export default function favorite(){
    const [bottomSlide, setBottomSlide] = useState(false);
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
            <Text>Favorite Page</Text>
            <Button title="Toggle Bottom Slide" onPress={() => setBottomSlide(true)} />
            {bottomSlide && <DownloadImage onClose={()=>setBottomSlide(false)}/>}
        </View>
        </SafeAreaView>
    )
}