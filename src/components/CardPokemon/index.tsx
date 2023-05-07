import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native"


import { styles } from "./styles"
import axios from "axios"
import { useEffect, useState } from "react"

import image from "../../../assets/pokeballCard.png"

export const CardPokemon = ({ itens }: any) => {

    const typeColors = {
        "grass": "#78C850",
        "fire": "#F08030",
        "water": "#6890F0",
        "bug": "#A8B820",
        "flying": "#A890F0",
        "poison": " #A040A0",
        "phantom": "#705898",
        "normal": "#A8A878"
    }

    const typeColorsAtr = {
        "grass": "#79C009",
        "fire": "#F99930",
        "poison": "#A040A0",
        "water": "#6999F0",
        "bug": "#A99820",
        "flying": "#A890F0",
        "phantom": "#705898",
        "normal": "#A9A998"
    }

    const verifyColor = () => {
        const types = pokemon?.types.length > 0 ? pokemon?.types[0].type.name : null
        console.log(types)

        return typeColors[types || "normal"];
    }

    interface ItypesPokemon {
        name: string
        url: string
    }

    interface ItypePokemon {
        type: ItypesPokemon
    }


    interface IPokemonResponse {
        order: number,
        name: string,
        types: ItypePokemon[],
        id: number
    }

    const [pokemon, setPokemon] = useState<IPokemonResponse>()
    const [loading, setLoading] = useState(false)
    const [opacityValue, setOpacityValue] = useState(0)

    useEffect(() => {
        setLoading(true)
        setOpacityValue(0.3) // definir opacidade inicial para o efeito

        axios.get(`${itens.url}`)
            .then((res) => {
                const response = res.data;
                const pokemonResponse = {
                    order: response.order,
                    name: response.name,
                    types: response.types,
                    id: response.id
                }
                console.log(response.types)
                setLoading(false)
                setPokemon(pokemonResponse)
            }).catch((err) => {
                setLoading(false)
            })
    }, [itens])

    useEffect(() => {
        if (loading) {
            // definir a animação de opacidade enquanto carrega
            const interval = setInterval(() => {
                setOpacityValue((prev) => prev === 0.25 ? 0.3 : 0.25)
            }, 500)
            return () => clearInterval(interval)
        }
    }, [loading])


    if (loading) {
        return (
            <View style={[styles.container, { opacity: opacityValue, backgroundColor: "grey" }]}>
                <View >
                    <Text style={styles.shiffterLoading}>ㅤㅤㅤ</Text>

                    <Text style={styles.namePokemon}></Text>
                    <View style={styles.atributes}>
                        <Text style={styles.shiffterLoading}>ㅤㅤㅤ</Text>
                        <Text style={styles.shiffterLoading}>ㅤㅤㅤ</Text>
                    </View>

                </View>
            </View>)
    }

    return (
        <View style={[styles.container, { backgroundColor: verifyColor() }]}>
            <View>
                <Text>#{pokemon?.order}</Text>
                <Text style={styles.namePokemon}>{itens?.name}</Text>

                <View style={styles.atributes}>
                    {
                        pokemon?.types?.map(({ type, index }: any) => (
                            <Text key={Math.random()} style={[styles.tagAtributes, { backgroundColor: typeColorsAtr[type.name] }]}>{type.name}</Text>
                        ))
                    }
                </View>

            </View>

            <ImageBackground source={image} resizeMode="cover" style={styles.containerImage}>
                <Image style={styles.imagePokemon} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png` }} />
            </ImageBackground>
        </View>
    )
}
