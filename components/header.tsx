import { TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import Text from './text'
import Ionicons from '@expo/vector-icons/Ionicons';
import { globalStyles } from '@/constants';


const Header = ({ title, onIconPress }: { title: string, onIconPress: () => void }) => {
    return (
        <View style={globalStyles.rowBetween} testID="header-container">
            <Text value={title} h2 tall testID="header-text" />
            <TouchableOpacity
                testID='header-add-button'
                onPress={onIconPress}>
                <Ionicons name="add-circle-sharp" size={24}
                    color="black"
                    testID="add-circle-sharp"
                />
            </TouchableOpacity>
        </View>
    )
}
export default memo(Header)