

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/Routes';
import { UserProvider } from './src/context/UserContext';
import { TaskProvider } from './src/context/TaskContext';


function App() {
  return (
    <TaskProvider>
    <UserProvider>
   <NavigationContainer>
    <Routes/>
   </NavigationContainer>
   </UserProvider>
   </TaskProvider>
  )
}

export default App