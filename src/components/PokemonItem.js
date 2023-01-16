import { StyleSheet, FlatList,TouchableOpacity,Text,ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import { POKEMON_TYPE_COLORS } from '../utils/constants'
import FastImage from 'react-native-fast-image'
import Capitalize from '../utils/functions'


const PokemonItem = (props) => {
    const {pokemons,navigation,next,loadPokemons,search}=props

    const loadMore = () => {
      loadPokemons();
    };

    const renderItem = ({item,index}) => {

        return (
          <TouchableOpacity key={index} onPress={()=>navigation.navigate('PokemonDetails',{pokemon:item})} style={{...styles.containerItem,backgroundColor:POKEMON_TYPE_COLORS[item.type.toLowerCase()]  ? POKEMON_TYPE_COLORS[item.type.toLowerCase()] :'blue'}}>
            <FastImage
            source={{uri:item.image}}
            style={{width:120,height:120}}
            resizeMode={'contain'}
            />
            <Text style={styles.text}>{item.name ? Capitalize(item.name) :''}</Text>
          </TouchableOpacity>
        )
      }

  return (
    <FlatList
    numColumns={2}
    data={pokemons}
    keyExtractor={(item => item.id)}
    renderItem={renderItem}
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}
    onEndReached={(next && !search)  && loadMore}
    ListFooterComponent={
      next && (
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          color="#AEAEAE"
        />
      )
    }
    />
  )
}

export default PokemonItem

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    containerItem:{
        width:150,
        backgroundColor:'blue',
        marginHorizontal:Platform.OS ==='android' ? 15 :20,
        marginVertical:20,
        borderRadius:10,
        alignItems:'center',
        padding:5
     },
     text:{
       fontWeight:'800',
       fontSize:20,
       color:'black'
     }
})