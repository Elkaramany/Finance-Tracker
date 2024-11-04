import React, { memo } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native';
import { Container, HeaderBack, Text } from '@/components'
import useMonthlySummary from '@/hooks/transactions/useSummary'
import PieChart from 'react-native-pie-chart';
import { scale, verticalScale } from '@/constants';

const Summary = () => {
    const { totalIncome, totalExpenses, expensesByCategory } = useMonthlySummary()
    const widthAndHeight = scale(150);

    // Prepare data for Pie Chart
    const series = Object.values(expensesByCategory);
    const sliceColor = ['red', 'blue', 'green', 'yellow'];

    return (
        <Container>
            <HeaderBack title='Summary' />

            <Text value={`Total expenses this Month: ${totalExpenses}`}
                h3 tall
            />

            <Text value={`Total Income this Month: ${totalIncome}`}
                h3 tall
            />

            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text value='Expenses by Category:' h3 tall style={{ marginVertical: verticalScale(50) }} />
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                    />

                    <View style={styles.legendContainer}>
                        {Object.keys(expensesByCategory).map((category, index) => (
                            <View key={category} style={styles.legendItem}>
                                <View style={[styles.colorBox, { backgroundColor: sliceColor[index] }]} />
                                <Text value={`${category}: ${series[index]}`}
                                    style={styles.legendText} />
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </Container>
    )
}

export default memo(Summary)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        margin: 10,
    },
    legendContainer: {
        marginTop: 20,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    colorBox: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    legendText: {
        fontSize: 16,
    },
});