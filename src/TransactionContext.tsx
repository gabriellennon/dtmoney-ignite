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

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }
//Mesma coisa, só que mais enxuto, vai herdar tudo menos id e createdAt
type TransactionInput = Omit<TransactionModel, 'id' | 'createdAt'>

//Mesma coisa só que aqui eu seleciono os que eu quero
// type TransactionInput = Pick<TransactionModel, 'title' | 'amount' | 'type'>
interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactionsData: TransactionModel[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactionsData, setTransactionsData] = useState<TransactionModel[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactionsData(response.data.transactions))
    },  []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = response.data;

        //immutability concept: keeps old and add new data
        //Conceito de imutabilidade: mantem o que ja tem e adiciona o novo
        setTransactionsData([
            ...transactionsData,
            transaction,
        ]);
    }
    
    return (
        <TransactionContext.Provider value={{ transactionsData, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    );

}