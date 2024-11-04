import { useMemo } from 'react';
import useTransactions from './useTransactions';
import { transactionCategory } from '@/state/reducers/transactions';

const useMonthlySummary = () => {
    const { transactions } = useTransactions();

    const { totalIncome, totalExpenses, expensesByCategory } = useMemo(() => {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        let incomeTotal = 0;
        let expenseTotal = 0;
        
        const categoryExpenses: Record<transactionCategory, number> = {
            housing: 0,
            supplies: 0,
            food: 0,
            utilities: 0,
        };

        transactions.forEach((transaction) => {
            const transactionDate = new Date(transaction.date);
            const isCurrentMonth =
                transactionDate.getMonth() === currentMonth &&
                transactionDate.getFullYear() === currentYear;

            if (isCurrentMonth) {
                if (transaction.type === 'income') {
                    incomeTotal += transaction.amount;
                } else if (transaction.type === 'expense') {
                    expenseTotal += transaction.amount;
                    const category = transaction.category as transactionCategory;
                    if (category in categoryExpenses) {
                        categoryExpenses[category] += transaction.amount;
                    }
                }
            }
        });


        return {
            totalIncome: incomeTotal,
            totalExpenses: expenseTotal,
            expensesByCategory: categoryExpenses
        };
    }, [transactions]);

    return { totalIncome, totalExpenses, expensesByCategory };
};

export default useMonthlySummary;