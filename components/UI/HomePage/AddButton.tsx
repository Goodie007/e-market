import React from 'react'
import {View, Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function AddButton(){
    return (
        <View
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#063970',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 50,
                right: 30,
                position: 'absolute',
            }}
        >
            <AntDesign name="plus" size={24} color="#FFFFFF" />
        </View>
    )
}