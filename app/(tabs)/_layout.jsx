import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'

const TabLayout = () => {
  return (
    <Tabs>
       <Tabs.Screen
        name="index"
        screenOptions={{ headerShown: false}}
        options={{  headerShown: false ,tabBarIcon:({color, size})=><Ionicons name='home' color={color} size={size}/>}}

       
      />
      <Tabs.Screen
        name="about"
        tabBarLabel="About"
       options={{  headerShown: false ,tabBarIcon:({color, size})=><Ionicons name='settings' color={color} size={size}/>}}
      
      
      />
      <Tabs.Screen
        name="contact"
        tabBarLabel="Contact"
       options={{  headerShown: false ,tabBarIcon:({color, size})=><Ionicons name='settings' color={color} size={size}/>}}
      
      
      />
      
  </Tabs>
     
     
    )
}

export default TabLayout

const styles = StyleSheet.create({})