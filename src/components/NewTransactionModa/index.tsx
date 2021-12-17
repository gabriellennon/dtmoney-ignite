import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeSvg from '../../assets/close.svg';
import icomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    //Armazenando qual botao foi clicado
    //Storing which button was clicked
    const [type, setType] = useState('deposit')


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
            <Container>
                <h2>Cadastar transação</h2>

                <input type="text" placeholder='Título' />
                <input type="number" placeholder="Valor" />

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

                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastar</button>
            </Container>
        </Modal>
    );
}