import { useState, useCallback } from 'react';
import { Transaction } from '@/state/reducers/transactions';
import { Alert } from 'react-native';
import useTransactions from './useTransactions';
import { router } from 'expo-router';

interface TransactionForm extends Omit<Transaction, 'id'> { }

const allowedCategories = ['housing', 'supplies', 'food', 'utilities'] as const;
const allowedTransactionTypes = ['income', 'expense'] as const;

const initialTransactopn: TransactionForm = {
    type: 'expense',
    amount: 10,
    category: 'housing',
    date: new Date().toISOString(),
    description: '',
}


const useAddTransactions = () => {
    const { addNewTransaction } = useTransactions()
    const [newTransaction, setNewTransaction] = useState<TransactionForm>(initialTransactopn);

    const handleTransactionChange = useCallback(<K extends keyof TransactionForm>(
        key: K,
        value: TransactionForm[K]
    ) => setNewTransaction((prev) => ({ ...prev, [key]: value })), []);

    const validateTransaction = useCallback(() => {
        const { type, amount, category, description } = newTransaction;

        if (!allowedTransactionTypes.includes(type)) {
            Alert.alert('Invalid transaction type')
            return false;
        }

        if (typeof amount !== 'number' || amount <= 0) {
            Alert.alert('Amount must be a positive number')
            return false;
        }

        if (!allowedCategories.includes(category)) {
            Alert.alert('Invalid transaction category')
            return false;
        }

        if (description.trim() === '') {
            Alert.alert('Description cannot be empty')
            return false;
        }

        return true;
    }, [newTransaction]);

    const handleAddTransaction = useCallback(() => {
        if (!(validateTransaction())) {
            return;
        }

        addNewTransaction(newTransaction)
        setNewTransaction(initialTransactopn)
        Alert.alert('Transaction added', 'Do you want to add another transaction', [
            {
                text: 'No',
                onPress: () => router.back(),
                style: 'cancel',
            },
            { text: 'Yes', onPress: () => { } },
        ]);
    }, [newTransaction])

    return {
        newTransaction,
        handleTransactionChange,
        handleAddTransaction,
    };
};

export default useAddTransactions;
