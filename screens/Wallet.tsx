import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import WalletPage from '../components/UI/WalletPage';


export default function Wallet(){
    return (
        <SafeAreaView>
            <View>
             <WalletPage />
            </View>
        </SafeAreaView>
    )
}