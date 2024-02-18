import React, { useState, useRef  } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Button, Switch, TouchableWithoutFeedback, Keyboard, Alert,  } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import users from "../../../assets/data/users.json";
import * as ImagePicker from 'expo-image-picker';


const user = users[3];

const Profile = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(user.userImage);
  const [notificationModalVisible, setNotificationModalVisible] = useState(false);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [themeModalVisible, setThemeModalVisible] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [selectedNotificationTypes, setSelectedNotificationTypes] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Credit Card");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedTheme, setSelectedTheme] = useState("Light");

  const onSave = () => {
    closeModal();
  };


  const openModal = () => {
    setModalVisible(true);
  };


  const closeModal = () => {
    setModalVisible(false);
  };


  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };


  const selectProfilePicture = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Please grant permission to access the photo library.');
      return;
    }
 
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
 
    if (!result.canceled) {
      const { uri: selectedImageUri } = result.assets[0];
      setProfileImage(selectedImageUri);
    }
  };


  const handleSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Sign Out', onPress: () => console.log('User signed out.') }
    ]);
  };

  const toggleNotificationModal = () => {
    setNotificationModalVisible(!notificationModalVisible);
  };

  const togglePaymentModal = () => {
    setPaymentModalVisible(!paymentModalVisible);
  };

  const toggleLanguageModal = () => {
    setLanguageModalVisible(!languageModalVisible);
  };

  const toggleThemeModal = () => {
    setThemeModalVisible(!themeModalVisible);
  };

  const toggleNotification = () => {
    setNotificationEnabled(!notificationEnabled);
  };

  const toggleNotificationType = (type) => {
    if (selectedNotificationTypes.includes(type)) {
      setSelectedNotificationTypes(selectedNotificationTypes.filter((t) => t !== type));
    } else {
      setSelectedNotificationTypes([...selectedNotificationTypes, type]);
    }
  };

  return (
    <TouchableWithoutFeedback>

    <SafeAreaView style={styles.container_v1}>
    <View style={styles.row_v1}>
          <Text style={styles.title_v1}>Settings</Text>
          <Image source={{ uri: profileImage }} style={styles.userImage_v1} />
        </View>
        <TouchableOpacity onPress={openModal}>
        <View style={styles.section_v2}>
          <Text style={styles.sectionTitle_v2}>Profile</Text>
        </View>
      </TouchableOpacity>


        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.modalContainer_v1}>
              <TouchableOpacity onPress={selectProfilePicture}>
                <Image source={{ uri: profileImage }} style={styles.userImage_v1} />
                <Text style={styles.link_v1}>Edit Profile Picture</Text>
              </TouchableOpacity>


              <Text style={styles.modalTitle_v1}>Edit Profile</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Name"
                placeholderTextColor="white"
                style={styles.modalInput_v1}
              />
              <TextInput
                value={address}
                onChangeText={setAddress}
                placeholder="Address"
                placeholderTextColor="white"
                style={styles.modalInput_v1}
              />
              <TextInput
                value={lat}
                onChangeText={setLat}
                placeholder="Latitude"
                placeholderTextColor="white"
                style={styles.modalInput_v1}
                keyboardType="numeric"
              />
              <TextInput
                value={lng}
                onChangeText={setLng}
                placeholder="Longitude"
                placeholderTextColor="white"
                style={styles.modalInput_v1}
                keyboardType="numeric"
              />
              <View style={styles.modalButtonContainer_v1}>
                <Button onPress={onSave} title="Save" />
                <Button onPress={closeModal} title="Cancel" />
              </View>


              <TouchableOpacity onPress={handleSignOut}>
                <Text style={styles.signOut_v1}>Sign out</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      <View style={styles.header_v2}></View>

      <TouchableOpacity onPress={toggleNotificationModal}>
        <View style={styles.section_v2}>
          <Text style={styles.sectionTitle_v2}>Notification Settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={togglePaymentModal}>
        <View style={styles.section_v2}>
          <Text style={styles.sectionTitle_v2}>Payment Method</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleLanguageModal}>
        <View style={styles.section_v2}>
          <Text style={styles.sectionTitle_v2}>Language</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleThemeModal}>
        <View style={styles.section_v2}>
          <Text style={styles.sectionTitle_v2}>App Theme</Text>
        </View>
      </TouchableOpacity>

