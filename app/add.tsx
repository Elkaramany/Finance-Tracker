import { View } from 'react-native';
import React, { memo } from 'react';
import { Container, Input, Text, RadioButton, Picker, DateTime, Button, HeaderBack } from '@/components';
import { globalStyles, HEIGHT, verticalScale } from '@/constants';
import { transactionCategory, transactionsType } from '@/state/reducers/transactions';
import useAddTransactions from '@/hooks/transactions/useAddTransactions';

const TransactionTypeSelector = memo(({ type, onChange }:
    { type: transactionsType, onChange: (val: transactionsType) => void }) => (
    <View style={globalStyles.rowBetween}>
        <RadioButton
            title='Expense'
            selected={type === 'expense'}
            setSelected={() => onChange('expense')}
        />
        <RadioButton
            title='Income'
            selected={type === 'income'}
            setSelected={() => onChange('income')}
        />
    </View>
))

const AmountInput = memo(({ amount, onChange }:
    { amount: number, onChange: (val: string) => void }) => (
    <Input
        value={amount.toString()}
        onChangeText={(val) => onChange(val)}
        placeholder='10'
        keyboardType='phone-pad'
    />
))

const DescriptionInput = memo(({ description, onChange }:
    { description: string, onChange: (val: string) => void }) => (
    <Input
        value={description}
        onChangeText={(val) => onChange(val)}
        placeholder='Rent'
        multiline
        style={{ height: HEIGHT * 0.1 }}
    />
))

const CategoryPicker = memo(({ category, onChange }:
    { category: transactionCategory, onChange: (val: string | number) => void }) => (
    <Picker
        selectedValue={category}
        onValueChange={(itemValue) => onChange(itemValue)}
        items={[
            { label: 'Housing', value: 'housing' },
            { label: 'Supplies', value: 'supplies' },
            { label: 'Food', value: 'food' },
            { label: 'Utilities', value: 'utilities' },
        ]}
    />
))

const Add = () => {
    const { newTransaction, handleTransactionChange, handleAddTransaction } = useAddTransactions()

    return (
        <Container>
            <HeaderBack title='Add new transaction' />

            <Text value='Select transaction type:' style={{ marginTop: verticalScale(10) }} />
            <TransactionTypeSelector type={newTransaction.type} onChange={(type) => handleTransactionChange('type', type)} />

            <Text value='Enter transaction amount:' style={{ marginTop: verticalScale(10) }} />
            <AmountInput amount={newTransaction.amount} onChange={(amount) => handleTransactionChange('amount', parseFloat(amount))} />

            <Text value='Enter transaction description:' style={{ marginTop: verticalScale(10) }} />
            <DescriptionInput description={newTransaction.description} onChange={(description) => handleTransactionChange('description', description)} />

            <DateTime
                selectedDate={newTransaction.date ? new Date(newTransaction.date) : new Date()}
                onDateChange={(date: Date) => {
                    if (date) {
                        handleTransactionChange('date', date.toISOString());
                    }
                }}
            />


            <Text value='Select transaction category:' style={{ marginTop: verticalScale(10) }} />
            <CategoryPicker category={newTransaction.category} onChange={(category) => handleTransactionChange('category', category)} />

            <Button
                value='Save'
                onPress={handleAddTransaction}
                buttonStyle={globalStyles.bottomAbsoluted}
            />
        </Container>
    );
};

export default memo(Add);