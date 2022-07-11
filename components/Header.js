import { View, Text } from 'react-native'
import React from 'react'

export default function Header({ containerStyle, title, LeftComponent, RightComponent }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                ...containerStyle
            }}
        >
            {/* let component */}
            {LeftComponent}

            {/* title */}
            <View
                style={{
                    flex: 1,
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >

                <Text
                    style={{
                        color: 'black'
                    }}
                >{title}</Text>
            </View>

            {/* Right component */}
            {RightComponent}

        </View>
    )
}