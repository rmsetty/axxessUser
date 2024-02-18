import React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import malliImage from "../../../assets/frfrg.png";

export default function LoadingScreen() {
  return (
    <View>
        <View>
          <Image source={malliImage} style={styles.image} />
        </View>
        <Text style={styles.versionText}>v.1_User</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  versionText: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    fontSize: 18,
    color: '#FFF',
    color:"gray"
  },
});