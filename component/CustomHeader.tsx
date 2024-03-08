import { Dimensions, Image, ImageComponent, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

interface HeaderProps {
    title?: string,
    iconLeft?: string,
    iconRight?: string,
    onPressRight?: () => void,
    onPressLeft?: () => void,
    leftComponent?: ReactNode,
    centerComponent?: ReactNode,
    rightComponent?: ReactNode,
    bgColor?: string,
    iconLeftColor?: string,
    iconRightColor?: string,
    leftIconSize?: number,
    rightIconSize?: number,
    numberOfLine?: number,
}

const CustomHeader = (props: HeaderProps): React.JSX.Element => {
    const { leftComponent, iconLeft, iconLeftColor, leftIconSize, numberOfLine, rightIconSize, iconRightColor, bgColor, rightComponent, centerComponent, onPressLeft, onPressRight, iconRight, title } = props;
    const renderLeft = () => {
        return (
            leftComponent || (
                <View style={{
                    flex:1,
                }}>
                    {iconLeft ? (
                        <Pressable hitSlop={15} onPress={onPressLeft}>
                            <Image source={{ uri: iconLeft }} style={{ tintColor: iconLeftColor, width: leftIconSize, height: leftIconSize }} />
                        </Pressable>
                    ) : (
                        <View style={{ width: leftIconSize, height: leftIconSize }} />
                    )}
                </View>
            )
        )
    }
    const renderCenter = () => {
        return (
            centerComponent || (
                <View style={{
                    flex:1,
                    justifyContent:'center',
                }}>
                    <Text style={{
                        textAlign:'center',
                        fontSize: 20,
                        color:'black',
                        fontWeight:'bold'
                    }} numberOfLines={numberOfLine}>{title}</Text>
                </View>
            )
        )
    }
    const renderRight = () => {
        return (
            rightComponent || (
                <View style={{
                    flex:1,
                    alignItems: 'flex-end'
                }}>
                    {iconRight ? (
                        <Pressable hitSlop={15} onPress={onPressRight}>
                            <Image source={{uri: iconRight}} style={{ tintColor: iconRightColor, width: rightIconSize, height: rightIconSize }} />
                        </Pressable>
                    ) : (
                        <View style={{ width: rightIconSize, height: rightIconSize }} />
                    )}
                </View>
            )
        )
    }
    return (
        <View style={{
            width: Dimensions.get('window').width,
            height: 50,
            backgroundColor: 'yellow',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: "space-between",
            paddingHorizontal:20,
            marginBottom:10,
        }}>
            {renderLeft()}
            {renderCenter()}
            {renderRight()}
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({})