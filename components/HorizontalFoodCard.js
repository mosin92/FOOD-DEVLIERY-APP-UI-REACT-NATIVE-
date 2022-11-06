import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants'

export default function HorizontalFoodCard({ containerStyle, imageStyle, item, onPress }) {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                backgroundColor: COLORS.lightGray2,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Image */}
            <Image
                source={item.image}
                style={imageStyle}
            />


            {/* info */}

            <View
                style={{
                    flex: 1
                }}
            >
                {/* name */}
                <Text style={{ ...FONTS.h3, fontSize: 17, color: 'black' }}>{item.name}</Text>

                {/* description */}
                <Text style={{ color: COLORS.darkGray, ...FONTS.body4, }}>
                    {item.description}
                </Text>

                {/* Price */}

                <Text style={{ color: 'black', ...FONTS.h2 }}>${item.price}</Text>
            </View>

            {/* calories */}
            <View
                style={{
                    position: 'absolute',
                    top: 5,
                    right: SIZES.radius,
                    flexDirection: 'row'
                }}
            >
                <Image
                    source={icons.calories}
                    style={{
                        height: 30,
                        width: 30
                    }}
                />
                <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>{item.calories} Calories</Text>
            </View>

        </TouchableOpacity>
    )
}