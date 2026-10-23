import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { ListItem, SearchBar, Icon, Image, Avatar } from 'react-native-elements';
import { StyleSheet, Text, ScrollView, Pressable, Alert, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute, NavigationContainer } from "@react-navigation/native";
import itens from './Inicial';

//https://reactnative.dev/docs/tutorial
//banco de dados => https://firebase.google.com/docs/firestore?hl=pt-br

//atualizar versao do node pra v24.22.21 pro firebase rodar normalmente
//https://nodejs.org/pt-br/download

const Item = () => {

    return(
        <View>
            <Text>É isso aí</Text>
        </View>
    )
};

const style = StyleSheet.create({

});

export default Item;