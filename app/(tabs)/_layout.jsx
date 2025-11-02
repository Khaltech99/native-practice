import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

const RootLayout = () => {
  return (
   <Stack>
      <Stack.Screen name="index" options={{title:"Homescreen"}}/>
      <Stack.Screen name="contact" options={{title:"Contactscreen"}}/>
      <Stack.Screen name="about" options={{title:"Aboutscreen"}}/>
   </Stack>

  )
}

export default RootLayout

const styles = StyleSheet.create({})