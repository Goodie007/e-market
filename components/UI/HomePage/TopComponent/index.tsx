import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react'
import {View, Text, Image, SafeAreaView, FlatList, useWindowDimensions} from 'react-native';

//const disk = require('../../../../assets/images/disk.jpeg')


export default function TopComponents(){
    const flatlistItemsRef = useRef()
    const width = useWindowDimensions().width
    const [currentPage, setCurrentPage] = useState(0)
    const [viewableItems, setViewableItems] = useState([])
    const navigation = useNavigation()

    const  data = [
         {
             id: '1',
             image: 'https://res.cloudinary.com/dzgbe5sen/image/upload/v1663847655/Frame_5106_keoxtu.png',
             title: 'Do Business Better',
             body: 'nae',
         },
    
        {
            id: '2',
            image: 'https://res.cloudinary.com/dzgbe5sen/image/upload/v1663847766/sammy-man-delivering-package-to-woman_2_zb44ta.png',
            title: 'List and Sell Anywhere',
            body: "Go from listing your products to making your first sale in just a few steps",
        },
    
        {
            id: '3',
            image: 'https://res.cloudinary.com/dzgbe5sen/image/upload/v1663847856/sammy-bicycle-courier-delivering-food_2_f0cbsr.png',
            title: 'More Reach, More Sales',
            body: "Reach the WORLD with your product with our built-in social selling tools",
        },
    
        {
            id: '4',
            image: 'https://res.cloudinary.com/dzgbe5sen/image/upload/v1663847922/sammy-workflow_2_jprugy.png',
            title: 'Fast and Easy Payments',
            body: "Experience smooth and fast transactions with all your digital wallet",
        },
    ]

    const flatlistItems = ({item}: any) => {
        
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 50,
                    marginLeft: 10,
                    width,
                }}
            >
                <Image
                    source={{ uri: item.image  }}
                    style={{
                        width: '100%',
                        height: 200,
                        borderRadius: 10,
                        borderWidth: 1,
                        resizeMode: 'contain',
                       
                    }}
                 />
                 <View>
                    <Text
                         style={{
                            fontFamily: 'Raleway-Bold',
                            fontSize: 24,
                            // fontWeight: '700',
                            lineHeight: 32,
                            color: '#2D3637',
                            textAlign: 'center'
                        }}
                    >{item.title}</Text>
                    <View
                        style={{
                            width: '90%',
                        }}
                    >
                    </View>
                 </View>
            </View>
        )
    }


    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem = {flatlistItems}
                horizontal={true}
             />
        </SafeAreaView>
    )
}