import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeSvg from '../../assets/close.svg';
import icomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';

import { TransactionContext } from '../../TransactionContext';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    const { createTransaction } = useContext(TransactionContext);
    
    //Armazenando qual botao foi clicado
    //Storing which button was clicked
    const [type, setType] = useState('deposit');

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        createTransaction({
            title,
            amount,
            category,
            type
        })
        
    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeSvg} alt="Close modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastar transação</h2>

                <input 
                    type="text" 
                    placeholder='Título' 
                    value={title} 
                    onChange={event => setTitle(event.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Valor" 
                    value={amount} 
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={icomeSvg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeSvg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    type="text" 
                    placeholder="Categoria" 
                    value={category} 
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastar</button>
            </Container>
        </Modal>
    );
}