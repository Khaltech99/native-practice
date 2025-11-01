import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const Homescreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homescreen</Text>
      <Text>This is my Homescreen</Text>
      <Link href="/contact" style={styles.button}>
          <Text >contact</Text>
      </Link>
      
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    button:{
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,    
    }
})