import { TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

const ArrowBack = () => {
    return (
        <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="caretleft" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default memo(ArrowBack)