import React from 'react'
import { View, Text, Image, Platform } from 'react-native'

interface BoxProps {
    image: string;
    children: React.ReactNode;
    style?: any;
    amount: string;
}

export default function ItemBox({ image, children, amount, style}: BoxProps) {
    return (
        <View
            style={{
                width: '100%',
                height: 126.83,
                backgroundColor: "#FFFFFF",
                justifyContent: 'center',
                paddingLeft: 16,
                borderRadius: 10,
                paddingBottom: 0,
                
            }}
        >
            <Image 
                source={{ uri: image }}
                style={{
                    width: 28,
                    height: 28,
                }}
            />
            <Text style={{ 
                paddingTop: 10,
                fontFamily: 'Raleway-Regular',
                fontSize: 14,
                fontWeight: '500',
                
            }}>{children}</Text>
            <Text
                style={{
                    fontFamily: 'Raleway-Bold',
                    fontSize: 18,
                    paddingTop: 19,
                }}
            >{amount}</Text>
        </View>
    )
}