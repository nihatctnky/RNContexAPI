import { createContext, useEffect, useState } from "react";
import axios from 'axios';




export const UserContext = createContext()



export const UserProvider = ({children}) => {


    const [users,setUsers] = useState([])
    const [loading,setLoading]= useState(true)
    const [error, setError] = useState(null)




 useEffect (() => {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {setUsers(response.data)
  
    })
    .catch(err => {setError(err.message)

    })
    .finally(() => setLoading(false))
 },[])




    return (

        <UserContext.Provider value={{users,loading,error}}>
            {children}
        </UserContext.Provider>
    )

}