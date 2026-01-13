import { Image } from 'expo-image'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
const ImageSliderItem = ({imageUrl, imageAlt}) => {
  return (
    <View >
      <Image style={cardStyles.container} source={{uri:`${imageUrl}`}} alt={imageAlt}/>
    </View>
  )
}

const cardStyles = StyleSheet.create({
    container:{
        width:300,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 10,
    }
})
export default ImageSliderItem