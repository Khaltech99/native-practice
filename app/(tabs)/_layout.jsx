import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

const _layout = () => {
  return (
   <Stack>
      <Stack.Screen title="index" options={{title:"Homescreen"}}/>
   </Stack>

  )
}

export default _layout

const styles = StyleSheet.create({})