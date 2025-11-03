import { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

const Index = () => {
   const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.container}>
      <Text>Enable notifications</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
    
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})