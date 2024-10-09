import React, { useCallback, useRef } from "react";
import { View, Text, StyleSheet, Image, Pressable, PermissionsAndroid, Platform } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";
import * as FileSystem from 'expo-file-system';

export const DownloadImage = ({pagename, onClose, item }: any) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const requestStoragePermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Storage Permission",
            message: "App needs access to your storage to save files",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Storage permission granted");
        } else {
          console.log("Storage permission denied");
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const downloadImage = async () => {
    await requestStoragePermission();
    if (Platform.OS === 'android' && PermissionsAndroid.RESULTS.GRANTED !== PermissionsAndroid.RESULTS.GRANTED) {
      return;
    }
    try {
      const fileUri = FileSystem.documentDirectory + 'image.jpg';  // Jahan image save karni hai
      const downloadResumable = FileSystem.createDownloadResumable(
        item.url,
        fileUri
      );
      const downloadResult = await downloadResumable.downloadAsync();
      if (downloadResult) {
        const { uri: localUri } = downloadResult;
        console.log('Downloaded image to: ', localUri);
        alert('Image Downloaded');
      } else {
        console.error('Download failed');
      }
      alert('Image Downloaded');
    } catch (error) {
      console.error(error);
    }
  };

  // renders
  return (
    <BottomSheet
      handleStyle={{ display: "none" }}
      enablePanDownToClose={true}
      onClose={onClose}
      handleIndicatorStyle={{ height: 0}}
      snapPoints={["95%"]} // Bottom sheet ki height
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.contentContainer} >
          <Image
          style={styles.imageStyle} source={{ uri: item.url }} />
          <Ionicons
            onPress={onClose}
            name="close"
            size={30}
            color="white"
            style={{ position: "absolute", top: 10, left: 10, backgroundColor: "black", padding: 5, borderRadius: 50 }}
          />
          <View
            style={{ flexDirection: "row", position: "absolute", top: 10, right: 10, gap: 2 }}
          >
            {pagename === "likedpage"? null :
             <Ionicons
             style={{backgroundColor: "black", padding: 5, borderRadius: 50 }}
               name="heart-outline"
               size={30}
               color="white"
             />
            }
           <Ionicons
          style={{backgroundColor: "black", padding: 5, borderRadius: 50 }}
            name="share-social-outline"
            size={30}
            color="white"
          />
          </View>
          <ThemedText style={styles.title}>{item.title}</ThemedText>
          <DownloadButton onPress={downloadImage}/>
          </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export const DownloadButton = ({onPress}: any) =>{
  return (
    <Pressable
    onPress={onPress}
    style={styles.button}
    >
      <Ionicons
      name="download-outline"
      size={30}
      color="white"
      />
      <Text style={styles.buttontext}>Get Wallpaper</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  imageStyle: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 15, borderTopRightRadius: 15,
  },
  title: {
    color: "black",
    fontSize: 25,
    marginTop: 10,
    padding: 10
  },
  button: {
    width: "50%",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  }, 
  buttontext: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600
  }
});
