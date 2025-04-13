import React, { createContext, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Loader from '../components/Loader';
import { UserContext } from '../context/UserContext';
import { SCREEN } from '../utils/routes';




const UserListScreen = ({navigation}) => {

    const {users, loading, error} = useContext(UserContext)
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate(SCREEN.USERDETAILS, {userId: item.id})}
            >
              <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
item: {
  padding: 20,
  marginVertical: 8,
  backgroundColor: "#fff",
  marginHorizontal: 16,
  borderRadius: 10,
  shadowColor: "#000",
  shadowOffset: {width:2, height:2},
  shadowOpacity: 0.2,
  shadowRadius: 2,

},
title: {
  fontSize: 18,
  fontWeight: "bold"
},
subtitle: {
  fontSize: 14,
  color: "#666",
  marginTop: 5,

}

});

export default UserListScreen;
