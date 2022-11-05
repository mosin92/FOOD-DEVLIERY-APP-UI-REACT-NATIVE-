import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, icons, images, dummyData, constants } from '../../constants'
import { FormInput, FormInputCheck, Header, IconButton, RadioButton, TextButton } from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useState } from 'react'
import { useEffect } from 'react'
import utils from '../utils/Utils'

const AddCard = ({ navigation, route }) => {

    const [selectedCardItem, setSelectedCard] = useState(null)
    const [cardNumber, setCardNumber] = useState('')
    const [cardNumberError, setCardNumberError] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardNameError, setCardNameError] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [expiryDateError, setExpiryDateError] = useState('')
    const [cvc, setCVC] = useState('')
    const [cvcError, setCVCError] = useState('')
    const [isRememberme, setRememberme] = useState(false)

    useEffect(() => {
        const { selectedCard } = route.params
        setSelectedCard(selectedCard)
    }, [])


    // *** helper function ***
    const isEnablebtn = () => {
        return cardName != "" && cardNumber != "" && expiryDate != "" && cvc != "" &&
            cardNameError == "" && cardNameError == "" && expiryDateError == "" && cvcError == ""
    }

    // **** UI component **** //

    const renderHeader = () => {
        return (
            <Header
                title={"ADD NEW CARD"}
                containerStyle={{
                    marginTop: 20,
                    paddingHorizontal: SIZES.padding,
                }}
                LeftComponent={
                    <IconButton
                        onPress={() => navigation.goBack()}
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                }

                RightComponent={
                    <View
                        style={{
                            width: 40
                        }}
                    />
                }
            />
        )
    }

    const renderCard = () => {
        return (
            <ImageBackground
                source={images.card}
                style={{
                    height: 200,
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,
                    overflow: 'hidden'
                }}
            >
                {/* Logo */}

                <Image
                    source={selectedCardItem?.icon}
                    resizeMode='contain'
                    style={{
                        height: 40,
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        height: 40,
                        width: 80,
                    }}
                />

                {/*Card Details */}

                <View
                    style={{
                        position: 'absolute',
                        left: 0,
                        bottom: 10,
                        right: 0,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white
                        }}
                    >{selectedCardItem?.name}</Text>

                    <View
                        style={{
                            flexDirection: 'row',

                        }}
                    >

                        <Text
                            style={{
                                flex: 1,
                                ...FONTS.body3,
                                color: COLORS.white
                            }}
                        >
                            {cardNumber}
                        </Text>

                        <Text
                            style={{
                                color: COLORS.white
                            }}
                        >
                            23/12
                        </Text>

                    </View>
                </View>


            </ImageBackground>
        )
    }

    // **** Form Input ***

    const renderForms = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                {/* Card Number */}
                <FormInput
                    label={"Card Number"}
                    keyboardType="number-pad"
                    errorMsg={cardNumberError}
                    value={cardNumber}
                    maxLength={19}
                    onChange={(value) => {
                        setCardNumber(value.replace(/\s/g, "").replace(/(\d{4})/g, '$1 ').trim())
                        utils.validateInput(value, 19, setCardNumberError)
                    }}
                    appendComponent={
                        <FormInputCheck
                            value={cardNumber}
                            error={cardNumberError}
                        />
                    }
                />

                {/* Card Holder Name */}
                <FormInput
                    label={"CardHolder Name"}
                    errorMsg={cardNameError}
                    value={cardName}
                    maxLength={19}
                    onChange={(value) => {
                        setCardName(value)
                        utils.validateInput(value, 1, setCardNameError)
                    }}
                    appendComponent={
                        <FormInputCheck
                            value={cardName}
                            error={cardNameError}
                        />
                    }
                />

                {/* Expiry and CVC */}

                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    {/* Expiry */}
                    <FormInput
                        containerStyle={{
                            flex: 1
                        }}
                        maxLength={5}

                        label={"Expiry Date"}
                        placholder="MM/YY"
                        value={expiryDate}
                        onChange={(value) => {
                            setExpiryDate(value)
                            utils.validateInput(value, 5, setExpiryDateError)
                        }}
                        appendComponent={
                            <FormInputCheck
                                value={expiryDate}
                                error={expiryDateError}
                            />
                        }
                    />

                    {/* CVC */}

                    <FormInput
                        containerStyle={{
                            flex: 1,
                            marginLeft: SIZES.radius
                        }}
                        maxLength={5}
                        label={"CVC"}
                        value={cvc}
                        onChange={(value) => {
                            setCVC(value)
                            utils.validateInput(value, 5, setExpiryDateError)
                        }}
                        appendComponent={
                            <FormInputCheck
                                value={cvc}
                                error={setCVCError}
                            />
                        }
                    />

                </View>

                {/* Remember me  */}

                <RadioButton
                    isSelected={isRememberme}
                    label={"Remeber this card details"}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onPress={() => setRememberme(!isRememberme)}
                />

            </View>

        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    marginVertical: SIZES.padding,
                    flex: 1,
                    justifyContent: 'flex-end'
                }}
            >
                <TextButton
                    label={"Add Card"}
                    disabled={!isEnablebtn()}
                    buttonContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        height: 55,
                        backgroundColor: isEnablebtn() ? COLORS.primary :COLORS.transparentPrimray
                    }}

                />

            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}

            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* render Card */}
                {renderCard()}

                {/* render form */}
                {renderForms()}


                {/* Footer */}
                {renderFooter()}
            </KeyboardAwareScrollView>
        </View>
    )
}

export default AddCard