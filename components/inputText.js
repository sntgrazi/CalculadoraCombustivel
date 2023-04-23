import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import ModalFilho from './modal';

export default function CompPai() {

    const [visivel, setVisivel] = useState(false)
    const [precoGasolina, setPrecoGasolina] = useState('');
    const [precoEtanol, setPrecoEtanol] = useState('');
    const [resultado, setResultado] = useState('');

    function abrirModal() {
        setVisivel(true);
    }

    function fecharModal() {
        setVisivel(false);
    }

    function consultar (){
        const etanol = parseFloat(precoEtanol);
        const gasolina = parseFloat(precoGasolina);

        if (!precoEtanol || !precoGasolina){
            alert('Por favor, preencha ambos os valores antes de consultar');
            return;
        }

        if (etanol <= 0.7 * gasolina){
            setResultado('etanol')
        }else{
            setResultado('gasolina')
        }
        abrirModal();
    };


    return (
        <View style={styles.container}>
            <Text style={styles.textoInput}>Preço da Gasolina:</Text>
            <TextInput
                style={styles.input}
                value={precoGasolina}
                onChangeText={setPrecoGasolina}
                keyboardType='numeric'
                placeholder='R$'
            />
            <Text style={styles.textoInput}>Preço do Etanol:</Text>
            <TextInput
                style={styles.input}
                value={precoEtanol}
                onChangeText={setPrecoEtanol}
                keyboardType='numeric'
                placeholder='R$'
            />
            <TouchableOpacity style={styles.button} onPress={consultar}>
                <Text style={styles.buttonText}>Consultar</Text>
            </TouchableOpacity>

            <Modal style={styles.modal} visible={visivel} animationType='fade' transparent>
                <View style={styles.modalContainer}>
                    <ModalFilho  resultado={resultado} fecharModal={fecharModal} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    textoInput: {
        fontSize: 20
    },
    input: {
        width: 300,
        height: 45,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        fontSize: 18
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
});




