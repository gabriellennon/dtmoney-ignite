import Modal from 'react-modal';
import { Container } from './styles';
import closeSvg from '../../assets/close.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
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
                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastar</button>
            </Container>
        </Modal>
    );
}