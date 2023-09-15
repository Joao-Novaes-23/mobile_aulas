import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Avatar, FAB, Header, ListItem } from 'react-native-elements';
import { useIsFocused} from "@react-navigation/native";



function listaContato({ navigation }) {

  const isFocused = useIsFocused();
  const [contact,setContacts] = useState([]);

  function consultarDados(){

    axios.get('http://localhost:3000/contato')
    
    .then(function (response) {
      setContacts(response.data);
    }).catch(function (error) {
    console.log(error);
    
    });
    
    }

  useEffect(()=>{
    consultarDados();
    isFocused;
  },[])


  return (


    <View >
      <Header leftComponent={
        { icon: 'home', style: { fontSize: 30 }, onPress: () => navigation.navigate('cadastroContato') }}

        centerComponent={{ text: 'Lista de Contatos', style: { color: 'white', fontSize: 27 } }} rightComponent={<FAB icon='add' title={'+'} titleStyle={{ fontSize: 24 }} color='transparent' size='small' onPress={() => navigation.navigate('cadastroContato')} />} />
      {
        contact.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() =>
            navigation.navigate('alteraContato', { nome: l.nome, telefone: l.telefone, email: l.email })}>
            <Avatar source={{ uri: l.avatar_url }} />

            <ListItem.Content >
              <ListItem.Title >{l.nome}</ListItem.Title>
              <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
  );
}


export default listaContato;

