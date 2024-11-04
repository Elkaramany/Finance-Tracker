import React, { useState } from 'react';
import { Container, List, FilteringModal, Button } from '@/components';
import Header from '@/components/header';
import { router } from 'expo-router';
import useTransactionFilters from '@/hooks/transactions/useFiltereredTransactions';
import { View } from 'react-native';
import { globalStyles } from '@/constants';

const Transactions = () => {
  const {
    transactions,
    selectedFilter,
    selectedSortOrder,
    handleFilterChange,
    handleSortChange,
  } = useTransactionFilters();

  const [sortingModalOpen, setSortingModalOpen] = useState(false);

  return (
    <Container>
      <Header title="Transactions" onIconPress={() => router.push('/add')} />
      <FilteringModal
        visible={sortingModalOpen}
        onClose={() => setSortingModalOpen(false)}
        selectedFilter={selectedFilter}
        selectedSortOrder={selectedSortOrder}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <List data={transactions} />
      {!sortingModalOpen &&
        <View style={globalStyles.bottomContainer}>
          <Button value='Sort Or Filter'
            onPress={() => setSortingModalOpen(true)} />

          <Button value='Summary'
            onPress={() => router.push('/summary')} />
        </View>
      }

    </Container>
  );
};

export default Transactions;
