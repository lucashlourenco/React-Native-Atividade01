import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

export default function TelaDeLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login');
    };

    const handleForgotPassword = () => {
        console.log('Forgot password');
    };

    return (
        <View style={styles.container}>
            <Text h3 style={styles.title}>
                Esqueceu a senha
            </Text>
            <Input
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                containerStyle={styles.input}
            />
            <Button
                title="Enviar"
                onPress={() => console.log('Criar conta')}
                type="solid"
                buttonStyle={styles.buttonPrimary}
                titleStyle={styles.buttonText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f3f4f6',
    },
    title: {
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        width: '100%',
        marginBottom: 10,
    },
    buttonPrimary: {
        backgroundColor: '#32CD32',
        width: '100%',
        marginTop: 4,
        borderRadius: 15,
        paddingVertical: 12,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonSecondary: {
        color: '#000',
        fontWeight: 'bold', 
        textAlign: 'center',
        marginTop: 10,
    },
});