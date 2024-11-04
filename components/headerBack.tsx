import { View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { globalStyles } from '@/constants'
import Text from './text'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";


const HeaderBack = ({ title }: { title: string }) => {
    return (
        <View style={globalStyles.rowBetween}>
            <TouchableOpacity onPress={() => router.back()}>
                <AntDesign name="caretleft" size={24} color="black" />
            </TouchableOpacity>
            <Text value={title} h3 tall />
            <View />
        </View>

    )
}
export default memo(HeaderBack)