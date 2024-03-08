import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextStyle, View } from 'react-native'
import React, { ReactNode } from 'react'

interface DATA {
    data?: [];
}
interface EventProps {
    title?: string;
    content?: string;
    titleStyle?: TextStyle;
    contentStyle?: TextStyle;
    contentComponent?: ReactNode;
    eventComponent?: ReactNode;
}
interface SectionProps {
    title: string;
    titleStyle?: TextStyle;
    events?: EventProps[];
}
const renderChild = (data: EventProps, index: number) => {
    const { title, content, titleStyle, contentStyle, contentComponent, eventComponent } = data;
    return (
        eventComponent || (
            <View style={{
                marginBottom:10,
            }}>
                <Text style={[styles.titleChild, titleStyle]}>{title}</Text>
                {contentComponent || (
                    <Text style={[styles.contentChild, contentStyle]}>{content}</Text>
                )}
            </View>
        )
    )
}
const renderSecttion = (data: SectionProps, index: number) => {
    const { title, events, titleStyle } = data;
    return (
        <View key={index.toString()} style={{
            padding: 10,
        }}>
            <Text style={[styles.titleSection, titleStyle]}>{title}</Text>
            <View style={[styles.sectionBody, styles.shadow]}>
                {events?.map(renderChild)}
            </View>
        </View>
    )
}
const CustomSetion = (props : DATA):React.JSX.Element => {
    const {data} = props;
    return (
        <ScrollView>
            {data?.map?.(renderSecttion)}
        </ScrollView>
    )
}

export default CustomSetion

const styles = StyleSheet.create({
    titleSection: {
        fontSize: 20,
        color: "black",
        fontWeight: 'bold',
    },
    sectionBody: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        margin: 10,
    },
    shadow: {
        elevation: 10,
    },
    titleChild: {
        fontSize:14,
    },
    contentChild: {
        fontSize:16,
        fontWeight: 'bold',
        color:  '#1976D2',
        paddingLeft:5,
    }
})