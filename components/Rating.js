import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../constants'

const Rating = ({
    iconStyle,
    activeIcons = COLORS.orange,
    InactiveIcon = COLORS.lightOrange3,
    rating
}) => {
    return (
        <View
            style={{
                flexDirection: 'row'
            }}
        >
            <Image
                source={icons.star}
                style={{
                    tintColor: rating > 1 ? activeIcons : InactiveIcon,
                    ...styles.starStyle,
                    ...iconStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating > 2 ? activeIcons : InactiveIcon,
                    ...styles.starStyle,
                    ...iconStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating > 3 ? activeIcons : InactiveIcon,
                    ...styles.starStyle,
                    ...iconStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating > 4 ? activeIcons : InactiveIcon,
                    ...styles.starStyle,
                    ...iconStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating > 5 ? activeIcons : InactiveIcon,
                    ...styles.starStyle,
                    ...iconStyle
                }}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    starStyle: {
        width: 15,
        height: 15
    }
})
export default Rating