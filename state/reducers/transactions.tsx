import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type transactionsType = 'income' | 'expense';
export type transactionCategory = 'housing' | 'supplies' | 'food' | 'utilities';

export interface Transaction {
    id: string;
    type: transactionsType;
    amount: number;
    category: transactionCategory;
    date: string;
    description: string;
}

export interface TransactionsState {
    transactions: Transaction[];
}

const initialState: TransactionsState = {
    transactions: [],
};

const transactionsSlice = createSlice({
    name: 'transactionsState',
    initialState,
    reducers: {
        addTransaction(state, action: PayloadAction<Transaction>) {
            state.transactions.push(action.payload);
        },
        updateTransaction(state, action: PayloadAction<{ id: string; updatedTransaction: Partial<Transaction> }>) {
            const { id, updatedTransaction } = action.payload;
            const index = state.transactions.findIndex(transaction => transaction.id === id);
            if (index !== -1) {
                state.transactions[index] = { ...state.transactions[index], ...updatedTransaction };
            }
        },
        resetTransactionsState() {
            return initialState;
        },
    },
});

export const {
    addTransaction,
    updateTransaction,
    resetTransactionsState,
} = transactionsSlice.actions;
export const reducer = transactionsSlice.reducer;