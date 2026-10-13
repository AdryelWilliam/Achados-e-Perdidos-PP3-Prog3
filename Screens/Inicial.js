import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { ListItem, SearchBar, Icon, Image, Avatar } from 'react-native-elements';
import { Header } from '@rneui/themed';
import { StyleSheet, Text, View, Pressable, Alert, FlatList, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute, NavigationContainer } from "@react-navigation/native";

const itens = [
    {
      nome: 'Item 1',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CuFWYHxngNBxvuv_fCb6Gc_J0znbdDM2DIHX-xY8jQ&s',
      //icon: 'apparel',
      descricao: 'O item 1 foi encontrado em tal lugar em tal dia'
    },
    {
      nome: 'Item 2',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6kRNdZzBxQ2nXriy7lsr72-ii7iBbzc7HfLqzDEK_w&s=10',
      //icon: 'cards-stack',
      descricao: 'O item 2 foi encontrado em tal lugar em tal dia'
    },
    {
      nome: 'Item 3',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6kRNdZzBxQ2nXriy7lsr72-ii7iBbzc7HfLqzDEK_w&s=10',
      //icon: 'cards-stack',
      descricao: 'O item 3 foi encontrado em tal lugar em tal dia'
    },
  ]
  
  const Item = ({item}) => (
    <View style={styles.item}>
      <Avatar
        source={{uri: item.avatar_url}}
        style={styles.imagem}
      />
      <Text style={styles.text_item}>{item.nome}</Text>
      <Text style={styles.text_item}>{item.descricao}</Text>
    </View>
  );

const Inicial = () => {
  //de SearchBar - React Native elements
  //const [pesquisa, setPesquisa] = useState("");

  const [ pesquisa, onChangePesquisa ] = useState("");

  
  const renderItem = ({item}) => {

    return (
      <Item
        item={item}
      />
    )
  }

   //do ListItem - React Native Elements

  return (

    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>

          {/*<SearchBar
            placeholder='Pesquisar...'
            onChangeText={this.setPesquisa}
            value = {pesquisa}
          />*/}

          <TextInput
            style={styles.barra_pesquisa}
            inlineImageLeft='search_icon'
            inputMode='search'
            onChangeText = {onChangePesquisa}
            value = {pesquisa}
          />

          <View style = {styles.itens}>

            <Pressable style = {styles.itens}>
              <Text style={styles.addItem}>Registrar Item Perdido</Text>
            </Pressable>
        
            <FlatList
              data = {itens}
              renderItem={renderItem}
              scrollEnabled={true}
            />
          </View>
          
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    justifyContent: 'center',
    alignItens: 'center',
    height: '100%',
    width: '100%',
  },
  view: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    justifyContent: 'center',
    alignContent: 'stretch',
  },
  input: { 
    borderWidth: 2,
    borderRadius: 100,
    height: 40,
    width: 320,
    padding: 10,
    margin: 10,
    paddingLeft: 20,
    backgroundColor: '#D9D9D9',
  }, 
  barra_pesquisa: { 
    borderWidth: 1,
    borderRadius: 100,
    height: 40,
    width: 320,
    padding: 10,
    margin: 10,
    paddingLeft: 20,
    backgroundColor: '#e3e2e2',
    alignSelf: 'center',
  },
  text: {
    marginEnd: 250,
    marginHorizontal: 30,
    fontSize: 17
  },
  addItem: {
    bottom: 20, 
  },
  text_botao: {
    color: '#121212',

  },
  pressable: {
    backgroundColor: '#AFA9FF',
    width: 220,
    height: 10,
    borderRadius: 35,
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itens: {
    flexDirection: 'row',
    alignItem: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 25,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  item: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#e2dcdc',
    boxShadow: '0px 2px 4px rgba(59, 59, 59, 0.21)',
    backgroundColor: '#ededed'
  },
  text_item: {
    fontSize: 12,
    margin: 5,
  },
  //https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-shadow
  imagem: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    margin: 8,
  },
});

export default Inicial;