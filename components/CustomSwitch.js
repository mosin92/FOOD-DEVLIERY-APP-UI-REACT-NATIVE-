import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const CustomSwitch = ({ value, onChange }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => onChange(!value)}
        >
            <View
                style={{ flexDirection: 'row' }}
            >
                {/* switch */}
                <View
                    style={
                        value ? styles.switchOnContainer : styles.switchOffContainer
                    }
                >
                    <View
                        style={{
                            ...styles.dot,
                            backgroundColor: value ? COLORS.white : COLORS.gray
                        }}
                    />

                </View>

                {/* text */}

                <Text
                    style={{
                        color: value ? COLORS.primary : COLORS.gray,
                        paddingLeft: SIZES.base,
                        ...FONTS.body4
                    }}
                >
                    Save me
                </Text>

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    switchOnContainer: {
        width: 40,
        height: 20,
        paddingRight: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 10,
        backgroundColor: COLORS.primary
    },
    switchOffContainer: {
        width: 40,
        height: 20,
        paddingLeft: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10,
        backgroundColor: COLORS.white,
        borderWidth: 1
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6
    }
})
export default CustomSwitch