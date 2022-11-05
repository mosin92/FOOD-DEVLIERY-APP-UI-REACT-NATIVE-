import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, icons, images, dummyData, constants } from '../../constants'
import { CardItems, FooterTotal, FormInput, Header, IconButton } from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useEffect } from 'react'
import { useState } from 'react'

const Checkout = ({ navigation, route }) => {


    // **** states *** //

    const [selectedCardItems, setSelectedCard] = useState(null)
    const [coupon, setCoupon] = useState(null)
    // **** UI component **** //

    const renderHeader = () => {
        return (
            <Header
                title={"CHECKOUT"}
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

    const renderMyCard = () => {
        return (
            <View
            >
                {
                    dummyData.myCards.map(items => (
                        <CardItems
                            item={items}
                            key={`key-${items.id}`}
                            isSelected={`${selectedCardItems?.key}-${selectedCardItems?.id}` === `Mycard-${items.id}`}
                            onPress={() => setSelectedCard({ ...items, key: "Mycard" })}
                        />
                    ))
                }
            </View>
        )
    }


    const renderDeliveryAddress = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >

                {/* heading */}

                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                >
                    Delivery Address
                </Text>

                {/* Address */}

                <View
                    style={{
                        borderWidth: 1,
                        borderColor: COLORS.lightGray1,
                        borderRadius: SIZES.radius,
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.radius,
                        marginTop: SIZES.radius,
                        alignItems: 'center',
                        height: 50
                    }}
                >

                    {/* Image */}
                    <Image
                        source={icons.location1}
                        style={{
                            width: 25,
                            height: 25
                        }}

                    />

                    {/* text */}

                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.body3,
                            marginLeft: SIZES.base
                        }}
                    >
                        Street No 184/3 , H.no 317 ISB, PK
                    </Text>
                </View>

            </View>
        )
    }

    const renderCoupon = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                {/* heading */}

                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                >
                    Delivery Address
                </Text>

                {/* Coupon input */}

                <FormInput
                    placholder={"Coupon Code"}
                    containerStyle={{
                        backgroundColor: COLORS.white,
                        paddingHorizontal: 0
                    }}
                    inputContainerStyle={{
                        width: '100%',
                        backgroundColor: COLORS.white,
                        borderColor: COLORS.lightGray1,
                        borderWidth: 2,
                        paddingRight: 0,
                        overflow: "hidden"
                    }}

                    appendComponent={
                        <View
                            style={{
                                backgroundColor: COLORS.primary,
                                width: 50,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.discount}
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </View>
                    }

                    onChange={(value) => {
                        setCoupon(value)
                    }}
                />

            </View>
        )
    }

    // helper functions //

    useEffect(() => {
        const { selectedCard } = route.params
        setSelectedCard(selectedCard)
    }, [])


    // **** Ends helper function *** //


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* header */}
            {renderHeader()}

            {/* body */}
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding
                }}
                extraScrollHeight={-200}
            >
                {/* My Card */}
                {renderMyCard()}

                {/* Delivery Addres */}
                {renderDeliveryAddress()}

                {/* coupon */}
                {renderCoupon()}
            </KeyboardAwareScrollView>

            {/* footer */}

            <FooterTotal
                subTotal={40.59}
                shippingFee={0.00}
                total={40.59}
                onPress={() => navigation.replace(constants.privateStack.payment_success)}
            />

        </View>
    )
}

export default Checkout