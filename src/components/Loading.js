import React from 'react'
import {
  StyleSheet
} from 'react-native';
import { View, ActivityIndicator } from 'react-native'

const Loading = props => {
  const { size } = props;
  return (
    <View style={style.container}>
      <ActivityIndicator size={size} color='#BB3040' />
    </View>
  )
};

export default Loading

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#303030',
    opacity: 0.8
  }
})