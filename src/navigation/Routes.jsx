


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import TaskScreen from '../screens/TaskScreen';
import { SCREEN } from '../utils/routes';
 

const Stack = createNativeStackNavigator()

const {USERDETAILS, USERLIST, TASK} = SCREEN

const Routes = () => {
  return (
   <Stack.Navigator>
      <Stack.Screen name={USERLIST} component= {UserListScreen}/>
      <Stack.Screen name={USERDETAILS} component= {UserDetailsScreen}/>
      <Stack.Screen name={TASK} component= {TaskScreen}/>
   </Stack.Navigator>
  )
}

export default Routes

