import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TopComponent from './TopComponent';

export default function Profile(){
    return (
        <SafeAreaView>
            <View>
                <TopComponent />
            </View>
        </SafeAreaView>
    )
}