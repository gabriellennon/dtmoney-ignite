import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface TransactionModel {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext<TransactionModel[]>([]);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactionsData, setTransactionsData] = useState<TransactionModel[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactionsData(response.data.transactions))
    },  []);
    
    return (
        <TransactionContext.Provider value={transactionsData}>
            {children}
        </TransactionContext.Provider>
    );

}