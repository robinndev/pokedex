import { Text, View, TextInput, ScrollView } from "react-native"
import { useEffect, useState } from "react"
import axios from "axios"

import { styles } from "./styles"

import { CardPokemon } from "../components/CardPokemon"
import CarouselCards from "../components/Carrousel/CarrouselCard"

export const ListPokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [searchPokemon, setSearchPokemon] = useState("")

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then((res) => {
                setPokemons(res.data.results)
            }).catch((err) => {
                console.log(err)
            })
    }, [])


    const handleSearchPokemon = ((value) => {
            setSearchPokemon(value)
    });

    const pokemonsFiltered = pokemons.filter((ele) => ele?.name?.toLowerCase().includes(searchPokemon.toLocaleLowerCase()))

    useEffect(() => {
        console.log(pokemons.filter((ele) => ele?.name?.toLowerCase().includes(searchPokemon.toLocaleLowerCase())))
    }, [searchPokemon, pokemons])


    return (
        <ScrollView style={styles.container}>
            <>
                <View style={styles.containerText}>
                    <CarouselCards />
                    <Text style={styles.title}>PokeDex</Text>
                    <Text style={styles.describe}>Search for Pokemon by name or using the national Pokedex code</Text>
                </View>

                <TextInput value={searchPokemon} onChangeText={handleSearchPokemon} style={styles.search} placeholder={'Please type here…'} />
            </>

            {
                pokemonsFiltered.map((pokemon, index) => (
                    <CardPokemon key={index} itens={pokemon} />

                ))
            }

        </ScrollView>
    )
}