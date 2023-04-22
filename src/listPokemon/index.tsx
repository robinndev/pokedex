import { Text, View, FlatList, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react"
import axios from "axios"

import { styles } from "./styles"

import { InputSearch } from "../components/InputSearch"
import { CardPokemon } from "../components/CardPokemon"

export const ListPokedex = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then((res) => {
                setPokemons(res.data.results)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => {
                    return <>
                        <View style={styles.containerText}>
                            <Text style={styles.title}>PokeDex</Text>
                            <Text style={styles.describe}>Search for Pokemon by name or using the national Pokedex code</Text>
                        </View>

                        <InputSearch />
                    </>
                }}
                data={pokemons}
                renderItem={({ item }) => (
                    <CardPokemon itens={item} />
                )}
                keyExtractor={(pokemon) => pokemon.name}
            />
        </View>
    )
}