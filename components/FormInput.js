import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const FormInput = ({
    containerStyle,
    label,
    placholder,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoComplete = "off",
    autoCapitalize = "none",
    errorMsg = "",
    inputStyle,
    value,
    maxLength,
    inputContainerStyle
}) => {
    return (
        <View style={{ ...containerStyle, marginVertical: 5 }}>

            {/* label & error msg */}
            {
                label &&
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}
                >

                    <Text style={{
                        color: COLORS.gray, ...FONTS.body4
                    }} >{label}</Text>

                    <Text style={{ color: 'red', ...FONTS.body4 }}>{errorMsg}</Text>
                </View>

            }


            {/* text input */}

            <View
                style={{
                    flexDirection: 'row',
                    borderRadius: SIZES.radius,
                    marginTop: SIZES.base,
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.lightGray2,
                    height: 55,
                    ...inputContainerStyle
                }}
            >
                {prependComponent}

                <TextInput
                    maxLength={maxLength}
                    value={value}
                    style={{
                        flex: 1,
                        color: COLORS.gray2,
                        ...inputStyle
                    }}
                    placeholder={placholder}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={COLORS.gray2}
                    keyboardType={keyboardType}
                    autoComplete={autoComplete}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}

                />
                {appendComponent}

            </View>

        </View>
    )
}

export default FormInput