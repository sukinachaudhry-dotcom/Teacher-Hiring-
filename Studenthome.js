import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function App({ navigation }) {
    const teachers = [
        { name: "Ali Hassan", subject: "Computer", exp: "+5 Years Exp", desc: "Available for a job or private lessons", img: require("./Ali.jpeg") },
        { name: "Sara Ali", subject: "Chemistry", exp: "+2 Years Exp", desc: "Available for online private lessons", img: require("./Ali.jpeg") },
        { name: "Usman Khan", subject: "Physics", exp: "+7 Years Exp", desc: "Expert in Physics & Mechanics", img: require("./Ali.jpeg") },
        { name: "Ayesha Noor", subject: "Maths", exp: "+4 Years Exp", desc: "Algebra & Calculus Specialist", img: require("./Ali.jpeg") },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ flex: 1 }}>

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
                    <TouchableOpacity>
                        <Ionicons name="menu" size={28} color="#fff" />
                    </TouchableOpacity>

                    <TextInput
                        placeholder="Search Teachers"
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

                    <TouchableOpacity>
                        <Ionicons name="notifications" size={28} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft: 10 }}>
                        <Image
                            source={require("./Ali.jpeg")}
                            style={{ width: 30, height: 30, borderRadius: 15 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 20 }} />

                {/* Learning System Section */}
                <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>
                    Learning System
                </Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
                    {["Computer", "Physics", "courses,Math"].map((subj, index) => (
                        <View key={index} style={{ marginHorizontal: 10, alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#d8b4e2', padding: 20, borderRadius: 10 }}>
                                <Text>{subj}</Text>
                            </View>
                            <Text style={{ marginTop: 5 }}>{subj}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Popular Teachers Section */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Popular Teachers</Text>
                    <Text onPress={() => navigation.navigate("Viewall")}
                        style={{ color: 'purple', fontWeight: 'bold' }}>View All</Text>
                </View>

                {/* Teacher Cards Grid (2 per row) */}
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", margin: 10 }}>
                    {teachers.map((teacher, index) => (
                        <View
                            key={index}
                            style={{
                                width: "48%",
                                backgroundColor: '#d8b4e2',
                                borderRadius: 10,
                                padding: 10,
                                marginBottom: 15,
                                shadowColor: '#000',
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                                elevation: 3,
                                borderWidth: 2,
                                borderColor: "purple"
                            }}
                        >
                            <Image
                                source={teacher.img}
                                style={{ width: 60, height: 60, borderRadius: 30, alignSelf: "center" }}
                            />
                            <Text style={{ marginTop: 5, fontWeight: 'bold', textAlign: "center" }}>{teacher.name}</Text>
                            <Text style={{ marginTop: 2, fontWeight: 'bold', textAlign: "center" }}>{teacher.subject}</Text>
                            <Text style={{ marginTop: 2, color: '#555', textAlign: "center" }}>{teacher.desc}</Text>
                            <Text style={{ marginTop: 2, color: '#555', textAlign: "center" }}>{teacher.exp}</Text>

                            {/* Buttons */}
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                <TouchableOpacity
                                    style={{ backgroundColor: "purple", padding: 8, borderRadius: 20, flex: 1, marginRight: 5 }}
                                    onPress={() => navigation.navigate("Studentviewprofile")}
                                >
                                    <Text style={{ color: "#fff", textAlign: "center", fontSize: 14 }}>Detail</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: "purple", padding: 8, borderRadius: 20, flex: 1, marginLeft: 5 }}
                                    onPress={() => navigation.navigate("Chat")}
                                >
                                    <Text style={{ color: "#fff", textAlign: "center", fontSize: 14 }}>Chat</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
