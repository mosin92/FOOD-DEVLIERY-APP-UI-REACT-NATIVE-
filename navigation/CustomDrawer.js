import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { COLORS, FONTS, SIZES, constants, dummyData, icons, images } from '../constants'
import MainLayout from '../screens/MainLayout'


const CustomDrawerItems = ({ label, icon }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center',
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
            }}
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white
                }}
            />
            <Text
                style={{
                    color: COLORS.white,
                    ...FONTS.h3,
                    marginLeft: 15
                }}
            >
                {label}
            </Text>

        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({ navigation }) => {
    return (
        <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>

                {/* close btn */}
                <View>
                    <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                        <Image source={icons.cross} style={{ height: 35, width: 35, tintColor: COLORS.white }} />
                    </TouchableOpacity>
                </View>

                {/* Profile */}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius
                    }}
                >
                    <Image source={dummyData.myProfile.profile_image} style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                    />

                    <View
                        style={{
                            marginLeft: SIZES.radius,

                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                            {dummyData.myProfile?.name}
                        </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
                            View your profile
                        </Text>

                    </View>
                </TouchableOpacity>
                {/* drawer items */}
                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >
                    <CustomDrawerItems
                        label={constants.screens.home}
                        icon={icons.home}
                    />
                    <CustomDrawerItems
                        label={"My wallet"}
                        icon={icons.wallet}
                    />
                    <CustomDrawerItems
                        label={constants.screens.notification}
                        icon={icons.notification}
                    />
                    <CustomDrawerItems
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                    />

                    {/* Line divider */}
                    <View
                        style={{
                            marginVertical: SIZES.radius,
                            backgroundColor: COLORS.lightGray1,
                            height: 1,
                            marginLeft: SIZES.radius
                        }}
                    />
                    <CustomDrawerItems
                        label={"Track your Order"}
                        icon={icons.location}
                    />
                    <CustomDrawerItems
                        label={"Coupons"}
                        icon={icons.coupon}
                    />
                    <CustomDrawerItems
                        label={"Setting"}
                        icon={icons.setting}
                    />
                    <CustomDrawerItems
                        label={"Invite a Friend"}
                        icon={icons.profile}
                    />
                    <CustomDrawerItems
                        label={"Help Center"}
                        icon={icons.help}
                    />
                </View>
                <View
                    style={{
                        marginBottom: SIZES.padding,
                        flex:1,
                        justifyContent:'flex-end'
                    }}
                >
                    <CustomDrawerItems
                        label={"Log Out"}
                        icon={icons.logout}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const Drawer = createDrawerNavigator()
export default function CustomDrawer() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerType: 'slide',
                    overlayColor: 'transparent',
                    drawerStyle: {
                        flex: 1,
                        width: '100%',
                        paddingRight: 20,
                        backgroundColor: 'transparent'
                    },
                    sceneContainerStyle: 'transparent',

                }}
                initialRouteName="MainLayout"
                drawerContent={props => <CustomDrawerContent navigation={props.navigation} />}
            >
                <Drawer.Screen name='MainLayout'>
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>

            </Drawer.Navigator>

        </View>
    )
}