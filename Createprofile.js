
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const TeacherProfile = ({ navigation }) => {
  const [highestqualification, setHighestqualification] = useState("");
  const [preferredteachinglevel, setPreferredteachinglevel] = useState("");
  const [preferredteachingtype, setPreferredteachingtype] = useState("");
  const [experience, setExperience] = useState("");
  const [teachingsubjects, setTeachingsubjects] = useState("");
  const [location, setLocation] = useState("");


  const handleLogin = () => {
    navigation.navigate("Bottom")
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#d8b4e2" }}>
      {/* Header */}
      <View
        style={{
          height: 150,
          borderBottomLeftRadius: 80,
          borderBottomRightRadius: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#333" }}>
          Create Teacher Profile
        </Text>
      </View>

      {/* Form */}
      <View style={{ padding: 20, marginTop: -20, backgroundColor: "white", borderRadius: 50 }}>
        {/* Profile Photo */}
        <TouchableOpacity onPress={() => navigation.navigate("Upload")} style={{ alignItems: "center", marginBottom: 20 }}>
          <Ionicons name="person-circle-outline" size={80} color="gray" />
          <Text style={{ color: "purple", fontWeight: "bold" }}>Upload</Text>
        </TouchableOpacity>

        {/* Highest Qualification */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>Highest Qualification</Text>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginBottom: 15,
          height: 45,
          backgroundColor: "#fff",
        }}>
          <MaterialIcons name="school" size={20} color="purple" />
          <TextInput placeholder="Select" style={{ flex: 1, color: "#333", marginLeft: 8 }} />
        </View>

        {/* Preferred Teaching Level */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>Preferred Teaching Level</Text>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginBottom: 15,
          height: 45,
          backgroundColor: "#fff",
        }}>
          <Ionicons name="book-outline" size={20} color="purple" />
          <TextInput placeholder="Select" style={{ flex: 1, color: "#333", marginLeft: 8 }} />
        </View>

        {/* Preferred Teaching Type */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>Preferred Teaching Type</Text>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginBottom: 15,
          height: 45,
          backgroundColor: "#fff",
        }}>
          <Ionicons name="layers-outline" size={20} color="purple" />
          <TextInput placeholder="Select" style={{ flex: 1, color: "#333", marginLeft: 8 }} />
        </View>

        {/* Experience */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>Experience</Text>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginBottom: 15,
          height: 45,
          backgroundColor: "#fff",
        }}>
          <Ionicons name="briefcase-outline" size={20} color="purple" />
          <TextInput placeholder="(if any)" style={{ flex: 1, color: "#333", marginLeft: 8 }} />
        </View>

        {/* Teaching Subjects */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>Teaching Subjects</Text>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginBottom: 15,
          height: 45,
          backgroundColor: "#fff",
        }}>
          <Ionicons name="book" size={20} color="purple" />
          <TextInput placeholder="Select" style={{ flex: 1, color: "#333", marginLeft: 8 }} />
        </View>

        {/* Location */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>Location</Text>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginBottom: 15,
          height: 45,
          backgroundColor: "#fff",
        }}>
          <Ionicons name="location-outline" size={20} color="purple" />
          <TextInput placeholder="Select" style={{ flex: 1, color: "#333", marginLeft: 8 }} />
        </View>

        {/* Button */}
        <TouchableOpacity onPress={() => navigation.navigate("Docs")} style={{
          backgroundColor: "purple",
          paddingVertical: 12,
          borderRadius: 25,
          alignItems: "center",
          marginTop: 10,
        }}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};



export default TeacherProfile;
