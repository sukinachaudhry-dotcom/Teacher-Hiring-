import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const UpdateTeacherProfile = ({navigation}) => {
  // Pehle se saved values (yeh database se aayengi, abhi static rakhi hain)
  const [highestQualification, setHighestQualification] = useState("Masters in CS");
  const [teachingLevel, setTeachingLevel] = useState("College Level");
  const [teachingType, setTeachingType] = useState("Online");
  const [experience, setExperience] = useState("3 Years");
  const [subjects, setSubjects] = useState("Computer Science, Math");
  const [location, setLocation] = useState("Lahore, Pakistan");

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
          Update Teacher Profile
        </Text>
      </View>

      {/* Form */}
      <View style={{ padding: 20, marginTop: -20, backgroundColor: "white", borderRadius: 50 }}>
        {/* Profile Photo */}
        <TouchableOpacity onPress={() => navigation.navigate("Upload")} style={{ alignItems: "center", marginBottom: 20 }}>
          <Ionicons name="person-circle-outline" size={80} color="gray" />
          <Text style={{ color: "purple", fontWeight: "bold" }}>Change Photo</Text>
        </TouchableOpacity>

        {/* Highest Qualification */}
        <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>Highest Qualification</Text>
        <View style={styles.inputBox}>
          <MaterialIcons name="school" size={20} color="purple" />
          <TextInput
            value={highestQualification}
            onChangeText={setHighestQualification}
            style={styles.input}
          />
        </View>

        {/* Preferred Teaching Level */}
        <Text style={styles.label}>Preferred Teaching Level</Text>
        <View style={styles.inputBox}>
          <Ionicons name="book-outline" size={20} color="purple" />
          <TextInput value={teachingLevel} onChangeText={setTeachingLevel} style={styles.input} />
        </View>

        {/* Preferred Teaching Type */}
        <Text style={styles.label}>Preferred Teaching Type</Text>
        <View style={styles.inputBox}>
          <Ionicons name="layers-outline" size={20} color="purple" />
          <TextInput value={teachingType} onChangeText={setTeachingType} style={styles.input} />
        </View>

        {/* Experience */}
        <Text style={styles.label}>Experience</Text>
        <View style={styles.inputBox}>
          <Ionicons name="briefcase-outline" size={20} color="purple" />
          <TextInput value={experience} onChangeText={setExperience} style={styles.input} />
        </View>

        {/* Teaching Subjects */}
        <Text style={styles.label}>Teaching Subjects</Text>
        <View style={styles.inputBox}>
          <Ionicons name="book" size={20} color="purple" />
          <TextInput value={subjects} onChangeText={setSubjects} style={styles.input} />
        </View>

        {/* Location */}
        <Text style={styles.label}>Location</Text>
        <View style={styles.inputBox}>
          <Ionicons name="location-outline" size={20} color="purple" />
          <TextInput value={location} onChangeText={setLocation} style={styles.input} />
        </View>

        {/* Button */}
        <TouchableOpacity  onPress={() => navigation.navigate("EditDocs")} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
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

export default UpdateTeacherProfile;
