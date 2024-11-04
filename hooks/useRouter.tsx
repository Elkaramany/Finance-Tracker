import { useEffect } from 'react';
import { router } from 'expo-router';

const useAppRouter = () => {
    useEffect(() => {
        router.replace('/transactions')
    }, []);
};

export default useAppRouter