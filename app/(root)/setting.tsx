import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function setting(){
    return(
        <View>
            <Link href={"/accountinfo"}>
            Go To AccountInfo
            </Link>
        </View>
    )
}