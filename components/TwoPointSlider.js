import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { COLORS, FONTS, SIZES } from '../constants'

function TwoPointSlider({
    values, min, max, onValuesChange, prefix
}) {
    return (
        <MultiSlider
            values={values}
            min={min}
            max={max}
            step={1}
            sliderLength={SIZES.width - (SIZES.padding * 2.9) - 20}
            selectedStyle={{
                backgroundColor: COLORS.primary
            }}
            trackStyle={{
                height: 10,
                backgroundColor: COLORS.lightGray2,
                borderRadius: 10
            }}
            markerOffsetY={20}
            customMarker={(e) => {
                return (
                    <View
                        style={{
                            height: 60,
                            alignItems: 'center',
                            alignContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                height: 30,
                                width: 30,
                                borderRadius: 15,
                                borderWidth: 4,
                                borderColor: COLORS.white,
                                backgroundColor: COLORS.primary,
                                ...styles.shadow
                            }}
                        />
                        <Text
                            style={{
                                color: COLORS.darkGray,
                                marginTop: 5,
                                ...FONTS.body3
                            }}
                        >
                            {prefix} {e.currentValue}
                        </Text>
                    </View>
                )
            }}
            onValuesChange={(values) => onValuesChange(values)}
        />
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            height: 3,
            width: 0
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation:1
    }
})
export default TwoPointSlider