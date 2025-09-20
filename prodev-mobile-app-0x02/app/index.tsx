import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import BgImage from "@/assets/images/background-image.png";
import Logo from "@/assets/images/Logo.png";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <>
      {/* Hide header */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* Transparent Status Bar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      {/* Fullscreen background */}
      <ImageBackground
        source={BgImage}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView
          style={styles.container}
          edges={["top", "left", "right", "bottom"]}
        >
          {/* ✅ Header Section (Logo + Text) */}
          <View style={styles.headerSection}>
            <View style={styles.companyLogo}>
              <Image source={Logo} />
            </View>

            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2</Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>
          </View>

          {/* ✅ Footer */}
          <View
            style={[
              styles.footer,
              { paddingBottom: insets.bottom || 20 },
            ]}
          >
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ ...styles.textSmall, color: "black" }}>
                  Join here
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.transparentButton}>
                <Text style={styles.textSmall}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.continueText}>
              <Text style={{ color: "white" }}>Continue to home</Text>
              <Ionicons
                name="arrow-forward"
                size={20}
                color="white"
                style={{ marginLeft: 6 }} // fallback spacing
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", // ✅ removes white area
  },
  headerSection: {
    paddingTop: 40,
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: "100%",
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 20,
    backgroundColor: "transparent", // ✅ keep footer transparent
  },
  continueText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
});
