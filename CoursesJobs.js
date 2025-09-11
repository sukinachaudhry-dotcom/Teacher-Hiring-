import React from "react";
import { View, Text, ScrollView,TextInput, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function CoursesJobs({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 10 }}>
        
       {/* Header */}
           <View
             style={{
               backgroundColor: 'purple',
               paddingVertical: 10,
               paddingHorizontal: 10,
               flexDirection: 'row',
               alignItems: 'center',
               justifyContent: 'space-between',
             }}
           >
             {/* Search Bar */}
             <TextInput
               placeholder="Search Jobs"
               placeholderTextColor="#999"
               style={{
                 flex: 1,
                 backgroundColor: '#fff',
                 marginHorizontal: 10,
                 borderRadius: 20,
                 paddingHorizontal: 15,
                 height: 40,
               }}
             />
           </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
             <View style={{ flexDirection: "row" }}>
               <TouchableOpacity onPress={() => navigation.navigate("InstBrowse")}
                         style={{ backgroundColor: "purple", padding: 15, borderRadius: 50,  marginLeft: 5 }}>
               <Text style={{ fontSize: 14, fontWeight: "bold", color: "white", marginHorizontal: 8 }}>All</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate("ClgJobs")}
                         style={{ backgroundColor: "purple", padding: 15, borderRadius: 50,  marginLeft: 5 }}>
               <Text style={{ fontSize: 14, fontWeight: "bold", color: "white", marginHorizontal: 8 }}>School/College </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("UniJobs")}
                         style={{ backgroundColor: "purple", padding: 15, borderRadius: 50,  marginLeft: 5 }}>
               <Text style={{ fontSize: 14, fontWeight: "bold", color: "white", marginHorizontal: 8 }}>University </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("CoursesJobs")}
                         style={{ backgroundColor: "purple", padding: 15, borderRadius: 50,  marginLeft: 5 }}>
               <Text style={{ fontSize: 14, fontWeight: "bold", color: "white", marginHorizontal: 8 }}>Courses</Text>
               </TouchableOpacity>
               
             </View>
           </ScrollView>

      {/* Courses Jobs Container */}
      <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>

        {/* Course Job 1 */}
        <View style={{ backgroundColor: "#d8b4e2", padding: 15, borderRadius: 10, marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>React Course Tutor</Text>
          <Text>Online / Karachi</Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="time-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>2 hrs ago</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="school-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Level: Beginner</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="cash-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Rs. 3,000 per session</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <MaterialCommunityIcons name="briefcase-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Experience: 1 year</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "purple", padding: 8, borderRadius: 20, flex: 1, marginRight: 5 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "purple", padding: 8, borderRadius: 20, flex: 1, marginLeft: 5 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Course Job 2 */}
        <View style={{ backgroundColor: "#d8b4e2", padding: 15, borderRadius: 10, marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Python Programming Tutor</Text>
          <Text>Online / Lahore</Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="time-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>3 hrs ago</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="school-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Level: Intermediate</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="cash-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Rs. 3,500 per session</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <MaterialCommunityIcons name="briefcase-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Experience: 2 years</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "purple", padding: 8, borderRadius: 20, flex: 1, marginRight: 5 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "purple", padding: 8, borderRadius: 20, flex: 1, marginLeft: 5 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Course Job 3 */}
        <View style={{ backgroundColor: "#d8b4e2", padding: 15, borderRadius: 10, marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>IELTS Trainer</Text>
          <Text>Online / Islamabad</Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="time-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>1 hr ago</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="school-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Level: Advanced</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="cash-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Rs. 4,000 per session</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <MaterialCommunityIcons name="briefcase-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Experience: 3 years</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "purple", padding: 8, borderRadius: 20, flex: 1, marginRight: 5 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "purple", padding: 8, borderRadius: 20, flex: 1, marginLeft: 5 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Course Job 4 */}
        <View style={{ backgroundColor: "#d8b4e2", padding: 15, borderRadius: 10, marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Python for Data Science Tutor</Text>
          <Text>Online / Karachi</Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="time-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>4 hrs ago</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="school-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Level: Intermediate</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Ionicons name="cash-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Rs. 3,800 per session</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <MaterialCommunityIcons name="briefcase-outline" size={18} color="black" style={{ marginRight: 6 }} />
            <Text>Experience: 2 years</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "purple", padding: 8, borderRadius: 20, flex: 1, marginRight: 5 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "purple", padding: 8, borderRadius: 20, flex: 1, marginLeft: 5 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}
