import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { globalStyles } from '../globalStyles'

export default function Home({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text>Hello from Home</Text>
            <Button title="Go to about" onPress={()=>{navigation.navigate('About', {name:'Mudassir', age:23} )}}/>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
        </View>
    )
}

const styles=StyleSheet.create({
  
})
