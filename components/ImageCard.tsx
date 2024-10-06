import { Image, StyleSheet, View } from "react-native";

export const ImageCard = ({ url }: any) => {
  return (
    <View style={styles.dimension}>
      <Image source={{ uri: `${url}` }} />
    </View>
  );
};
const styles = StyleSheet.create({
  dimension: {
    flex: 1,
  },
});
