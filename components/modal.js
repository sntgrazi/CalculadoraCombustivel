import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'


export default function ModalFilho(props) {

    let imagem;

    if (props.resultado  == 'etanol'){
        imagem = require('../assets/etanol.jpg');
    } else  {
        imagem = require('../assets/gasolina.jpg');
    }

    return (
        <View style={styles.modal}>
            <Text style={styles.textoModal}>{props.resultado === 'etanol'  ? 'O etanol é mais vantajoso' : 'A gasolina é mais vantajosa'}</Text>
            <Image style={styles.imagem} source={imagem}/>
            <TouchableOpacity style={styles.button} onPress={props.fecharModal}>
                <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 0.5,
        width: 350,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#000080',
        borderRadius: 20,
        elevation: 10,
    },
    textoModal: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    },
    imagem:{
        width: 180,
        height: 180,
        borderRadius: 10
    },
    button: {
        width: 150,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})