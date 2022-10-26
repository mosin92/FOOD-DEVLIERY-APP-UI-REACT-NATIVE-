import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants'

export default function VerticalFoodCard({ item, containerStyle, onPress }) {
    return (
        <TouchableOpacity
            style={{
                width: 200,
                alignItems: 'center',
                backgroundColor: COLORS.lightGray2,
                borderRadius: SIZES.radius,
                padding: SIZES.radius,
                ...containerStyle
            }}
        >
            {/* calories and favourite */}
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                {/* calories */}
                <View
                    style={{ flex: 1, flexDirection: 'row' }}
                >
                    <Image
                        style={{
                            height: 30,
                            width: 30
                        }}
                        source={icons.calories}
                    />
                    <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>{item.calories} Calories</Text>
                </View>

                {/* favourite */}
                <Image
                    source={icons.love}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
                    }}
                />
            </View>

            {/* image  */}
            <Image
                source={item.image}
                style={{
                    height: 150,
                    width: 150,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            />
            {/* info */}
            <View
                style={{
                    alignItems: 'center',
                    marginTop: -20
                }}
            >
                <Text style={{ color: 'black', ...FONTS.h3 }}>{item.name}</Text>
                <Text style={{ color: COLORS.darkGray2, textAlign: 'center', ...FONTS.body5 }}>
                    {item.description}
                </Text>
                <Text style={{ color: 'black', marginTop: SIZES.radius, ...FONTS.h2 }}>
                    ${item.price}
                </Text>
            </View>
        </TouchableOpacity>
    )
}