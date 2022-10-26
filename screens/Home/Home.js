import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SIZES, COLORS, FONTS, constants, dummyData, icons, images } from '../../constants'
import { HorizontalFoodCard, VerticalFoodCard } from '../../components'
import FilterModal from './FilterModal'

export default function Home() {

    const [selectedCategoryId, setSelectedCategoryId] = useState(1)
    const [selectedMenuType, setSelectedMenuType] = useState(1)
    const [MenuList, setMenuList] = useState([])
    const [Recommend, setRecommend] = useState([])
    const [Popular, setPopular] = useState([])
    const [showFilterModal, setShowFilterModal] = useState(false)

    useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)

    }, [])

    // handler
    const handleChangeCategory = (selectedCategoryId, MenuTypeid) => {
        // retrive popular menu
        const selectedPopular = dummyData.menu.find(item => item.name === "Popular")

        // set popular menu
        setPopular(selectedPopular.list.filter(item => item.categories.includes(selectedCategoryId)))

        // recommended selection
        let SelectedRecommend = dummyData.menu.find(item => item.name === "Recommended")
        //set recommended menu
        setRecommend(SelectedRecommend?.list.filter(val => val.categories.includes(selectedCategoryId)))

        let selectedMenu = dummyData.menu.find(item => item.id === MenuTypeid)
        setMenuList(selectedMenu?.list.filter(item => item.categories.includes(selectedCategoryId)))

    }

    const RenderSearch = () => {
        return (
            <View
                style={{
                    height: 40,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2,
                }}
            >
                {/* icon */}
                <Image
                    style={{
                        height: 20,
                        width: 20
                    }}
                    source={icons.search} />

                {/* textInput */}

                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.h3,
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder="search food"
                />

                {/* filter Button */}
                <TouchableOpacity
                    onPress={() => setShowFilterModal(true)}
                >
                    <Image
                        style={{
                            height: 20,
                            width: 20
                        }}
                        source={icons.filter}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    const renderMenuType = () => {
        return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dummyData.menu}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom: 20
                }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={{
                                marginLeft: SIZES.padding,
                                marginRight: index === dummyData.menu.length - 1 ? SIZES.padding : 0,
                            }}
                            onPress={() => {
                                setSelectedMenuType(item.id)
                                handleChangeCategory(selectedCategoryId, item.id)
                            }}
                        >
                            <Text
                                style={{
                                    color: selectedMenuType === item.id ? COLORS.primary : 'black',
                                    ...FONTS.h3
                                }}
                            >{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        )
    }

    const Section = ({ title, onPress, children }) => {
        return (
            <View>

                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: SIZES.padding,
                        marginTop: 30,
                        marginBottom: 30
                    }}
                >
                    <Text style={{ color: 'black', flex: 1, ...FONTS.h3 }}>{title}</Text>

                    <TouchableOpacity
                        onPress={onPress}
                    >
                        <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>Show All</Text>
                    </TouchableOpacity>

                </View>

                {/* content */}
                {children}
            </View>
        )
    }

    const renderRecommendedSection = () => {
        return (
            <Section
                title='Recommended'
                onPress={() => console.log("---- on Press -----")}
            >
                <FlatList
                    data={Recommend}
                    horizontal
                    keyExtractor={item => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (

                            <HorizontalFoodCard
                                containerStyle={{
                                    height: 180,
                                    width: SIZES.width * 0.8,
                                    marginLeft: index === 0 ? SIZES.padding : 18,
                                    marginRight: index === Recommend.length - 1 ? SIZES.padding : 0,
                                    paddinRight: SIZES.radius,
                                    alignItems: 'center'
                                }}
                                imageStyle={{
                                    marginTop: 35,
                                    height: 150,
                                    width: 150
                                }}
                                item={item}
                                onPress={() => console.log("horizontal food card")}
                            />
                        )
                    }}
                />
            </Section>
        )
    }

    const popularSection = () => {
        return (
            <Section
                title="Popluar Near you"
                onPress={() => console.log("show all popular")}
            >
                <FlatList
                    horizontal
                    data={Popular}
                    keyExtractor={item => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <VerticalFoodCard
                                containerStyle={{
                                    marginLeft: index === 0 ? SIZES.padding : 18,
                                    marginRight: Popular.length - 1 ? SIZES.padding : 0,
                                    padding: 18
                                }}
                                item={item}
                                onPress={() => console.log("---- Vertical food card ---")}
                            />
                        )
                    }}
                />
            </Section>
        )
    }

    const categroySection = () => {
        return (
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                height: 55,
                                marginTop: SIZES.padding,
                                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                                marginRight: dummyData.categories.length - 1 === index ? SIZES.padding : 0,
                                paddingHorizontal: 0,
                                backgroundColor: selectedCategoryId === item.id ? COLORS.primary : COLORS.lightGray2,
                                borderRadius: SIZES.radius
                            }}
                            onPress={() => {
                                setSelectedCategoryId(item.id)
                                handleChangeCategory(item.id, selectedMenuType)
                            }}
                        >

                            <Image
                                source={item.icon}
                                style={{
                                    height: 50,
                                    width: 50,
                                    marginTop: 5
                                }}
                            />
                            <Text
                                style={{
                                    alignSelf: 'center',
                                    marginRight: SIZES.base,
                                    color: selectedCategoryId === item.id ? COLORS.white : COLORS.darkGray,
                                    ...FONTS.h3
                                }}
                            >
                                {item.name}
                            </Text>

                        </TouchableOpacity>
                    )
                }}
            />
        )
    }

    const deliveryToSection = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding
                }}
            >
                <Text
                    style={{
                        color: COLORS.primary,
                        ...FONTS.body3
                    }}
                >
                    DELIVERY TO
                </Text>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{ ...FONTS.h3, color: 'black' }}
                    >{dummyData.myProfile.address}</Text>
                    <Image
                        style={{
                            marginLeft: SIZES.base, height: 20, width: 20
                        }}
                        source={icons.down_arrow}
                    />

                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/* search section */}
            {RenderSearch()}

            {/* filter Modal */}
            {
                showFilterModal &&
                <FilterModal
                    isVisible={showFilterModal}
                    onClose={() => setShowFilterModal(false)}
                />
            }

            {/* list */}
            <FlatList
                data={MenuList}
                keyExtractor={item => `${item.id}`}
                ListHeaderComponent={
                    <View>
                        {/* deliveryTo Section */}
                        {deliveryToSection()}

                        {/* category section */}
                        {categroySection()}

                        {/* popular section */}
                        {popularSection()}
                        {/* RecommendedSection */}
                        {renderRecommendedSection()}

                        {renderMenuType()}
                    </View>
                }
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius,

                            }}
                            imageStyle={{
                                marginTop: 20,
                                height: 110,
                                width: 110
                            }}
                            item={item}
                            onPress={() => console.log("-------- ")}

                        />
                    )
                }}
                ListFooterComponent={
                    <View style={{ height: 170 }} />
                }
            />

        </View>
    )
}