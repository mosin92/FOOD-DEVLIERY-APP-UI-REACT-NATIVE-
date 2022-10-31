import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TextButton = ({ label, disabled, labelStyle, buttonContainerStyle, onPress }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
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