import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TextButton = ({ label, labelStyle, buttonContainerStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={buttonContainerStyle}
            onPress={onPress}
        >
            <Text
                style={labelStyle}
            >{label}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton