import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, icons, dummyData, constants } from '../../constants'
import { Header, IconButton, LineDivider, TextButton, TextButtonIcon } from '../../components'
import { useState } from 'react'

const DeliveryStatus = ({ navigation }) => {


    const [currentSteps, setCurrentSteps] = useState(3)

    // **** UI component **** //

    const renderHeader = () => {
        return (
            <Header
                title={"DELIVERY STATUS"}
                containerStyle={{
                    marginTop: 20,
                    paddingHorizontal: SIZES.padding,
                }}
                LeftComponent={
                    <View
                        style={{
                            width: 40
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

    const renderInfo = () => {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 2
                }}
            >
                <Text
                    style={{
                        color: COLORS.gray,
                        ...FONTS.body3
                    }}
                >
                    Estimated Delivery
                </Text>

                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h2
                    }}
                >
                    20 Jan 2022 / 12:30 PM
                </Text>
            </View>
        )
    }

    const renderOrderTrack = () => {
        return (
            <View
                style={{
                    backgroundColor: COLORS.lightGray2,
                    borderRadius: SIZES.radius,
                    padding: SIZES.radius,
                    marginTop: SIZES.padding
                }}
            >

                <View
                    style={{
                        marginTop: SIZES.radius,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginBottom: SIZES.radius
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h3
                        }}
                    >
                        Track Order
                    </Text>

                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body3
                        }}
                    >
                        NOY12356M
                    </Text>

                </View>

                {/* divider */}

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                {/* Status */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                    }}
                >
                    {
                        constants.track_order_status.map((items, index) => (
                            <View
                                key={`statuslist-${index}`}

                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginVertical: -7,
                                    }}
                                >
                                    <Image
                                        source={icons.check_circle}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            tintColor: index <= currentSteps ? COLORS.primary : COLORS.lightGray1
                                        }}
                                    />

                                    <View
                                        style={{
                                            marginLeft: SIZES.radius
                                        }}
                                    >

                                        <Text
                                            style={{
                                                color: COLORS.black,
                                                ...FONTS.h3
                                            }}
                                        >
                                            {items.title}
                                        </Text>

                                        <Text
                                            numberOfLines={3}
                                            style={{
                                                flex: 1,
                                                color: COLORS.gray,
                                                ...FONTS.body4
                                            }}
                                        >
                                            {items.sub_title}
                                        </Text>
                                    </View>

                                </View>

                                {index < constants.track_order_status.length - 1 &&
                                    <>
                                        {
                                            index < currentSteps &&
                                            <View
                                                style={{
                                                    width: 3,
                                                    height: 50,
                                                    backgroundColor: COLORS.primary,
                                                    zIndex: -1,
                                                    marginLeft: 14
                                                }}
                                            />
                                        }


                                        {
                                            index >= currentSteps &&
                                            <Image
                                                source={icons.dotted_line}
                                                resizeMode='cover'
                                                style={{
                                                    width: 3,
                                                    height: 50,
                                                    marginLeft: 14
                                                }}
                                            />
                                        }
                                    </>
                                }


                            </View>
                        ))
                    }
                </View>

            </View>
        )
    }

    const renderFooter = () => {
        return (
            <>
                {
                    currentSteps <= constants.track_order_status.length - 1 &&

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: SIZES.radius
                        }}
                    >
                        {/* cancel btn */}

                        <TextButton
                            label={"Cancel"}
                            buttonContainerStyle={{
                                backgroundColor: COLORS.lightGray2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 55,
                                borderRadius: SIZES.radius,
                                width: '40%',

                            }}
                            labelStyle={{
                                color: COLORS.primary
                            }}

                        // on Press back to food detail
                        />


                        {/* Map view btn */}

                        <TextButtonIcon
                            containerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 55,
                                backgroundColor: COLORS.primary,
                                width: '40%',
                                borderRadius: SIZES.radius
                            }}
                            position="LEFT"
                            icon={icons.map}
                            label={'Map View'}
                            labelStyle={{
                                color: COLORS.white,
                                marginLeft: SIZES.base
                            }}
                            onPress={() => navigation.navigate(constants.privateStack.map)}
                        />

                    </View>
                }

                {
                    currentSteps >= constants.track_order_status.length - 1 &&
                    <TextButton
                        label={"Done"}
                        buttonContainerStyle={{
                            backgroundColor: COLORS.primary,
                            borderRadius: SIZES.radius,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 55,
                            marginVertical: SIZES.radius
                        }}
                    // onPres redirect to food page
                    />
                }
            </>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}

            {renderHeader()}

            {/* Info */}

            {renderInfo()}

            {/* Track Order */}

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {renderOrderTrack()}

            </ScrollView>

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default DeliveryStatus