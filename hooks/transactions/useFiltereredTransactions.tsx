import { useState } from 'react';
import useTransactions from './useTransactions';

const useTransactionFilters = () => {
    const {
        transactions,
        setFilterExpense,
        setFilterIncome,
        setFilterAll,
        setSortOrderAsc,
        setSortOrderDesc,
    } = useTransactions();

    const [selectedFilter, setSelectedFilter] = useState<'all' | 'expense' | 'income'>('all');
    const [selectedSortOrder, setSelectedSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleFilterChange = (filterType: 'all' | 'expense' | 'income') => {
        setSelectedFilter(filterType);
        switch (filterType) {
            case 'all':
                setFilterAll();
                break;
            case 'expense':
                setFilterExpense();
                break;
            case 'income':
                setFilterIncome();
                break;
        }
    };

    const handleSortChange = (sortOrder: 'asc' | 'desc') => {
        setSelectedSortOrder(sortOrder);
        if (sortOrder === 'asc') {
            setSortOrderAsc();
        } else {
            setSortOrderDesc();
        }
    };

    return {
        transactions,
        selectedFilter,
        selectedSortOrder,
        handleFilterChange,
        handleSortChange,
    };
};

export default useTransactionFilters;