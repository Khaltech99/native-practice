import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import Spacer from '../../components/Spacer'

const Homescreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homescreen</Text>
      <Spacer padding={10}>
        <Text>This is my Homescreen</Text>
      </Spacer>
      <Link href="/contact" style={styles.button}>
           <Spacer padding={10}>
        <Text style={{fontSize:20}}>home</Text>
      </Spacer>
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