import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'

const TextButton = ({ label, disabled, labelStyle, buttonContainerStyle, onPress, label2 = "", label2Style }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={buttonContainerStyle}
            onPress={onPress}
        >
            <Text
                style={{
                    color: COLORS.white,
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >{label}
            </Text>

            {
                label2 != "" &&
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h4,
                        textAlign: 'right',
                        ...label2Style
                    }}
                >
                    {label2}
                </Text>
            }
        </TouchableOpacity>
    )
}

export default TextButton