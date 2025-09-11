import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Upload() {
  const [photo, setPhoto] = useState(null);

  // Dummy function for photo upload
  const handleUpload = () => {
    alert("Upload photo functionality here");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 15 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
        Upload Your Photo
      </Text>

      {/* Photo Preview */}
                <View
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              backgroundColor: "#d8b4e2",
              justifyContent: "center",
              alignItems: "center",
              marginLeft:93,
              padding:50
            }}
          >
            <Ionicons name="camera-outline" size={40} color="#000" />
          </View>
        
        <Text style={{ marginTop: 10, fontSize: 14, color: "gray",marginLeft:65, padding:10 }}>
          Tap below to upload your photo
        </Text>
      

      {/* Upload Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "purple",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Upload Photo</Text>
      </TouchableOpacity>

      {/* Skip Option */}
      <TouchableOpacity  onPress={() => navigation.navigate("Login")} style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{ color: "gray", fontSize: 14 }}>Skip for now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
