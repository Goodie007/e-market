import React from 'react';
import {View, Text, FlatList} from 'react-native';

const pexel = require('../../../assets/images/pexel.jpg')
const two =  require('../../../assets/images/pexel2.jpg')
const three = require('../../../assets/images/pexel3.jpg')
const four = require('../../../assets/images/pexel4.jpg')
const five = require('../../../assets/images/pexel.jpg')

type ItemsProps = {
    id: string;
    messageText: string;
    messageTime: string;
    userName: string;
    userImg: string;
}


export default function MessageComponent(){

    const Data = [
        {
            id: '0',
            userName: 'John Doe',
            userImg: pexel,
            messageTime: '4 mins ago',
            messageText: 'hey there, hello world',
        },
        {
            id: '1',
            userName: 'Jane Doe',
            userImg: two,
            messageTime: '4 mins ago',
            messageText: 'hey there, hello world',
        },
        {
            id: '2',
            userName: 'Johny Doe',
            userImg: three,
            messageTime: '4 mins ago',
            messageText: 'hey there, hello world',
        },
        {
            id: '3',
            userName: 'James Doe',
            userImg: four,
            messageTime: '4 mins ago',
            messageText: 'hey there, hello world',
        },
        {
            id: '4',
            userName: 'Ok Doe',
            userImg: five,
            messageTime: '4 mins ago',
            messageText: 'hey there, hello world',
        },
        {
            id: '5',
            userName: 'Jon Doe',
            userImg: pexel,
            messageTime: '4 mins ago',
            messageText: 'hey there, hello world',
        },

    ]

    const Items = ({id, userImg, messageTime, messageText, userName}: ItemsProps) => {
        return (
            <View>
               <Text
                style={{
                    color: 'black'
                }}
               >{messageText}</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={Data}
                renderItem={(item: any) => {
                    return (
                        <Items id={''} messageText={'messageText'} messageTime={''} userName={''} userImg={''} />
                    )
                }}
                keyExtractor={item => item.id}
             />
        </View>
    )
}