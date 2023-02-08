import { Component, useState } from "react";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";

export default class About extends Component {
  render() {
    const { student } = this.props.route.params;
    return (
      <View>
        <Text>Tên: {student.name}</Text>
        <Text>Lớp: {student.class}</Text>
        <Text>Id: {student.id}</Text>
      </View>
    );
  }
}