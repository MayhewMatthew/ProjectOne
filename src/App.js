import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const galoCegoPhoto = 'https://pbs.twimg.com/profile_images/1247541831069360132/tZQJeaOA_400x400.jpg';
const galoCegoVideo = "https://www.youtube.com/watch?v=hAx4Lql_-VI&t=10s";

const App = ()=>{
    const handlePressGoToGaloCegoVideo = async ()=>{
       const res = await Linking.canOpenURL(galoCegoVideo)
       if(res){
         await Linking.openURL(galoCegoVideo);
       }
    };
    return(
        <SafeAreaView style = {style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle = "light-content"/>
            <View style = {style.content}>
                <Image style = {style.avatar} source ={{uri: galoCegoPhoto}}/>

                <Text accessibilityLabel='Galo Cego' 
                style = {[style.text, style.name]}>Galo Cego</Text>

                <Text accessibilityLabel='arroba galocego' 
                style = {[style.text, style.nickname]}>@galocego</Text> 

                <Text accessibilityLabel='Estrela da internet, filantropo e filósofo'
                style = {style.description}>Estrela da internet, filantropo e filósofo</Text>             
            </View>
            <Pressable onPress={handlePressGoToGaloCegoVideo}>            
            <View style = {style.button}>
                <Text style = {[style.nickname, style.text]}>
                    Open in YouTube
                </Text>
            </View>
            </Pressable>
        </SafeAreaView>    
    );    
};
export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGitHub, 
        flex: 1, //expandir para a tela inteira
        justifyContent: 'center',
    },
    content:{
        alignItems: 'center',
    },
    name:{
        fontSize: 50,
    },
    text:{
        fontWeight: 'bold',
        color: "lightyellow",
        textAlign: 'center',
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
    },   
    nickname:{
        fontSize: 25,
    },
    description:{
        fontSize: 15,
        color: "white",
        textAlign: 'center',
        marginTop: 25,
    },
    button:{
        marginTop: 20,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 20,
    },

})