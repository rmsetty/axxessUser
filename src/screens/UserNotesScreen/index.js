import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const UserNotesScreen = () => {
  const [notes, setNotes] = useState('');
  const [images, setImages] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    requestImagePickerPermission();
  }, []);

  const requestImagePickerPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Denied',
        'Sorry, we need camera roll permissions to select images.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleAddImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled && result.assets.length > 0) {
        const newImages = result.assets.map((asset) => asset.uri);
        setImages([...images, ...newImages]);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  const handleSaveNotes = () => {
    if (notes.trim() === '' && images.length === 0) {
      Alert.alert(
        'Incomplete',
        'Please add at least one note or image before saving.',
        [{ text: 'OK' }]
      );
    } else {
      navigation.navigate('Basket');
    }
  };

  const handleSkip = () => {
    navigation.navigate('Basket');
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const renderImagePreview = ({ item, index }) => (
    <TouchableOpacity
      style={styles.imagePreviewContainer}
      onPress={() => handleDeleteImage(index)}
    >
      <Image source={{ uri: item }} style={styles.imagePreview} />
    </TouchableOpacity>
  );

  const renderCharacterCount = () => (
    <Text style={styles.characterCount}>
      {notes.length}/200 characters remaining
    </Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guidance</Text>

      <Text style={styles.label}>Add Notes:</Text>
      <TextInput
        style={styles.notesInput}
        multiline
        placeholder="Write your notes here..."
        value={notes}
        onChangeText={setNotes}
        maxLength={200}
      />
      {renderCharacterCount()}

      <Text style={styles.label}>Add Images:</Text>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        renderItem={renderImagePreview}
        contentContainerStyle={styles.imageList}
      />
      <TouchableOpacity
        style={styles.textButton}
        onPress={handleAddImage}
      >
        <Text style={styles.buttonText}>Add Image</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.textButton}
        onPress={handleSkip}
      >
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.saveNotesButton}
        onPress={handleSaveNotes}
      >
        <Text style={styles.saveNotesButtonText}>Save Notes</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 25,
  },
  notesInput: {
    height: 120,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginBottom: 16,
    padding: 8,
    textAlignVertical: 'top',
  },
  characterCount: {
    fontSize: 12,
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
  imageList: {
    marginBottom: 16,
  },
  imagePreviewContainer: {
    marginRight: 8,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 4,
  },
  textButton: {
    marginBottom: 16,
    alignItems: 'center',
  },
  saveNotesButton: {
    backgroundColor: 'black',
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  saveNotesButtonText: {
    color: 'white',
    fontSize: 18,

  },
});

export default UserNotesScreen;
