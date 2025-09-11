import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const InstituteProfile = () => {
  const [orgName, setOrgName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [website, setWebsite] = useState("");
  const [hours, setHours] = useState("");
  const [certificate, setCertificate] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#d8b4e2" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            Create Institution Profile
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
          {/* Organization Name */}
          <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
            Organization Name
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
            <FontAwesome name="building" size={20} color="purple" />
            <TextInput
              style={{ flex: 1, color: "#333", marginLeft: 8 }}
              placeholder="Enter Name"
              placeholderTextColor="#999"
              value={orgName}
              onChangeText={setOrgName}
            />
          </View>

          {/* Location */}
          <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
            Location
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
            <MaterialIcons name="location-on" size={20} color="purple" />
            <TextInput
              style={{ flex: 1, color: "#333", marginLeft: 8 }}
              placeholder="Enter Location"
              placeholderTextColor="#999"
              value={location}
              onChangeText={setLocation}
            />
          </View>

          {/* Institute Type */}
          <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
            Institute Type
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
            <FontAwesome name="university" size={20} color="purple" />
            <TextInput
              style={{ flex: 1, color: "#333", marginLeft: 8 }}
              placeholder="Select"
              placeholderTextColor="#999"
              value={type}
              onChangeText={setType}
            />
          </View>

          {/* Website */}
          <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
            Website / Link
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
            <FontAwesome name="globe" size={20} color="purple" />
            <TextInput
              style={{ flex: 1, color: "#333", marginLeft: 8 }}
              placeholder="Enter Website/Link"
              placeholderTextColor="#999"
              value={website}
              onChangeText={setWebsite}
            />
          </View>

          {/* Hours */}
          <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
            Operating Hours
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
            <MaterialIcons name="access-time" size={20} color="purple" />
            <TextInput
              style={{ flex: 1, color: "#333", marginLeft: 8 }}
              placeholder="e.g. 9am to 5pm"
              placeholderTextColor="#999"
              value={hours}
              onChangeText={setHours}
            />
          </View>

          {/* Certificate */}
          <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
            Upload Registration Certificate
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
            <FontAwesome name="file" size={20} color="purple" />
            <TextInput
              style={{ flex: 1, color: "#333", marginLeft: 8 }}
              placeholder="No File Chosen"
              placeholderTextColor="#999"
              value={certificate}
              onChangeText={setCertificate}
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
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InstituteProfile;
