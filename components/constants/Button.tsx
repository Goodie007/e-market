import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

interface ButtonProps {
    children?: React.ReactNode
    label?: string
    onPress: any
    showLoading?: boolean
    labelStyle?: any;
    disabled?: boolean;
    submitting?: string;
}


export default function Button({
    children,
    label = '',
    onPress,
    labelStyle,
    disabled,
    submitting,
    ...props
 }: ButtonProps) {
    return (
        <View >
            <TouchableOpacity
                onPress={onPress}
                disabled={ disabled }
                
            >
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      
                    }}
                >
                <Text 
                    style={{...labelStyle}}
                    {...props}
                >
                    {label}
                    {children ? children : null}
                </Text>
                </View>
            </TouchableOpacity>
    </View>
    )
}