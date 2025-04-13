import { useContext } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { TaskContex } from '../context/TaskContext'
import Loader from '../components/Loader';


const TaskScreen = ({route}) => {

  const { task,
     loading,
      error,
       addTask,
       removeTask,
       newTaskTitle,
       setNewTaskTitle,
       } = useContext(TaskContex)


        const  userId = route.params
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>

      {
        loading ?
          (
            <Loader />
          )
          :
          error ?

            (
              <Error />
            )
            :
            <>
            <FlatList
              data={task}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.title}>
                    {
                      item.title.length > 20 
                      ? item?.title.slice(0,20) + "..."
                      : item?.title
                    }</Text>
                  <Button title="Remove" color={"red"}
                  onPress={() => removeTask(item.id)}
                   />
                </View>

              )}
            />


             <View style={styles.inputContainer}>
              <TextInput 
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
              style={styles.input}/>
              <Button

               title="Add Task" 

               onPress={() => {
                addTask(newTaskTitle || "Yeni Task",userId)
               }}
               
               />

             </View>
            </>
      }

    </View>
  )
}

export default TaskScreen

const styles = StyleSheet.create({

  item: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "space-between",
    backgroundColor: "#2F3646",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    color: "#fff",
    fontSize: 16
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    marginBottom:40,
    borderRadius:10,
    shadowColor:"#ccc"

  },
  input:{
    borderWidth:1,
    width:"75%",
    padding:8,
    borderRadius:5,
    borderColor: "#ccc"
  }

})