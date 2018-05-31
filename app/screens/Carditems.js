import React from 'react';
import { StyleSheet, Image, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, Button, CardItem, Body, Text } from 'native-base';
var width = Dimensions.get('window').width;



export default class Carditems extends React.Component{
    constructor(props){
        super(props);
        let albums = []; 
       
    }
    
    my(items){
        albums = items;
       }


    render(){  
    return (       
       
        <Content>
            <Card>
                <CardItem style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ededed', justifyContent: "center", alignItems: "center" }}>
                    <Body style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ textAlignVertical: "center",fontWeight: 'bold', textAlign: "center" }}>{albums.title} </Text>
                        <Image style={styles.stretch} source={{ uri: albums.urlToImage }}></Image>
                        <Text style={{ textAlignVertical: "center",marginTop:8,fontWeight: 'normal', textAlign: "justify" }}>{albums.description} </Text>
                        <Button block style={{ marginTop: 10 }} onPress={this.props.myRouter}  >
                            <Text >View Full Story</Text>
                        </Button>
                    </Body>

                </CardItem>
            </Card>
        </Content>
        
    );
}

}


const styles = StyleSheet.create({
    TextStyle: {
        textAlign: 'center',
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
        fontSize: 18,
    },


    stretch: {
        marginTop: 10,
        width: width ,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    }
});
