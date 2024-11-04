import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import Text from './text'
import Ionicons from '@expo/vector-icons/Ionicons';
import { globalStyles } from '@/constants';


const Header = ({ title, onIconPress }: { title: string, onIconPress: () => void }) => {
    return (
        <View style={globalStyles.rowBetween}>
            <Text value={title} h2 tall />
            <TouchableOpacity onPress={onIconPress}>
                <Ionicons name="add-circle-sharp" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default memo(Header)

const styles = StyleSheet.create({})