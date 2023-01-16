import { ScrollView, StyleSheet, Text, View,Image, Platform } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { POKEMON_TYPE_COLORS } from '../utils/constants'
import Capitalize from '../utils/functions'
import { Divider } from '@rneui/themed';

const PokemonDetails = (props) => {
    const pokemon = props.route.params?.pokemon
    const movesPokemons = pokemon.moves.slice(0, 20).map((move) => move.move.name);
    return (
        <View style={{ ...styles.container, backgroundColor: POKEMON_TYPE_COLORS[pokemon.type.toLowerCase()] ? POKEMON_TYPE_COLORS[pokemon.type.toLowerCase()] : 'blue' }}>
            <Text style={styles.idText}>{pokemon.id ? pokemon.id : ''}</Text>
            <View style={{ ...styles.containeImage }}>
                <FastImage
                    source={{ uri: pokemon.image }}
                    style={{ width: 150, height: 150, marginTop: -100 }}
                    resizeMode={'contain'}
                />
                <Text style={styles.texTitle}>{pokemon.name ? Capitalize(pokemon.name) : ''}</Text>
                <View style={styles.containerSubTitle}>
                    
                    <View>
                        <Text style={styles.subtitle}>{pokemon.type ? Capitalize(pokemon.type) : ''}</Text>
                        <Text style={{color:'black'}}>{'Tipo'}</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>{pokemon.weight ? `${pokemon.weight} kg` : ''}</Text>
                        <Text style={{color:'black'}}>{'Peso'}</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>{pokemon.height ? `${pokemon.height / 10} m` : ''}</Text>
                        <Text style={{color:'black'}}>{'altura'}</Text>
                    </View>
                </View>
                <Divider style={styles.divider} />

                <View style={{ alignSelf: 'flex-start', marginHorizontal: 30 }}>
                <Text style={{ ...styles.subtitle }}>{'Movimientos'}</Text>
                    <Text style={{color:'black'}}>
                        {movesPokemons.join(", ")}
                    </Text>
                    <Text style={{ ...styles.subtitle,marginTop:10 }}>{'Sprites'}</Text>
                    <ScrollView horizontal>
                        {
                            
                        }
                        <FastImage
                            source={{ uri: pokemon.sprites.back_default }}
                            style={{ width: 100, height: 100 }}
                            resizeMode={'stretch'}
                        />
                        <FastImage
                            source={{ uri: pokemon.sprites.back_shiny }}
                            style={{ width: 100, height: 100 }}
                            resizeMode={'stretch'}
                        />
                        <FastImage
                            source={{ uri: pokemon.sprites.front_default }}
                            style={{ width: 100, height: 100 }}
                            resizeMode={'stretch'}
                        />
                    </ScrollView>
                    
                </View>

            </View>

        </View>
    )
}

export default PokemonDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: Platform.OS === 'android' ? 18 :10
    },
    idText: {
        color: 'white',
        paddingTop: 40,
        fontSize: 50,
        fontWeight: '700',
        alignSelf: 'center',
    },
    containeImage: {
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 130,
        borderRadius: 10,
        height: '66%'
    },
    divider: {
        width: "80%", margin: 20
    },
    containerSubTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20
    },
    subtitle: {
        marginBottom: 5,
        fontSize: 18,
        fontWeight: '600',
        color:'black'
    },
    texTitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: '700'
    }

})
