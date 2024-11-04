import { StyleSheet, View } from 'react-native';
import React from 'react';
import Text from './text';
import { FlashList } from "@shopify/flash-list";
import { Transaction } from '@/state/reducers/transactions';
import { scale } from '@/constants';

interface Props {
    data: Transaction[];
}

const List: React.FC<Props> = ({ data }) => {

    const renderItem = (item: Transaction) => {
        return (
            <View style={styles.container}>
                <Text value={`Description: ${item.description}`} />
                <Text value={`Type: ${item.type}`} />
                <Text value={`Amount: $${item.amount.toFixed(2)}`} />
                <Text value={`Category: ${item.category}`} />
                <Text value={`Date: ${new Date(item.date).toLocaleDateString()}`} />
                <Text value={`Time: ${new Date(item.date).toLocaleTimeString()}`} />
            </View>
        );
    };

    return (
        <FlashList
            data={data}
            renderItem={({ item }) => renderItem(item)}
            estimatedItemSize={200}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => <Text value='No transactions added yet' />}
        />
    );
};

export default List;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        borderRadius: scale(10)
    }
});
