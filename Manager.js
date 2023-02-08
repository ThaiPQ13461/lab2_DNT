import {
    View,
    Text,
    StyleSheet,
    Modal,
    FlatList,
    TextInput,
    Button,
    Pressable,
    TouchableOpacity,
  } from "react-native";
  import { Component, useState } from "react";
  
  class Manager extends Component {
    render() {
      const { list } = this.props.route.params;
      const listObject = list;
      return (
        <View>
          <Text>Danh sách móm ăn</Text>
          <FlatList
            data={listObject}
            renderItem={({ item }) => (
              <>
                <Text>Tên móm ăn: {item.name}</Text>
                <Text>giá : {item.price}</Text>
                {/* <Pressable onPress={() => onDelete(item.id)}>
                  <Text>xoa</Text>
                </Pressable> */}
              </>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  });
  
  export default Manager;