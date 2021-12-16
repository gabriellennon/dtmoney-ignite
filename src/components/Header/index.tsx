import { useState } from 'react'
import logoImg from '../../assets/logo.svg';

import { 
    Container, 
    Content,
} from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

//Componente Header recebe essa props open que é uma funcao
//Header Component receive this props open what is a function
export function Header({ onOpenNewTransactionModal }: HeaderProps){
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    )
}