import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../../assets/ghgh.png";
import Logo1 from "../../../assets/fdfdfd.png";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [address, setAddress] = useState("");
  const [servicesRequired, setServicesRequired] = useState("");

  const handleRegister = () => {
    // Perform registration logic here
    // You can use the state variables (firstName, lastName, etc.) to send the data to your backend or store it locally
    // After registration, you can navigate to another screen, for example:
    // navigation.navigate("Home");

    console.log("button pressed");
    navigation.navigate("Vendors")

  };

  const handleLogin = () => {
    // Handle navigation to login screen
    console.log("login button pressed");
    navigation.navigate("Login")
  };

  return (
    <View style={styles.container}>
      <Image source={Logo1} style={styles.logo} resizeMode="contain" />
      <Image source={Logo} style={styles.logo1} />
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="briefcase" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Insurance Type"
          value={insuranceType}
          onChangeText={setInsuranceType}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="location" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="medkit" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Services Required"
          value={servicesRequired}
          onChangeText={setServicesRequired}
        />
      </View>
      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
      <Pressable onPress={handleLogin}>
        <Text style={styles.loginText}>Already have an account? Login here</Text>
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
    width: 250, // Set the width to fill the screen
    height: 75,
    marginBottom: 5,
  },
  logo1:{
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
  loginText: {
    color: "#c0243c",
    fontSize: 12,
    paddingTop:15,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
