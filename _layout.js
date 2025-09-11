import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import { Provider,useDispatch,useSelector } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import { persistReducer, persistStore } from "redux-persist";
import { setUser, setRole } from './Redux/Slices/HomeDataSlice';
import { persistor, store } from "./Redux/Store";

import Splash from "./Pages/Splash";
import Login from './Pages/Login';
import Submitted from './Pages/Submitted';
import UniJobs from './Pages/UniJobs';
import PrivBrowse from './Pages/PrivBrowse';
import Signup from './Pages/Signup';
import Role from './Pages/Role';
import Createprofile from './Pages/Createprofile';
import Docs from './Pages/Docs';
import Home1 from './Pages/Home1';
import Jobdetails from './Pages/Jobdetails';
import Application from './Pages/Application';
import EditProfile from './Pages/EditProfile';
import EditDocs from './Pages/EditDocs';
import ForgotPass from './Pages/ForgotPass';
import ChangePass from './Pages/ChangePass';
import Profile from './Pages/Profile';
import Delete from './Pages/Delete';
import Privacy from './Pages/Privacy';
import NotificationScreen from './Pages/NotificationScreen';
import StudentProfile from './Pages/StudentProfile';
import InstitutionProfile from './Pages/InstitutionProfile';
import InstBrowse from './Pages/InstBrowse';
// import ChatScreen from './Pages/Chat';
import ClgJobs from './Pages/ClgJobs';
import TuitionJobs from './Pages/TuitionJobs';
import CoursesJobs from './Pages/CoursesJobs';
import Upload from './Pages/Upload';
import ViewDetails from './Pages/ViewDetails';
import Accept from './Pages/Accept';
import Reject from './Pages/Reject';
import ShortlistDetails from './Pages/ShortlistDetails';
import InterviewDetails from './Pages/InterviewDetails';
import ConfirmInterview from './Pages/ConfirmInterview';




import BottomTab from './(tabs)/BottomTab';
import { useState } from "react";



const Stack = createNativeStackNavigator();


const TeacherStack = () => (
  <Stack.Navigator initialRouteName="BottomTab">
    <Stack.Screen name="Splash" component={Splash} />
    {/* <Stack.Screen name="Login" component={Login} />/ */}
    <Stack.Screen name="Submitted" component={Submitted} />
    <Stack.Screen name="UniJobs" component={UniJobs} />
    <Stack.Screen name="PrivBrowse" component={PrivBrowse} />
    {/* <Stack.Screen name="Signup" component={Signup} /> */}
    <Stack.Screen name="Role" component={Role} />
    <Stack.Screen name="Createprofile" component={Createprofile} />
    <Stack.Screen name="Docs" component={Docs} />
    <Stack.Screen name="ClgJobs" component={ClgJobs} />
    <Stack.Screen name="TuitionJobs" component={TuitionJobs} />
    <Stack.Screen name="CoursesJobs" component={CoursesJobs} />
    <Stack.Screen name="Upload" component={Upload} />
    <Stack.Screen name="Home1" component={Home1} />
    <Stack.Screen name="Jobdetails" component={Jobdetails} />
    <Stack.Screen name="Application" component={Application} />
    <Stack.Screen name="BottomTab" component={BottomTab} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="EditDocs" component={EditDocs} />
    <Stack.Screen name="ForgotPass" component={ForgotPass} />
    <Stack.Screen name="ChangePass" component={ChangePass} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Delete" component={Delete} />
    <Stack.Screen name="Privacy" component={Privacy} />
    <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    <Stack.Screen name="StudentProfile" component={StudentProfile} />
    <Stack.Screen name="InstitutionProfile" component={InstitutionProfile} />
    <Stack.Screen name="InstBrowse" component={InstBrowse} />
    {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
    <Stack.Screen name="ViewDetails" component={ViewDetails} />
    <Stack.Screen name="Accept" component={Accept} />
    <Stack.Screen name="Reject" component={Reject} />
    <Stack.Screen name="ShortlistDetails" component={ShortlistDetails} />
    <Stack.Screen name="InterviewDetails" component={InterviewDetails} />
    <Stack.Screen name="ConfirmInterview" component={ConfirmInterview} />





  </Stack.Navigator>
);

const StudentStack = () => (
  <Stack.Navigator initialRouteName="BottomTab">
    <Stack.Screen name="Splash" component={Splash} />
    {/* <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} /> */}
    <Stack.Screen name="Role" component={Role} />
    <Stack.Screen name="StudentProfile" component={StudentProfile} />
    <Stack.Screen name="BottomTab" component={BottomTab} />


  </Stack.Navigator>
);

const InstitutionStack = () => (
  <Stack.Navigator initialRouteName="BottomTab">
    <Stack.Screen name="Splash" component={Splash} />
    {/* <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} /> */}
    <Stack.Screen name="Role" component={Role} />
    <Stack.Screen name="InstitutionProfile" component={InstitutionProfile} />

  </Stack.Navigator>
);

// Root navigator with role check
const RenderStack = () => {
const role = useSelector((state) => state.home.role);


  switch (role) {
    case "Teacher":
      return <TeacherStack />;
    case "Student":
      return <StudentStack />;
      case "Institution":
      return <InstitutionStack />;
    default:
      return (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      );
  }
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
         
            <RenderStack />
          
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;