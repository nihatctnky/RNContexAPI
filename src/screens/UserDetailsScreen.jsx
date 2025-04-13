import { useNavigation, useRoute } from '@react-navigation/native'
import { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { UserContext } from '../context/UserContext'


const UserDetailsScreen = () => {

   const navigation = useNavigation()
   // UserList den parametreye erişmek
   const route = useRoute()
   // route parametrelereine ulaşma
   const {userId} = route.params
   // usecontex kullanıp usercontex abone oluyoruz

   const {users} = useContext(UserContext)

   const user = users.find(user => user.id === userId)

  return (
    <View style={styles.container}>
     <View style= {styles.card}>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.info}>{user.email}</Text>
      <Text style={styles.info}>{user.phone}</Text>

      <TouchableOpacity style={styles.bottom}
      onPress={() => navigation.navigate("Task", userId)}
      >
        <Text style={styles.buttomText}>Viev Taks</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default UserDetailsScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  card:{
    backgroundColor: "#EEEDEB",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {width:2, height:2},
    shadowOpacity: 0.2,
    shadowRadius: 2

  },
  title:{
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10
  },
  info: {
    fontSize:15,
    marginBottom: 5
  },
  bottom: {
    backgroundColor: "rgb(63, 185, 255)",
    width: "40%",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {width:2, height:2},
    shadowOpacity: 0.2,
    shadowRadius: 2

  },
  buttomText: {
    color: "white",
    textAlign:"center",
    fontSize: 15,
    fontWeight: "600",
  },

})