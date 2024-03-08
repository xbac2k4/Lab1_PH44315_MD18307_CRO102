import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

interface CustomInputProps {
    title: string,
    hint: string,
    iconUrl?: string,
    required?: string,
    isError?: boolean,
    errorText?: string,
    cursorColor?: string,
}

const WrapInput = (props: CustomInputProps): React.JSX.Element => {
    // Lấy ra các props đá khai báo
    const { title, hint, iconUrl = 'https://clipground.com/images/user-icon-vector-png-6.png', isError, cursorColor, errorText} = props
    return (
        <View style={{
            paddingHorizontal: 20,
        }}>
            <Text style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 5,
            }}>{title}</Text>
            <View style={[
                styles.borderInput,
                isError ? {borderColor:'red', backgroundColor:'#FF00000F'} : {borderColor:'black'},
            ]}>
                <Image style={{
                    width: 25,
                    height: 25,
                    marginHorizontal: 10,
                }} source={{ uri: iconUrl }} />
                <TextInput onFocus={() => {
                    
                }} cursorColor={cursorColor} placeholder={hint} style={{
                    width: 300,
                    fontSize: 18,
                }} />
                {isError ? <Image style={{
                    width: 25,
                    height: 25,
                    position:'absolute',
                    right:10,
                }} source={require('../assets/image/info.png')} /> : null}
            </View>
            {isError ? <Text style={{
                color:'red',
                paddingLeft:10,
                paddingTop:5,
            }}>{errorText}</Text> : null}
        </View>
    )
}

const CustomInput = () => {
    return (
        <View>
            <WrapInput 
                title='Title' 
                hint='Place holder'
                errorText='Lỗi' 
                isError={true} >
            </WrapInput>
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    borderInput: {
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1
    }
})