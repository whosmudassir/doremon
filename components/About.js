import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../globalStyles'

export default function About({route,navigation}) {
    const {name, age}=route.params
    return (
        <View style={globalStyles.container}>
            <Text>Hello from About {name}</Text>
        </View>
    )
}
