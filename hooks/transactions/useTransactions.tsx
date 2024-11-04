import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { TransactionsState, Transaction, addTransaction, updateTransaction, resetTransactionsState } from '@/state/reducers/transactions';
import uuid from 'react-native-uuid';
import { useState, useMemo } from 'react';

const selectTransactions = createSelector(
    (state: { transactionsState: TransactionsState }) => state.transactionsState,
    ({ transactions }) => transactions
);

const useTransactions = () => {
    const dispatch = useDispatch();
    const transactions = useSelector(selectTransactions);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [filterType, setFilterType] = useState<'all' | 'expense' | 'income'>('all');

    const addNewTransaction = (transaction: Omit<Transaction, 'id'>) => {
        const transactionWithId = {
            ...transaction,
            id: uuid.v4().toString(),
        };
        dispatch(addTransaction(transactionWithId));
    };

    const updateTransactionById = (id: string, updatedTransaction: Partial<Transaction>) => {
        dispatch(updateTransaction({ id, updatedTransaction }));
    };

    const resetTransactions = () => {
        dispatch(resetTransactionsState());
    };

    const filteredTransactions = useMemo(() => {
        if (filterType === 'all') {
            return transactions;
        }
        return transactions.filter(transaction => transaction.type === filterType);
    }, [transactions, filterType]);

    const sortedTransactions = useMemo(() => {
        // Create a shallow copy of filteredTransactions
        const transactionsCopy = [...filteredTransactions];

        // Sort the copied array
        return transactionsCopy.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
    }, [filteredTransactions, sortOrder]);


    const setSortOrderAsc = () => setSortOrder('asc');
    const setSortOrderDesc = () => setSortOrder('desc');

    const setFilterAll = () => setFilterType('all');
    const setFilterExpense = () => setFilterType('expense');
    const setFilterIncome = () => setFilterType('income');

    return {
        transactions: sortedTransactions,
        addNewTransaction,
        updateTransactionById,
        resetTransactions,
        setSortOrderAsc,
        setSortOrderDesc,
        setFilterAll,
        setFilterExpense,
        setFilterIncome,
    };
};

export default useTransactions;
