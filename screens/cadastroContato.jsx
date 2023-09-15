import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';


export default function cadastroContato({ navigation }) {


  const [nome, setNome] = useState([]);
  const [email, setEmail] = useState([]);
  const [telefone, setelefoe] = useState([]);

  function inserirDados() {

    axios.post('http://localhost:3000/contato'
      , {
        
        nome: nome,
        email: email,
        telefone: telefone    
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);

      });

  }

  return (
    <> <Header
      leftComponent={{ icon: 'home', onPress: () => navigation.navigate('cadastroContato'), style: { fontSize: 30 } }}
      centerComponent={{ text: 'Novo Contato', style: { color: 'white', fontSize: 27 } }}

    />
      <View style={[styles.container]}>
        <Text style={{ fontSize: 29, fontWeight: 'bold' }}>Cadastro de novo contato</Text>

        <Input
          onChangeText={text => setNome(text)}
          placeholder='nome'
        />
        <Input
          placeholder='email'
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder='telefone'
          onChangeText={text => setelefoe(text)}
        />


        <Text></Text>
        <Button title="cadastrar" type="outline" onPress={() => inserirDados() } />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    justifyContent: 'center',
    alignItems: 'center'
  },
});