<View style={styles.row_v1}>
      <TouchableOpacity>
        <Text style={styles.link_v2}>Help & Support • </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.link_v2}>Terms of Service • </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.link_v2}>Privacy Policy</Text>
      </TouchableOpacity>
      </View>
      {/* Notification Settings Modal */}
      <Modal
        visible={notificationModalVisible}
        animationType="slide"
        onRequestClose={toggleNotificationModal}
      >
        <View style={styles.modalContainer_v2}>
          <Text style={styles.modalTitle_v2}>Notification Settings</Text>
          <View style={styles.switchContainer_v2}>
            <Text style={styles.switchText_v2}>Enable Notifications</Text>
            <Switch
              value={notificationEnabled}
              onValueChange={toggleNotification}
            />
          </View>
          <Text style={styles.notificationTypesTitle_v2}>Notification Types</Text>
          <TouchableOpacity onPress={() => toggleNotificationType("email")}>
            <View style={styles.notificationTypeContainer_v2}>
              <Text>Email Notifications</Text>
              <Switch
                value={selectedNotificationTypes.includes("email")}
                onValueChange={() => toggleNotificationType("email")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleNotificationType("push")}>
            <View style={styles.notificationTypeContainer_v2}>
              <Text>Push Notifications</Text>
              <Switch
                value={selectedNotificationTypes.includes("push")}
                onValueChange={() => toggleNotificationType("push")}
              />
            </View>
          </TouchableOpacity>
          <Button title="Save" onPress={toggleNotificationModal} />
        </View>
      </Modal>

      {/* Payment Method Modal */}
      <Modal
        visible={paymentModalVisible}
        animationType="slide"
        onRequestClose={togglePaymentModal}
      >
        <View style={styles.modalContainer_v2}>
          <Text style={styles.modalTitle_v2}>Payment Method Settings</Text>
          <Text style={styles.paymentMethodText_v2}>Selected Payment Method:</Text>
          <Picker
            selectedValue={selectedPaymentMethod}
            onValueChange={(itemValue) => setSelectedPaymentMethod(itemValue)}
          >
            <Picker.Item label="Credit Card" value="Credit Card" />
            <Picker.Item label="PayPal" value="PayPal" />
            <Picker.Item label="Google Pay" value="Google Pay" />
          </Picker>
          <Button title="Save" onPress={togglePaymentModal} />
        </View>
      </Modal>

      {/* Language Modal */}
      <Modal
        visible={languageModalVisible}
        animationType="slide"
        onRequestClose={toggleLanguageModal}
      >
        <View style={styles.modalContainer_v2}>
          <Text style={styles.modalTitle_v2}>Language Settings</Text>
          <Text style={styles.languageText_v2}>Selected Language:</Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          >
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Spanish" value="Spanish" />
            <Picker.Item label="French" value="French" />
          </Picker>
          <Button title="Save" onPress={toggleLanguageModal} />
        </View>
      </Modal>

      {/* App Theme Modal */}
      <Modal
        visible={themeModalVisible}
        animationType="slide"
        onRequestClose={toggleThemeModal}
      >
        <View style={styles.modalContainer_v2}>
          <Text style={styles.modalTitle_v2}>App Theme Settings</Text>
          <Text style={styles.themeText_v2}>Selected Theme:</Text>
          <Picker
            selectedValue={selectedTheme}
            onValueChange={(itemValue) => setSelectedTheme(itemValue)}
          >
            <Picker.Item label="Light" value="Light" />
            <Picker.Item label="Dark" value="Dark" />
          </Picker>
          <Button title="Save" onPress={toggleThemeModal} />
        </View>
      </Modal>
    </SafeAreaView>
        </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container_v1: {
    flex: 1,
    padding: 10,
    textAlign: "auto",
  },
  row_v1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginBottom: 5,
  },
  title_v1: {
    fontSize: 35,
    fontWeight: "bold",
  },
  input_v1: {
    marginVertical: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  link_v1: {
    textAlign: "center",
    color: "blue",
    marginVertical: 10,
  },
  signOut_v1: {
    textAlign: "center",
    color: "red",
    marginVertical: 50,
  },
  modalContainer_v1: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  userImage_v1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    marginLeft: 'auto',
  },
  modalTitle_v1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 25,
  },
  modalInput_v1: {
    width: "100%",
    marginVertical: 25,
    backgroundColor: "darkblue",
    padding: 15,
    borderRadius: 5,
  },
  modalButtonContainer_v1: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  container_v2: {
    flex: 1,
    padding: 10,
  },
  header_v2: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  title_v2: {
    fontSize: 35,
    fontWeight: "bold",
    marginRight: 10,
  },
  userImage_v2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
  section_v2: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingVertical: 15,
  },
  sectionTitle_v2: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link_v2: {
    color: "blue",
    marginVertical: 10,
    fontSize: 16,
  },
  modalContainer_v2: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  modalTitle_v2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 25,
  },
  switchContainer_v2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  switchText_v2: {
    fontSize: 18,
  },
  notificationTypesTitle_v2: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  notificationTypeContainer_v2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  paymentMethodText_v2: {
    fontSize: 18,
    marginBottom: 10,
  },
  languageText_v2: {
    fontSize: 18,
    marginBottom: 10,
  },
  themeText_v2: {
    fontSize: 18,
    marginBottom: 10,
  },
});


export default Profile;
