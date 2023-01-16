import { StyleSheet, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { POKEMON_TYPE_COLORS } from '../utils/constants'

const PokemonCard = ({item,index}) => {
  
  return (
    <TouchableOpacity style={{...styles.container,backgroundColor:item.type ? POKEMON_TYPE_COLORS[item.type.toLowerCase()] :'blue'}} key={index}>
      <Image
      source={{uri:item.image}}
      style={{width:120,height:120}}
      resizeMode={'contain'}
      />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  container:{
     width:150,
     backgroundColor:'blue',
     marginHorizontal:20,
     marginVertical:20,
     borderRadius:10,
     alignItems:'center',
     padding:5
  },
  text:{
    fontWeight:'800',
    fontSize:20
  }
})