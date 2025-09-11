import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Home1 from '../Pages/Home1';
// import JobDetail from '../Pages/Jobdetails';
import Profile from '../Pages/Profile';
import MyApplicationsScreen from '../Pages/Application';
// import ChatScreen from '../Pages/Chat';
import Browse from '../Pages/PrivBrowse';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home1">
        
        <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Profile" component={Profile} />        
        <Stack.Screen name="application" component={MyApplicationsScreen} />    
        {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
    

      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default HomeStack;