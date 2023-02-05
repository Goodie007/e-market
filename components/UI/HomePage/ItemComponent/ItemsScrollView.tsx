import React from 'react'
import {View, Text, ScrollView, Pressable, Platform, FlatList, Image} from 'react-native'
import ItemBox from './ItemBox'

const values = [
    {
        imageUri: "https://res.cloudinary.com/dzgbe5sen/image/upload/v1666364637/Group_5005_uezpjb.png",
        text: "Sales",
        amount: "300k",
    },
    {
        imageUri: "https://res.cloudinary.com/dzgbe5sen/image/upload/v1666452761/Group_5167_hnzb0v.png",
        text: "AvgOrder",
        amount: "289k"
    },
    {
        imageUri: "https://res.cloudinary.com/dzgbe5sen/image/upload/v1666617812/Group_5168_zcsyvo.png",
        text: "AvgClicks",
        amount: "300k",
    },
     {
         imageUri: "https://res.cloudinary.com/dzgbe5sen/image/upload/v1666618058/Group_5168_miqj2d.png",
         text: "AvgViews",
         amount: "289k"
     },
    {
        imageUri: "https://res.cloudinary.com/dzgbe5sen/image/upload/v1666618208/Group_5171_xbplhn.png",
        text: "Total Successful",
        amount: "300k",
    },
    {
      imageUri: "https://res.cloudinary.com/dzgbe5sen/image/upload/v1666618328/Group_5008_h7lduh.png",
        text: "Total Declined",
        amount: "289k"
    }
]


export default function ItemScrollView() {
    return (
        <View
            style={{
                paddingTop: 26,
            }}
        >
             <FlatList
                data={values}
                numColumns={2}
                 showsVerticalScrollIndicator={true}
                 columnWrapperStyle={{
                    justifyContent: 'space-between'
                 }}
                 renderItem={({item, index}) => (
                    <View
                        style={{
                            width: '47%',
                            
                        }}
                    >
                        <View
                            style={{
                                height: 140,
                                width: '100%',
                                borderRadius: 10,
                            }}
                            key={index}
                        >         
                                <View
                                    style={{
                                        // display: 'flex',
                                        // justifyContent:"space-between", 
                                          
                                    }}
                                    
                                > 
                                    <ItemBox 
                                        image={item.imageUri}
                                        children={item.text} 
                                        amount={item.amount}                                       
                                    /> 
                                </View> 
                        </View> 
                    </View>
                 )}
              />
        </View>
    )
}