import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../../assets/ghgh.png";
import Logo1 from "../../../assets/fdfdfd.png";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    console.log("login button pressed");
  };

  return (
    <View style={styles.container}>
      <Image source={Logo1} style={styles.logo} resizeMode="contain" />
      <Image source={Logo} style={styles.logo1} />
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registerText}>Don't have an account? Register here</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 75,
    marginBottom: 5,
  },
  logo1: {
    height: 150,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 1,
    borderColor: "#ccc",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#c0243c",
    width: "100%",
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerText: {
    color: "#c0243c",
    fontSize: 12,
    paddingTop: 15,
    fontWeight: "bold",
  },
});

export default LoginScreen;
