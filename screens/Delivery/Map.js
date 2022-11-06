import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import MapViewDirections from 'react-native-maps-directions';
import { IconButton } from '../../components';
import LinearGradient from 'react-native-linear-gradient';


// ====  NOTE====
// *** Add your google map key in AndroidManifest.xml file to see work map fucntionality * **


const Map = () => {

    const initalcoordinates = {
        latitude: 33.6844,
        longitude: 73.0479,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
    }

    const destination = {
        latitude: 33.7077,
        longitude: 73.0498
    }

    const toCoordination = {
        latitude: 33.6492,
        longitude: 73.0815
    }

    const mapRef = useRef()
    const [region, setRegion] = useState(null)
    const [Toloc, setToLoc] = useState(null)
    const [FromLoc, setFromLoc] = useState(null)

    const [angle, setangle] = useState(0)
    const [ready, setReady] = useState(false)
    const [duration, setduration] = useState(0)
    useEffect(() => {

        setRegion(initalcoordinates)
        setToLoc(destination)
        setFromLoc(toCoordination)
    }, [])


    const renderMap = () => {
        return (
            <MapView
                initialRegion={region}
                style={{
                    flex: 1
                }}
            >
                {FromLoc &&

                    <Marker
                        key={"From loc"}
                        coordinate={FromLoc}
                        tracksViewChanges={false}
                        // icon={icons.navigator1}
                        rotation={angle}
                        anchor={{ x: 0.5, y: 0.5 }}
                    />
                }
                {Toloc &&

                    <Marker
                        key={"To loc"}
                        coordinate={Toloc}
                        tracksViewChanges={false}
                        // icon={icons.location_pin}
                        rotation={angle}
                        anchor={{ x: 0.5, y: 0.5 }}
                    />
                }

                <MapViewDirections
                    origin={FromLoc}
                    destination={Toloc}
                    strokeWidth={5}
                    strokeColor={COLORS.primary}
                    optimizeWaypoints
                    onReady={(result) => {
                        setduration(Math.ceil(result.distance))

                        if (!ready) {
                            mapRef.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: (SIZES.width / 20),
                                    bottom: (SIZES.height / 20),
                                    left: (SIZES.width / 20),
                                    top: (SIZES.heigh / 20),
                                }
                            });
                        }
                    }}
                    onError={(errorMessage) => {
                        console.log('GOT AN ERROR', errorMessage);
                    }}
                />

            </MapView>
        )
    }

    const renderHeaderInfo = () => {
        return (
            <>
                <View
                    style={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                    }}
                >
                    <IconButton
                        containerStyle={{
                            ...styles.iconStyle
                        }}
                        icon={icons.back}

                    />
                </View>

                <View
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                    }}
                >
                    <IconButton
                        containerStyle={{
                            ...styles.iconStyle
                        }}
                        icon={icons.globe}

                    />
                    <IconButton
                        containerStyle={{
                            marginTop: SIZES.radius,
                            ...styles.iconStyle
                        }}
                        icon={icons.focus}

                    />
                </View>
            </>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: COLORS.white,
                    padding: SIZES.padding,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25
                }}
            >
                {/* Linear gradient */}
                <LinearGradient
                    colors={[
                        COLORS.transparent, COLORS.lightGray1
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={{
                        position: 'absolute',
                        top: -20,
                        left: 0,
                        right: 0,
                        height: 20
                    }}
                />
                {/* info */}

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >

                    <Image
                        source={icons.clock}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.black
                        }}
                    />

                    <View
                        style={{
                            marginLeft: SIZES.radius
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.gray,
                                ...FONTS.body4
                            }}
                        >

                            Your Delivery Time
                        </Text>

                        <Text
                            style={{
                                color: COLORS.black,
                                ...FONTS.h3
                            }}
                        >
                            37 minutes
                        </Text>
                    </View>

                </View>

                {/* Address info */}

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >

                    <Image
                        source={icons.focus}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.black
                        }}
                    />

                    <View
                        style={{
                            marginLeft: SIZES.radius
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.gray,
                                ...FONTS.body4
                            }}
                        >

                            Your Addrees
                        </Text>

                        <Text
                            style={{
                                color: COLORS.black,
                                ...FONTS.h3
                            }}
                        >
                            ISB , street # 34 , I8 section, PK
                        </Text>
                    </View>

                </View>

                {/* TextButton */}
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        height: 65,
                        borderRadius: SIZES.radius,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        padding: SIZES.radius
                    }}
                >
                    {/* Image */}

                    <Image
                        source={images.profile}
                        style={{
                            width: 35,
                            height: 35,
                            borderRadius: 5
                        }}
                    />

                    {/* info */}

                    <View
                        style={{
                            flex: 1,
                            marginLeft: SIZES.radius
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                        >
                            John Doe
                        </Text>

                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                        >
                            Delivery Man
                        </Text>
                    </View>

                    {/* call bnt */}

                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: COLORS.white,
                            backgroundColor: COLORS.transparentWhite1,
                            height: 40,
                            width: 40
                        }}
                    >
                        <Image
                            source={icons.call}
                            style={{
                                height: 25,
                                width: 25
                            }}

                        />

                    </View>
                </TouchableOpacity>

            </View>
        )
    }


    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {renderMap()}

            {/* header btns */}

            {renderHeaderInfo()}

            {/* footer */}
            {renderFooter()}

        </View>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        height: 40,
        width: 40,
        backgroundColor: COLORS.white
    }
})
export default Map