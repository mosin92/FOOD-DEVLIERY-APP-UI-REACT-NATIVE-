import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CardItems, Header, IconButton, TextButton } from '../../components'
import { SIZES, COLORS, FONTS, icons, images, dummyData, constants } from '../../constants'

const MyCard = ({ navigation }) => {

    const [selectedCardItems, setSelectedCard] = useState(null)

    // UI components
    const renderHeader = () => {
        return (

            <Header
                title={"MY CARD"}
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
            <View>
                {dummyData.myCards.map(items => (
                    <CardItems
                        key={`key-${items.id}`}
                        item={items}
                        isSelected={`${selectedCardItems?.key}-${selectedCardItems?.id}` === `Mycard-${items.id}`}
                        onPress={() => setSelectedCard({ ...items, key: "Mycard" })}
                    />
                ))}
            </View>
        )
    }

    const renderNewCard = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                >
                    Add New Card
                </Text>

                {dummyData.allCards.map(items => (
                    <CardItems
                        key={`key-${items.id}`}
                        item={items}
                        isSelected={`${selectedCardItems?.key}-${selectedCardItems?.id}` === `NewCard-${items.id}`}
                        onPress={() => setSelectedCard({ ...items, key: "NewCard" })}
                    />
                ))}

            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.radius
                }}
            >
                <TextButton
                    disabled={selectedCardItems === null}
                    label={selectedCardItems?.key === "NewCard" ? "Add" : "Place Your Order"}
                    buttonContainerStyle={{
                        backgroundColor: selectedCardItems === null ? COLORS.transparentPrimray : COLORS.primary,
                        borderRadius: SIZES.radius,
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    labelStyle={{
                        color: COLORS.white
                    }}
                    onPress={() => {
                        if (selectedCardItems?.key === "NewCard") {
                            navigation.navigate(constants.privateStack.add_card, {
                                selectedCard: selectedCardItems
                            })
                        }
                        else {
                            navigation.navigate(constants.privateStack.checkout, {
                                selectedCard: selectedCardItems
                            })
                        }
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

            {/*My Card */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.radius,
                    paddingBottom: SIZES.radius
                }}
            >
                {/* Render My Card */}
                {renderMyCard()}

                {/* New Card */}

                {renderNewCard()}

            </ScrollView>

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default MyCard