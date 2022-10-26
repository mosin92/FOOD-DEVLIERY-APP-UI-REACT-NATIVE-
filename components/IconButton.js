import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function IconButton({
    containerStyle,
    icon,
    onPress,
    iconStyle
}) {
    return (
        <TouchableOpacity
            style={{
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                style={{
                    width: 30,
                    height: 30,
                    ...iconStyle
                }}
                source={icon}
            />
        </TouchableOpacity>
    )
}