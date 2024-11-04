import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Constants from 'expo-constants';

interface Props {
    parentContainerStyle?: ViewStyle
    childContainerStyle?: ViewStyle
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ parentContainerStyle, childContainerStyle, children }) => {
    return (
        <View
            style={[styles.parent, parentContainerStyle]}>
            <View style={[styles.child, childContainerStyle,]}>
                {children}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    child: {
        flex: 1,
        marginHorizontal: '3.5%',
        paddingTop: Constants.statusBarHeight
    }
})

export default Container