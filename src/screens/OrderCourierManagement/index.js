import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import StarRating from 'react-native-star-rating';
import { Picker } from '@react-native-picker/picker';

const OrderCourierManagement = () => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [ratingOnes, setRatingOnes] = useState(0);
    const [ratingTenths, setRatingTenths] = useState(0);
    const [ratingHundredths, setRatingHundredths] = useState(0);
  
    const handleReviewChange = (text) => {
      setReview(text);
    };
  
    const handleRatingChange = (rating) => {
      setRating(rating);
    };
  
    const handleOnesChange = (value) => {
      setRatingOnes(value);
    };
  
    const handleTenthsChange = (value) => {
      setRatingTenths(value);
    };
  
    const handleHundredthsChange = (value) => {
      setRatingHundredths(value);
    };
  
    const handleReviewSubmit = () => {
      const decimalRating = ratingOnes + ratingTenths / 10 + ratingHundredths / 100;
      console.log('Submitted review:', review);
      console.log('Star rating:', rating);
      console.log('Decimal rating:', decimalRating);
    };
  
    const dismissKeyboard = () => {
      Keyboard.dismiss();
    };
  
    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <Text style={styles.title}>Service Overview</Text>
  
          <Text style={styles.label}>Review:</Text>
          <TextInput
            style={styles.reviewInput}
            multiline
            placeholder="Write your review here..."
            value={review}
            onChangeText={handleReviewChange}
          />
  
          <Text style={styles.label}>Rating:</Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={rating}
            selectedStar={handleRatingChange}
            fullStarColor="#FFD700"
          />
  
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={ratingOnes}
              onValueChange={handleOnesChange}
            >
              {[...Array(5)].map((_, index) => (
                <Picker.Item key={index} label={index.toString()} value={index} />
              ))}
            </Picker>
            <Text style={styles.pickerSeparator}>.</Text>
            <Picker
              style={styles.picker}
              selectedValue={ratingTenths}
              onValueChange={handleTenthsChange}
            >
              {[...Array(10)].map((_, index) => (
                <Picker.Item key={index} label={index.toString()} value={index} />
              ))}
            </Picker>
            <Picker
              style={styles.picker}
              selectedValue={ratingHundredths}
              onValueChange={handleHundredthsChange}
            >
              {[...Array(10)].map((_, index) => (
                <Picker.Item key={index} label={index.toString()} value={index} />
              ))}
            </Picker>
          </View>
  
          <TouchableOpacity style={styles.submitButton} onPress={handleReviewSubmit}>
            <Text style={styles.buttonText}>Submit Review</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
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
      fontSize: 17,
      marginBottom: 25,
    },
    reviewInput: {
      height: 120,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      marginBottom: 16,
      padding: 8,
      textAlignVertical: 'top',
    },
    pickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    picker: {
      flex: 1,
    },
    pickerSeparator: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginHorizontal: 8,
    },
    submitButton: {
      position: "relative",
      backgroundColor: 'black',
      padding: 12,
      alignSelf: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '600',
      fontSize: 16,
    },
  });
  
  export default OrderCourierManagement;