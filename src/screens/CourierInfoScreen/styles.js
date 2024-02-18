import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
      flex: 1,
      width: "100%",
      padding: 10,
    },  
    container: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 10,
    },
    imageContainer: {
      width: "50%",
      marginRight: 10,
    },
    image: {
      width: "100%",
      aspectRatio: 1, 
      resizeMode: "cover",
    },
    infoContainer: {
      flex: 1,
    },
    textContainer: {
      marginBottom: 5,
    },
    name: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 10,
    },
    company: {
      fontSize: 14,
      color: "gray",
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: "gray",
      marginBottom: 5,
      textAlign: "justify",
    },
    dataText: {
      fontSize: 14,
      color: "gray",
      marginBottom: 5,
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
    },
    rating: {
      marginLeft: 5,
    },
    reviewList: {
      marginTop: 10,
    },
    reviewContainer: {
      marginBottom: 10,
    },
    reviewName: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 5,
    },
    reviewText: {
      fontSize: 14,
      color: "gray",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
      },
      company: {
        fontSize: 14,
        color: "gray",
      },
      reviewContainer: {
        marginTop: 10,
      },
      review: {
        fontSize: 14,
      },
      ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
      },
      rating: {
        marginLeft: 5,
      },
      calendarContainer: {
        alignSelf: "center",
        flexDirection: "row",
        paddingTop:15,
      },
      calendarButton: {
        backgroundColor: "black",
        padding: 5,
        alignItems: "center",
        flexDirection: "row",
      },
      calendarButtonText: {
        color: "white",
        paddingLeft:10,
      },
      
  });
