import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const DocumentsAvailability = ({navigation}) => {
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
          Documents & Availability
        </Text>
      </View>

      {/* Form */}
      <View style={{ padding: 20, marginTop: -20, backgroundColor: "white", borderRadius: 50 }}>
        {/* Resume Upload */}
        <Text style={styles.label}>Resume / CV</Text>
        <View style={styles.inputBox}>
          <Ionicons name="document-text-outline" size={20} color="purple" />
          <TextInput placeholder="File Choose" style={styles.input} />
        </View>

        {/* Certificates */}
        <Text style={styles.label}>Certificates</Text>
        <View style={styles.inputBox}>
          <Ionicons name="medal-outline" size={20} color="purple" />
          <TextInput placeholder="No File Chosen" style={styles.input} />
        </View>

        {/* Availability */}
        <Text style={styles.label}>Availability</Text>
        <View style={styles.inputBox}>
          <Ionicons name="time-outline" size={20} color="purple" />
          <TextInput placeholder="Select" style={styles.input} />
        </View>

        {/* Language Known */}
        <Text style={styles.label}>Language Known</Text>
        <View style={styles.inputBox}>
          <Ionicons name="language-outline" size={20} color="purple" />
          <TextInput placeholder="Select" style={styles.input} />
        </View>

        {/* Bio */}
        <Text style={styles.label}>Bio / Introduction</Text>
        <View
          style={{
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
            marginBottom: 15,
            backgroundColor: "#fff",
          }}
        >
          <TextInput placeholder="Write about yourself" multiline style={{ height: 80 }} />
        </View>

        {/* Button */}
        <TouchableOpacity onPress={() => navigation.navigate("Home1")}style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = {
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 45,
    backgroundColor: "#fff",
  },
  input: { flex: 1, color: "#333", marginLeft: 8 },
  label: { fontSize: 14, fontWeight: "500", marginBottom: 5 },
  button: {
    backgroundColor: "purple",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
};

export default DocumentsAvailability;
