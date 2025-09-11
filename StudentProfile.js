import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const StudentProfile = () => {
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
          Student Profile
        </Text>
      </View>

      {/* Form */}
      <View
        style={{
          padding: 20,
          marginTop: -20,
          backgroundColor: "white",
          borderRadius: 50,
        }}
      >
        {/* Full Name */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
          Full Name
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 15,
            height: 45,
            backgroundColor: "#fff",
          }}
        >
          <Ionicons name="person-circle-outline" size={20} color="purple" />
          <TextInput
            placeholder="Enter full name"
            placeholderTextColor="#999"
            style={{ flex: 1, color: "#333", marginLeft: 8 }}
          />
        </View>

        {/* Phone Number */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
          Phone Number
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 15,
            height: 45,
            backgroundColor: "#fff",
          }}
        >
          <Ionicons name="call-outline" size={20} color="purple" />
          <TextInput
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            placeholderTextColor="#999"
            style={{ flex: 1, color: "#333", marginLeft: 8 }}
          />
        </View>

        {/* Class */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
          Class
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 15,
            height: 45,
            backgroundColor: "#fff",
          }}
        >
          <MaterialIcons name="class" size={20} color="purple" />
          <TextInput
            placeholder="Enter class (e.g. 10th, 12th)"
            placeholderTextColor="#999"
            style={{ flex: 1, color: "#333", marginLeft: 8 }}
          />
        </View>

        {/* Subjects */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
          Subjects
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 15,
            height: 45,
            backgroundColor: "#fff",
          }}
        >
          <FontAwesome5 name="book" size={18} color="purple" />
          <TextInput
            placeholder="Enter subjects (e.g. Math, Science)"
            placeholderTextColor="#999"
            style={{ flex: 1, color: "#333", marginLeft: 8 }}
          />
        </View>

        {/* Address */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
          Address
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 15,
            height: 45,
            backgroundColor: "#fff",
          }}
        >
          <Ionicons name="location-outline" size={20} color="purple" />
          <TextInput
            placeholder="Enter your address"
            placeholderTextColor="#999"
            style={{ flex: 1, color: "#333", marginLeft: 8 }}
          />
        </View>

        {/* Mode of Teaching */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
          Mode of Teaching
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 15,
            height: 45,
            backgroundColor: "#fff",
          }}
        >
          <Ionicons name="laptop-outline" size={20} color="purple" />
          <TextInput
            placeholder="Online / Offline"
            placeholderTextColor="#999"
            style={{ flex: 1, color: "#333", marginLeft: 8 }}
          />
        </View>

        {/* Button */}
        <TouchableOpacity 
          style={{
            backgroundColor: "purple",
            paddingVertical: 12,
            borderRadius: 25,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            Create Profile
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default StudentProfile;
