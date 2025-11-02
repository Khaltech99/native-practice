import { View } from 'react-native'

const Spacer = ({padding, children}) => {
  return (
    <View style={{padding:padding }}>{children}</View>
    
  )
}

export default Spacer

