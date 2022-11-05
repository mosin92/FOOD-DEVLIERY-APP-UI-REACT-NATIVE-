import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'


const CardItems = ({ item, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 100,
                paddingHorizontal: SIZES.padding,
                borderWidth: 2,
                borderRadius: SIZES.radius,
                borderColor: isSelected ? COLORS.primary : COLORS.lightGray2,
                marginTop: SIZES.radius
            }}
        >

            {/*Car Image  */}
            <View
                style={{
                    width: 60,
                    height: 45,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: COLORS.lightGray2,
                    borderWidth: 2
                }}
            >
                <Image
                    source={item.icon}
                    resizeMode='center'
                    style={{
                        width: 25,
                        height: 25
                    }}
                />

            </View>

            {/* Name  */}
            <Text
                style={{
                    flex: 1,
                    color: COLORS.black,
                    ...FONTS.h3,
                    marginLeft: SIZES.radius
                }}
            >
                {item.name}
            </Text>

            {/* radio button */}
            <Image
                source={isSelected ? icons.check_on : icons.check_off}
                style={{
                    width: 25,
                    height: 25
                }}
            />
        </TouchableOpacity>
    )
}

export default CardItems